import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'diary-creator',
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
      <form class="row" (submit)="onCreateDiary()">
        <input
          type="text"
          [(ngModel)]="newDiary.title"
          name="newDiaryTitle"
          placeholder="Title"
          class="col-xs-10 title"
        >
        <input
          type="text"
          [(ngModel)]="newDiary.text"
          name="newDiaryValue"
          placeholder="Write new Diary"
          class="col-xs-10"
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

export class DiaryCreator {
  @Output() createDiary = new EventEmitter();
  newDiary = {
    title: '',
    text: ''
  };

  onCreateDiary() {
    const {title, text} = this.newDiary;

    if (title && text) {
      this.createDiary.next({title, text});
      this.reset();
    }
  }
  reset() {
    this.newDiary = {
      title: '',
      text: ''
    };
  }
}
