import {Component, Input} from '@angular/core';

@Component({
  selector: 'article-card',
  template: `
<md-card>
   <md-card-header>
      <img md-card-avatar src="http://i.imgur.com/yYG5lqx.png">
      <md-card-title>{{article.title}}</md-card-title>
      <md-card-subtitle>Header subtitle</md-card-subtitle>

   </md-card-header>
   <!--<img md-card-image src="http://i.imgur.com/OGZu3VX.png">-->
   <md-card-content>
      <p>{{article.text}}</p>
         <!--<md-card-actions>-->
        <!--<button md-button>LIKE</button>-->
        <!--<button md-button>SHARE</button>-->
   <!--</md-card-actions>-->
   </md-card-content>
</md-card>
 <hr>
`
})

export class ArticleCard {
  @Input() article = {}
}
