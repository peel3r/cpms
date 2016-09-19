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
      <form  (submit)="onCreateDiary()">
        
        <div class="row shadow-3">
            <div class="col-xs">
                <div class="box">
                Overall Pain
            <md-slider 
            tick-interval="1" 
            step="1" max="10" 
            #slider1
            [(ngModel)]="newDiary.overAllPainLevel" name="first"
            ></md-slider>
            {{slider1.value}}
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                Overall Fatigue
            <md-slider 
            tick-interval="1" 
            step="1" max="10" 
            #slider2
            [(ngModel)]="newDiary.overAllFatigueLevel" name="first"
            ></md-slider>
            {{slider2.value}}
                </div>
            </div>
            
        </div>
                <div class=" note-card shadow-3">
        <h1 class='start-xs'>Pain</h1>
        <div class="row ">
        
            <div class="col-xs">
                <div class="box">
                <h3>Localization</h3>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <h3>Level</h3>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <h3>Type</h3>
                </div>
            </div>
        </div>
        <hr>

        <div class="row">
            <div class="col-xs">
                <div class="box">
                <p>Shoulder Girdle Left</p>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <md-slider 
            tick-interval="1" 
            step="1" max="10" 
            #slider2
            [(ngModel)]="newDiary.shoulderGirdleLeft" name="first"
            ></md-slider>
            {{slider2.value}}
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <br>
                <select 

            [(ngModel)]="newDiary.shoulderGirdleLeftDesc" name="first"
             >
              <option *ngFor="let p of powers" [value]="p">{{p}}</option>
            </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs">
                <div class="box">
                <p>Shoulder Gridle Right</p>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <md-slider 
            tick-interval="1" 
            step="1" max="10" 
            #slider4
            [(ngModel)]="newDiary.shoulderGridleRight" name="first"
            ></md-slider>
            {{slider4.value}}
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <br>
                <select 
            
            [(ngModel)]="newDiary.shoulderGridleRightDesc" name="first"
             >
              <option *ngFor="let p of powers" [value]="p">{{p}}</option>
            </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs">
                <div class="box">
                <p>Upper Arm Left</p>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <md-slider 
            tick-interval="1" 
            step="1" max="10" 
            #slider5
            [(ngModel)]="newDiary.upperArmLeft" name="first"
            ></md-slider>
            {{slider5.value}}
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <br>
                <select 
            
            [(ngModel)]="newDiary.upperArmLeftDesc" name="first"
             >
              <option *ngFor="let p of powers" [value]="p">{{p}}</option>
            </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs">
                <div class="box">
                <p>Upper Arm Right</p>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <md-slider 
            tick-interval="1" 
            step="1" max="10" 
            #slider6
            [(ngModel)]="newDiary.upperArmRight" name="first"
            ></md-slider>
            {{slider6.value}}
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <br>
                <select 
           
            [(ngModel)]="newDiary.upperArmRightDesc" name="first"
             >
              <option *ngFor="let p of powers" [value]="p">{{p}}</option>
            </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs">
                <div class="box">
                <p>Lower Arm Left</p>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <md-slider 
            tick-interval="1" 
            step="1" max="10" 
            #slider7
            [(ngModel)]="newDiary.lowerArmLeft" name="first"
            ></md-slider>
            {{slider7.value}}
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <br>
                <select 
           
            [(ngModel)]="newDiary.lowerArmLeftDesc" name="first"
             >
              <option *ngFor="let p of powers" [value]="p">{{p}}</option>
            </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs">
                <div class="box">
                <p>Lower Arm Right</p>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <md-slider 
            tick-interval="1" 
            step="1" max="10" 
            #slider8
            [(ngModel)]="newDiary.lowerArmRight" name="first"
            ></md-slider>
            {{slider8.value}}
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <br>
                <select 
           
            [(ngModel)]="newDiary.lowerArmRightDesc" name="first"
             >
              <option *ngFor="let p of powers" [value]="p">{{p}}</option>
            </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs">
                <div class="box">
                <p>Hip (Buttock) Left</p>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <md-slider 
            tick-interval="1" 
            step="1" max="10" 
            #slider9
            [(ngModel)]="newDiary.hipLeft" name="first"
            ></md-slider>
            {{slider9.value}}
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <br>
                <select 
            
            [(ngModel)]="newDiary.hipLeftDesc" name="first"
             >
              <option *ngFor="let p of powers" [value]="p">{{p}}</option>
            </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs">
                <div class="box">
                <p>Hip (Buttock) Right</p>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <md-slider 
            tick-interval="1" 
            step="1" max="10" 
            #slider10
            [(ngModel)]="newDiary.hipRight" name="first"
            ></md-slider>
            {{slider10.value}}
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <br>
                <select 
            
            [(ngModel)]="newDiary.hipRightDesc" name="first"
             >
              <option *ngFor="let p of powers" [value]="p">{{p}}</option>
            </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs">
                <div class="box">
                <p>Upper Leg Left</p>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <md-slider 
            tick-interval="1" 
            step="1" max="10" 
            #slider11
            [(ngModel)]="newDiary.upperLegLeft" name="first"
            ></md-slider>
            {{slider11.value}}
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <br>
                <select 
            
            [(ngModel)]="newDiary.upperLegLeftDesc" name="first"
             >
              <option *ngFor="let p of powers" [value]="p">{{p}}</option>
            </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs">
                <div class="box">
                <p>Upper Leg Right</p>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <md-slider 
            tick-interval="1" 
            step="1" max="10" 
            #slider12
            [(ngModel)]="newDiary.upperLegRight" name="first"
            ></md-slider>
            {{slider12.value}}
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <br>
                <select 
            
            [(ngModel)]="newDiary.upperLegRightDesc" name="first"
             >
              <option *ngFor="let p of powers" [value]="p">{{p}}</option>
            </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs">
                <div class="box">
                <p>Lower Leg Left</p>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <md-slider 
            tick-interval="1" 
            step="1" max="10" 
            #slider13
            [(ngModel)]="newDiary.lowerLegLeft" name="first"
            ></md-slider>
            {{slider13.value}}
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <br>
                <select 
            
            [(ngModel)]="newDiary.lowerLegLeftDesc" name="first"
             >
              <option *ngFor="let p of powers" [value]="p">{{p}}</option>
            </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs">
                <div class="box">
                <p>Lower Leg Right</p>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <md-slider 
            tick-interval="1" 
            step="1" max="10" 
            #slider14
            [(ngModel)]="newDiary.lowerLegRight" name="first"
            ></md-slider>
            {{slider14.value}}
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <br>
                <select 
            
            [(ngModel)]="newDiary.lowerLegRightDesc" name="first"
             >
              <option *ngFor="let p of powers" [value]="p">{{p}}</option>
            </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs">
                <div class="box">
                <p>Jaw Left</p>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <md-slider 
            tick-interval="1" 
            step="1" max="10" 
            #slider15
            [(ngModel)]="newDiary.jawLeft" name="first"
            ></md-slider>
            {{slider15.value}}
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <br>
                <select 
            
            [(ngModel)]="newDiary.jawLeftDesc" name="first"
             >
              <option *ngFor="let p of powers" [value]="p">{{p}}</option>
            </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs">
                <div class="box">
                <p>Jaw Right</p>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <md-slider 
            tick-interval="1" 
            step="1" max="10" 
            #slider16
            [(ngModel)]="newDiary.jawRight" name="first"
            ></md-slider>
            {{slider16.value}}
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <br>
                <select 
           
            [(ngModel)]="newDiary.jawRightDesc" name="first"
             >
              <option *ngFor="let p of powers" [value]="p">{{p}}</option>
            </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs">
                <div class="box">
                <p>Chest</p>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <md-slider 
            tick-interval="1" 
            step="1" max="10" 
            #slider17
            [(ngModel)]="newDiary.chest" name="first"
            ></md-slider>
            {{slider17.value}}
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <br>
                <select 
           
            [(ngModel)]="newDiary.chestDesc" name="first"
             >
              <option *ngFor="let p of powers" [value]="p">{{p}}</option>
            </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs">
                <div class="box">
                <p>Upper Back</p>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <md-slider 
            tick-interval="1" 
            step="1" max="10" 
            #slider18
            [(ngModel)]="newDiary.upperBack" name="first"
            ></md-slider>
            {{slider18.value}}
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <br>
                <select 
            
            [(ngModel)]="newDiary.upperBackDesc" name="first"
             >
              <option *ngFor="let p of powers" [value]="p">{{p}}</option>
            </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs">
                <div class="box">
                <p>Lower Back</p>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <md-slider 
            tick-interval="1" 
            step="1" max="10" 
            #slider19
            [(ngModel)]="newDiary.lowerBack" name="first"
            ></md-slider>
            {{slider19.value}}
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <br>
                <select 
           
            [(ngModel)]="newDiary.lowerBackDesc" name="first"
             >
              <option *ngFor="let p of powers" [value]="p">{{p}}</option>
            </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs">
                <div class="box">
                <p>Neck</p>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <md-slider 
            tick-interval="1" 
            step="1" max="10" 
            #slider20
            [(ngModel)]="newDiary.neck" name="first"
            ></md-slider>
            {{slider20.value}}
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <br>
                <select 
            
            [(ngModel)]="newDiary.neckDesc" name="first"
             >
              <option *ngFor="let p of powers" [value]="p">{{p}}</option>
            </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs">
                <div class="box">
                <p>Abdomen</p>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <md-slider 
            tick-interval="1" 
            step="1" max="10" 
            #slider21
            [(ngModel)]="newDiary.abdomen" name="first"
            ></md-slider>
            {{slider21.value}}
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                <br>
                <select
                
                [(ngModel)]="newDiary.abdomenDesc" name="first" 
                 >
                  <option  *ngFor="let p of powers"  [value]="p">{{p}}</option>
                </select>
                </div>
            </div>
        </div>
        <hr>
