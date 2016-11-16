import {Component} from '@angular/core';
import {UserService} from '../services'
import {Observable} from 'rxjs/Rx';
import {ArticleService} from "../services/articles";
import {Store} from "../store";




@Component({
  selector: 'article-list',
  styleUrls: ['./article.style.css'],
  templateUrl: './article-list.template.html'

})

export class ArticleList {
  articles = [];
  date = Date.now()
  onLeave: boolean  = true
  user_id = window.localStorage.getItem('cpms_user_id')
  user_name = window.localStorage.getItem('cpms_user_name')

  admin_id = 'pawel@fibrotrust.org'
  newArticle = {
    title: '',
    text: ''
  };

  constructor( private articleService: ArticleService, private store: Store) {

    this.store.changes.pluck('articles')
      .subscribe((articles: any) => this.articles = articles);

    this.articleService.getArticles()
      .subscribe();
  }


  onCreateArticle(article) {
    this.articleService.createArticle(article)
      .subscribe();
  }



  deleteArticle(article,i) {
    let index: number = this.findEventIndexById(article._id);
    this.articles.splice(index, 1);

    this.articleService.deleteArticle(article)
      .subscribe()

  }

  findEventIndexById(id: number) {
    let index = -1;
    for(let i = 0; i < this.articles.length; i++) {
      if(id == this.articles[i]._id) {
        index = i;
        break;
      }
    }

    return index;
  }

  toggle() {
    this.onLeave = !this.onLeave;
  }

  ngOnInit(){
    setTimeout(() => {
      this.toggle()
    },1000)
  }

}
