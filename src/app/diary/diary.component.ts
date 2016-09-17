import {Component} from '@angular/core';
import { AppState } from '../app.service';
import {ArticleService} from '../services'

@Component({
  selector: 'article',
  styleUrls: ['./article.style.css'],
  templateUrl: './article.template.html'

})

export class Article {
  articles = [];

  constructor(public appState: AppState, private articleService: ArticleService) {
    this.articleService.getArticles()
      .subscribe(res => this.articles = res);
  }

  onCreateArticle(article) {
    this.articleService.createArticle(article)
      .subscribe(article => this.articles.push(article));
  }

  // Set our default values
  localState = { value: '' };
  // TypeScript public modifiers


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
