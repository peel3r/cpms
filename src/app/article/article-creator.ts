import {  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output} from '@angular/core';

@Component({
  selector: 'article-creator',
  styles: [` 
  .note-creator {
      padding: 20px;
      background-color: white;
      border-radius: 3px;
    }
    .title {
      font-weight: bold;
      color: rgba(0,0,0,0.8);
    }
    .full {
      height: 100px;
    }
  `],
  template: `
  <div class="note-creator shadow-2">
      <form class="row" (submit)="onCreateArticle()">
        <input
          type="text"
          [(ngModel)]="newArticle.title"
          name="newArticleTitle"
          placeholder="Title"
          class="col-xs-10 title"
        >
        <input
          type="text"
          [(ngModel)]="newArticle.text"
          name="newArticleValue"
          placeholder="Write new article"
          class="col-xs-10 tinyMCE"
        >
        <div class="actions col-xs-12 row between-xs">
          <button
            type="submit"
            class="btn-light"
           >
            Done
          </button>
        </div>
      </form>
    </div>
`

})

export class ArticleCreator implements AfterViewInit, OnDestroy {
  @Output() createArticle = new EventEmitter();
  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();
  editor;

  ngAfterViewInit() {
    console.log('id', this.elementId)

    tinymce.init({
      selector: ".tinyMCE",
      plugins: ['link', 'paste', 'table', 'image'],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          this.newArticle.text = editor.getContent();
          this.onEditorKeyup.emit(this.newArticle.text);

        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

  newArticle = {
    title: '',
    text: ''
  };

  onCreateArticle() {
    console.log(this.newArticle)
    const {title, text} = this.newArticle;

    if (title && text) {
      this.createArticle.next({title, text});
      this.reset();
    }
  }
  reset() {
    this.newArticle = {
      title: '',
      text: ''
    };
  }
}
