import { Injectable } from '@angular/core';
import { ApiService } from './api';
import 'rxjs/Rx';
import { StoreHelper } from './store-helper';


@Injectable()
export class ArticleService {
  path: string = '/api/posts';
  constructor(
    private apiService: ApiService,
    private storeHelper: StoreHelper
  ) {}

  createArticle(article) {
    return this.apiService.post(this.path, article)
      .do(savedArticle => this.storeHelper.add('articles', savedArticle));
  }

  getArticles() {
    return this.apiService.get(this.path)
      .do(res => this.storeHelper.update('articles', res));
  }
  getArticle(id) {
    return this.getArticles()
      .map(articles => articles.find(a => a._id === id));

  }

  deleteArticle(article) {
    console.log(article)
    return this.apiService.delete(`${this.path}/${article._id}`)
      .do(res => this.storeHelper.findAndDelete('articles', res._id));
  }
}
