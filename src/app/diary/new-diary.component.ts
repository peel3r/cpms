import {Component} from '@angular/core';
import {ArticleService} from '../services'

@Component({
  selector: 'new-article',
  styleUrls: ['./article.style.css'],
  template: `
    <article-creator (createArticle)="onCreateArticle($event)"></article-creator>
`
})

export class NewArticle {
  articles = [];

  constructor(private articleService: ArticleService) {

  }

  onCreateArticle(article) {
    this.articleService.createArticle(article)
      .subscribe(article => this.articles.push(article));
  }

}
