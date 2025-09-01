import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  map,
  catchError,
  of,
  BehaviorSubject,
  debounceTime,
  switchMap,
} from 'rxjs';
import { Article, ApiResponse } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.spaceflightnewsapi.net/v4/articles';

  public articles = signal<Article[]>([]);
  public loading = signal<boolean>(false);
  public query = signal<string>('');
  private searchTerms = new BehaviorSubject<string>('');
  constructor() {
    this.loadInitialArticles();
  }

  loadInitialArticles(): void {
    this.loading.set(true);
    this.http
      .get<ApiResponse>(`${this.apiUrl}/?limit=10`)
      .pipe(map((response) => response.results))
      .subscribe((articles) => {
        this.articles.set(articles);
        this.loading.set(false);
      });
  }

  search(query: string): void {
    this.query.set(query);
    this.loading.set(true);

    if (!query.trim()) {
      this.loadInitialArticles();
      return;
    }

    const stopWords = [
      'the',
      'a',
      'an',
      'and',
      'or',
      'but',
      'in',
      'on',
      'at',
      'to',
      'for',
      'of',
      'with',
      'by',
      'is',
      'are',
      'was',
      'were',
      'be',
      'been',
      'have',
      'has',
      'had',
      'do',
      'does',
      'did',
      'will',
      'would',
      'could',
      'should',
      'may',
      'might',
      'can',
      'must',
    ];

    const allKeywords = query.split(' ').filter((word) => word.length > 0);
    const meaningfulKeywords = allKeywords.filter(
      (word) => !stopWords.includes(word.toLowerCase())
    );
    const keywords = [...new Set(meaningfulKeywords)]; // Remove duplicates

    const searchKeywords =
      keywords.length > 0 ? keywords : [...new Set(allKeywords)];
    const keywordString = searchKeywords.join(',');

    this.http
      .get<ApiResponse>(
        `${this.apiUrl}/?title_contains_one=${keywordString}&summary_contains_one=${keywordString}&limit=100`
      )
      .pipe(
        map((response) => {
          let filteredArticles = response.results.filter((article) => {
            const titleLower = article.title.toLowerCase();
            const summaryLower = article.summary.toLowerCase();

            return searchKeywords.some(
              (keyword) =>
                this.hasWholeWord(titleLower, keyword) ||
                this.hasWholeWord(summaryLower, keyword)
            );
          });

          return filteredArticles.sort((a, b) => {
            const titleLowerA = a.title.toLowerCase();
            const titleLowerB = b.title.toLowerCase();
            const summaryLowerA = a.summary.toLowerCase();
            const summaryLowerB = b.summary.toLowerCase();

            const aHasTitleMatch = searchKeywords.some((keyword) =>
              this.hasWholeWord(titleLowerA, keyword)
            );

            const bHasTitleMatch = searchKeywords.some((keyword) =>
              this.hasWholeWord(titleLowerB, keyword)
            );

            const aHasSummaryMatch = searchKeywords.some((keyword) =>
              this.hasWholeWord(summaryLowerA, keyword)
            );

            const bHasSummaryMatch = searchKeywords.some((keyword) =>
              this.hasWholeWord(summaryLowerB, keyword)
            );

            // Priority
            if (aHasTitleMatch && !bHasTitleMatch) return -1;
            if (!aHasTitleMatch && bHasTitleMatch) return 1;

            if (aHasSummaryMatch && !bHasSummaryMatch) return -1;
            if (!aHasSummaryMatch && bHasSummaryMatch) return 1;

            return 0;
          });
        })
      )
      .subscribe((articles) => {
        this.articles.set(articles);
        this.loading.set(false);
      });
  }

  private hasWholeWord(text: string, word: string): boolean {
    const wordLower = word.toLowerCase();
    const regex = new RegExp(`\\b${wordLower}\\b`, 'i');
    return regex.test(text);
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`).pipe(
      map((article) => ({
        id: article.id,
        title: article.title,
        summary: article.summary,
        image_url: article.image_url,
        published_at: article.published_at,
      }))
    );
  }
}
