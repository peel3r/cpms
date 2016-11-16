import { Component } from '@angular/core';
import { AppState } from '../app.service';
import { ArticleService } from '../services';
import { Store } from '../store';

@Component({
  selector: 'article',
  styleUrls: ['./article.style.css'],
  templateUrl: './article.template.html'

})

export class Article {
  articles = [];
  // Set our default values
  localState = { value: '' };
  // TypeScript public modifiers

  constructor(
    public appState: AppState,
    private articleService: ArticleService,
    private store: Store
  ) {
    this.store.changes.pluck('articles')
      .subscribe((articles: any) => this.articles = articles);

    this.articleService.getArticles()
      .subscribe();
  }

  onCreateArticle(article) {
    this.articleService.createArticle(article)
      .subscribe();
  }

  onArticleDeleted(article) {
    this.articleService.deleteArticle(article)
      .subscribe();
  }




  ngOnInit() {
    console.log('hello `Article` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
