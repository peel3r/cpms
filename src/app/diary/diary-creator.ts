import {Component, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {DiaryService} from "../services/painDiaries";
import {ToastsManager} from 'ng2-toastr/ng2-toastr';


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
  templateUrl: './diary-creator.template.html'

})

export class DiaryCreator {

  diaries = []


  constructor(private route: ActivatedRoute,
              private router: Router,
              private diaryService: DiaryService,
              public toastr: ToastsManager
  ) {}




  powers = ['Aching','Sharp','Penetrating','Throbbing','Tender','Nagging','Shooting','Burning','Numb','Stabbing','Pinching','Gnaving'];



  @Output() createDiary = new EventEmitter();
  newDiary = {
    title: '',
    text: '',
    overAllPainLevel: '',
    overAllMoodLevel: '',
    shoulderGirdleLeftDesc: '',
    shoulderGirdleLeft: '',
    shoulderGirdleRightDesc: '',
    shoulderGirdleRight: '',
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
    fatigue: 0,
    fatigueSeverity: '',
    cognitiveSymptoms: 0,
    cognitiveSeverity: '',
    refreshed: 0
  };

  onCreateDiary() {
    const {
      title,
      text,
      overAllPainLevel,
      shoulderGirdleLeftDesc,
      overAllMoodLevel,
      shoulderGirdleLeft,
      shoulderGirdleRightDesc,
      shoulderGirdleRight,
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
      lowerBackDesc,
      fatigue,
      fatigueSeverity,
      cognitiveSymptoms,
      cognitiveSeverity,
      refreshed
    } = this.newDiary;

    if (title) {

      this.createDiary.next({
        title,
        text,
        overAllPainLevel,
        shoulderGirdleLeftDesc,
        overAllMoodLevel,
        shoulderGirdleLeft,
        shoulderGirdleRightDesc,
        shoulderGirdleRight,
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
        lowerBackDesc,
        fatigue,
        fatigueSeverity,
        cognitiveSymptoms,
        cognitiveSeverity,
        refreshed,
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
      shoulderGirdleLeftDesc: '',
      shoulderGirdleLeft: '0',
      shoulderGirdleRightDesc: '',
      shoulderGirdleRight: '0',
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
      lowerBackDesc:'',
      fatigue: 0,
      fatigueSeverity: '0',
      cognitiveSymptoms: 0,
      cognitiveSeverity: '0',
      refreshed: 0
    };
  }
}
