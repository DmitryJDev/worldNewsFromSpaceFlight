import { Component, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../interfaces/article';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  template: `
    <div class="container">
      
    
    @if(loading()){
      <div class="loading-container">
        <mat-spinner></mat-spinner>
        <p>Loading article...</p>
      </div>
      } 
      
      @if(article() && !loading()){
      <div class="article-content">
        <div class="header-image-container">
          
        @if(article()?.image_url){
          <img
            [src]="article()?.image_url"
            [alt]="article()?.title"
            class="header-image"
          />
          }

          <div class="image-overlay"></div>
        </div>

        <div class="content-block">
          <h1 class="article-title">{{ article()?.title }}</h1>
          <div class="article-text">
            <p>{{ article()?.summary }}</p>
          </div>
          <button mat-button routerLink="/" class="back-button">
            ← Back to homepage
          </button>
        </div>
      </div>
      } 
      
      @if(!article() && !loading()){
      <div class="not-found-container">
        <mat-card>
          <mat-card-content>
            <h2>Article Not Found</h2>
            <p>The article you are looking for does not exist.</p>
            <button mat-button color="primary" routerLink="/">
              Go to Homepage
            </button>
          </mat-card-content>
        </mat-card>
      </div>
      }
    </div>
  `,
  styleUrl: './article-detail.component.scss',
})
export class ArticleDetailComponent {
  private route = inject(ActivatedRoute);
  private articleService = inject(ArticleService);

  
  article = signal<Article | null>(null);
  loading = signal<boolean>(false);

  constructor() {
    
    effect(() => {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.loadArticle(parseInt(id));
      }
    });
  }

  loadArticle(id: number): void {
    this.loading.set(true);
    this.articleService.getArticleById(id).subscribe({
      next: (article) => {
        this.article.set(article);
        this.loading.set(false);
      },
      error: (error) => {
        console.error('Error loading article:', error);
        this.article.set(null);
        this.loading.set(false);
      },
    });
  }
}
