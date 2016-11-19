import {Component, OnInit,Input} from '@angular/core';
import {ArticleService} from '../services/articles'
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'show-article',
  styleUrls: ['../article/article.style.css'],
  templateUrl: 'showArticle.template.html'
})

export class ShowArticle {
  @Input() article = {}
  id: string

  articles = []
  user_id = window.localStorage.getItem('cpms_user_id')





  constructor( private articleService: ArticleService, private route: ActivatedRoute, private router: Router) {

    route.params.subscribe(params => { this.id = params['id']; });
  this.articleService.getArticles()
    .subscribe(
      res => {this.articles = res})

    this.articleService.getArticle(this.id)
      .subscribe(res => this.article = res);
  }

  toUserProfile(): void {
    this.router.navigate(['','users', this.user_id]);
  }
  onArticle(article): void {
    console.log(article)
    this.router.navigate(['/articles', article._id]);

  }
  onBack(): void {
    this.router.navigate(['/articles']);
  }
}
