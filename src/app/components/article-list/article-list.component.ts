import { Component , inject, ElementRef, AfterViewInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { ArticleService } from '../../services/article.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
  template: `
    <div class="container ">
      <div class="search-section animate__animated animate__fadeInLeft">
        <label class="truncate text-sm text-gray-500 dark:text-gray-400 " >Filter by keywords</label>
        <div class="search-input-container ">
          <span class="search-icon  ">🔍</span>
          <input
            type="text"
            class="search-input "
            (input)="onSearch($event)"
            placeholder="Enter keywords to search articles..."
          />
        </div>
      </div>

      @if(articleService.articles().length > 0){
      <div class="results-info cursor-progress ">
        Results: {{ articleService.articles().length }}
      </div>
      }

      @if(articleService.loading()){
      <div class="loading-container">
        <mat-spinner></mat-spinner>
        <p>Loading articles...</p>
      </div>
      }

      @if(articleService.query() && articleService.articles().length === 0 &&
      !articleService.loading()){
      <div class="no-results">
        <mat-card>
          <mat-card-content>
            <h2>No articles found</h2>
            <p>Try different keywords or check your search terms.</p>
          </mat-card-content>
        </mat-card>
      </div>
      }

      @if(articleService.articles().length > 0 && !articleService.loading()){
      <div class=" animate__animated animate__fadeInUp  " style="animation-delay: 0.3s;">
        @for( article of articleService.articles(); track article.id){
        <mat-card class="article-card" [routerLink]="['/article', article.id]">
          <img
            mat-card-image
            [src]="article.image_url"
            [alt]="article.title"
            class="article-image"
          />
          <mat-card-content>
            <p class="article-date">{{ formatDate(article.published_at) }}</p>
            <mat-card-title
              [innerHTML]="highlightText(article.title, articleService.query())"
            ></mat-card-title>
            <p
              class="article-summary"
              [innerHTML]="
                highlightText(
                  getTruncatedSummary(article.summary),
                  articleService.query()
                )
              "
            ></p>
            <button mat-button class="read-more-btn   font-bold">  Read more</button>

          </mat-card-content>
        </mat-card>


        }
      </div>
      }
    </div>
    <br>
    <br>
    <hr>
    <br>
    <br>

    <div class="article-grid  animate__fadeInUp animate__delay-3s " style="background-color: #ffeb3b">
      <h2 >Aaaaaaaaaaä</h2>

    </div>
   <br>
    <br>
  `,
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent implements AfterViewInit {

 public articleService = inject(ArticleService);
 private searchSubject = new Subject<string>();

 constructor(private el: ElementRef) {
    this.searchSubject.pipe(
      debounceTime(1000)
    ).subscribe((query) => {
      this.articleService.search(query);
    });
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    const query = input.value.trim();
    this.searchSubject.next(query);
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  getTruncatedSummary(summary: string): string {
    if (summary.length <= 100) {
      return summary;
    }
    const truncated = summary.substring(0, 100);
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace > 80) {
      return truncated.substring(0, lastSpace) + '...';
    }
    return truncated + '...';
  }

  highlightText(text: string, query: string): string {
    if (!query || !text) return text;

    const allKeywords = query.split(' ').filter((word) => word.length > 0);
    const keywords = [...new Set(allKeywords)]; // Remove duplicates

    let highlightedText = text;

    keywords.forEach((keyword) => {
      const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escapedKeyword}\\b`, 'gi');
      highlightedText = highlightedText.replace(
        regex,
        '<span class="highlight">$&</span>'
      );
    });

    return highlightedText;
  }

  ngAfterViewInit() {
    const elements = this.el.nativeElement.querySelectorAll('.article-grid');
    console.log('Found elements:', elements.length);

    if (elements.length === 0) {
      console.error('No elements with class "article-grid" found!');
      return;
    }

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log('Element is visible, adding animate__animated:', entry.target);
            // Удаляем и добавляем класс для перезапуска анимации
            entry.target.classList.remove('animate__animated');
            // void entry.target.offsetWidth; // Триггер reflow
            entry.target.classList.add('animate__animated');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // rootMargin: '-50px 0px', // Анимация начинается, когда элемент на 50px выше
        // threshold: 0.1
      }
    );

    elements.forEach((element: Element) => {
      element.classList.remove('animate__animated');
      observer.observe(element);
      console.log('Observing element:', element);
    });
  }

}
