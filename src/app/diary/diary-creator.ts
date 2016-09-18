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
       
       <!--<select class="form-control"-->
                <!--required >-->
          <!--<option *ngFor="let p of powers" [value]="p">{{p}}</option>-->
        <!--</select>-->
<md-slider 
tick-interval="1" 
step="1" max="10" 
#slider5
[(ngModel)]="newDiary.overAllPainLevel" name="first"

>

</md-slider>
{{slider5.value}}
    <!--<md-spinner></md-spinner>-->
<!--<md-checkbox [(ngModel)]="isChecked"-->
              <!--name="cb"-->
             <!--(change)="isIndeterminate = false"-->
             <!--[indeterminate]="isIndeterminate"-->
             <!--[disabled]="isDisabled"-->
             <!--[align]="alignment">-->

<!--</md-checkbox><strong>{{printResult()}}</strong>-->
    <!--<md-input></md-input>-->
    <!--<md-slide-toggle></md-slide-toggle>-->
<!--<md-radio-group>-->
  <!--<md-radio-button value="option_1">1</md-radio-button>-->
  <!--<md-radio-button value="option_2">2</md-radio-button>-->
<!--</md-radio-group>-->

        <input
          type="text"
          [(ngModel)]="newDiary.title"
          name="newDiaryTitle"
          placeholder="Title"
          class="col-xs-10 title"
        >
                <input
          type="text"
          [(ngModel)]="newDiary.categories"
          name="newDiaryCategory"
          placeholder="Category"
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

  // powers = ['Really Smart', 'Super Flexible',
  //   'Super Hot', 'Weather Changer'];

  // check box-start

  // isChecked: boolean = false;

  // printResult() {
  //   return this.isChecked ? 'Yes' : '';
  // }

  // checkbox-end

  @Output() createDiary = new EventEmitter();
  newDiary = {
    title: '',
    text: '',
    overAllPainLevel: '',
    categories: ''
  };

  onCreateDiary() {
    const {title, text, overAllPainLevel, categories} = this.newDiary;

    if (title && text) {
      this.createDiary.next({title, text, overAllPainLevel, categories});
      this.reset();
    }


  }
  reset() {
    this.newDiary = {
      title: '',
      text: '',
      overAllPainLevel: '',
      categories: ''
    };
  }
}
