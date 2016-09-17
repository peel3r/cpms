import { Injectable } from '@angular/core';
import { ApiService } from './api';
import 'rxjs/Rx';

@Injectable()
export class ArticleService {
  path: string = '/api/posts';
  constructor(private apiService: ApiService) {}

  createArticle(article) {
    return this.apiService.post(this.path, article)
  }

  getArticles() {
    return this.apiService.get(this.path)
  }

  completeArticle(article) {
    return this.apiService.delete(`${this.path}/${article.id}`)
  }
}