</div>
        
        
        







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

  powers = ['Aching','Sharp','Penetrating','Throbbing','Tender','Nagging','Shooting','Burning','Numb','Stabbing','Pinching','Gnaving'];

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
    overAllMoodLevel: '',
    shoulderGridleLeftDesc: '',
    shoulderGridleLeft: '',
    shoulderGridleRightDesc: '',
    shoulderGridleRight: '',
    upperArmRight: '',
    upperArmRightDesc: '',
    upperArmLeft: '',
    upperArmLeftDesc: '',
    lowerArmRight: '',
    lowerArmRightDesc: '',
    lowerArmLeft: '',
    lowerArmLeftDesc: '',
    hipRight: '',
    hipLeft: '',
    hipLeftDesc: '',
    hipRightDesc: '',
    upperLegRight: '',
    upperLegRightDesc: '',
    upperLegLeft: '',
    upperLegLeftDesc: '',
    lowerLegRight: '',
    lowerLegRightDesc: '',
    lowerLegLeft: '',
    lowerLegLeftDesc: '',
    jawRight: '',
    jawLeft: '',
    jawLeftDesc: '',
    jawRightDesc: '',
    chest: '',
    chestDesc: '',
    neck:'',
    neckDesc:'',
    abdomen:'',
    abdomenDesc:'',
    upperBack:'',
    upperBackDesc:'',
    lowerBack:'',
    lowerBackDesc:'',




  };

  onCreateDiary() {
    const {
      title,
      text,
      overAllPainLevel,
      shoulderGridleLeftDesc,
      overAllMoodLevel,
      shoulderGridleLeft,
      shoulderGridleRightDesc,
      shoulderGridleRight,
      upperArmRight,
      upperArmRightDesc,
      upperArmLeft,
      upperArmLeftDesc,
      lowerArmRight,
      lowerArmRightDesc,
      lowerArmLeft,
      lowerArmLeftDesc,
      hipRight,
      hipLeft,
      hipLeftDesc,
      hipRightDesc,
      upperLegRight,
      upperLegRightDesc,
      upperLegLeft,
      upperLegLeftDesc,
      lowerLegRight,
      lowerLegRightDesc,
      lowerLegLeft,
      lowerLegLeftDesc,
      jawRight,
      jawLeft,
      jawLeftDesc,
      jawRightDesc,
      chest,
      chestDesc,
      neck,
      neckDesc,
      abdomen,
      abdomenDesc,
      upperBack,
      upperBackDesc,
      lowerBack,
      lowerBackDesc
    } = this.newDiary;
console.log('new diary', this.newDiary)
    if (title && text) {
      this.createDiary.next({
        title,
        text,
        overAllPainLevel,
        shoulderGridleLeftDesc,
        overAllMoodLevel,
        shoulderGridleLeft,
        shoulderGridleRightDesc,
        shoulderGridleRight,
        upperArmRight,
        upperArmRightDesc,
        upperArmLeft,
        upperArmLeftDesc,
        lowerArmRight,
        lowerArmRightDesc,
        lowerArmLeft,
        lowerArmLeftDesc,
        hipRight,
        hipLeft,
        hipLeftDesc,
        hipRightDesc,
        upperLegRight,
        upperLegRightDesc,
        upperLegLeft,
        upperLegLeftDesc,
        lowerLegRight,
        lowerLegRightDesc,
        lowerLegLeft,
        lowerLegLeftDesc,
        jawRight,
        jawLeft,
        jawLeftDesc,
        jawRightDesc,
        chest,
        chestDesc,
        neck,
        neckDesc,
        abdomen,
        abdomenDesc,
        upperBack,
        upperBackDesc,
        lowerBack,
        lowerBackDesc
      });
      this.reset();
    }


  }
  reset() {
    this.newDiary = {
      title: '',
      text: '',
      overAllPainLevel: '0',
      overAllMoodLevel: '0',
      shoulderGridleLeftDesc: '',
      shoulderGridleLeft: '0',
      shoulderGridleRightDesc: '',
      shoulderGridleRight: '0',
      upperArmRight: '0',
      upperArmRightDesc: '',
      upperArmLeft: '0',
      upperArmLeftDesc: '',
      lowerArmRight: '0',
      lowerArmRightDesc: '',
      lowerArmLeft: '0',
      lowerArmLeftDesc: '',
      hipRight: '0',
      hipLeft: '0',
      hipLeftDesc: '',
      hipRightDesc: '',
      upperLegRight: '0',
      upperLegRightDesc: '',
      upperLegLeft: '0',
      upperLegLeftDesc: '',
      lowerLegRight: '0',
      lowerLegRightDesc: '',
      lowerLegLeft: '0',
      lowerLegLeftDesc: '',
      jawRight: '0',
      jawLeft: '0',
      jawLeftDesc: '',
      jawRightDesc: '',
      chest: '0',
      chestDesc: '',
      neck:'0',
      neckDesc:'',
      abdomen:'0',
      abdomenDesc:'',
      upperBack:'0',
      upperBackDesc:'',
      lowerBack:'0',
      lowerBackDesc:''
    };
  }
}
