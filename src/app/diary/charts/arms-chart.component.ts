import { Component } from '@angular/core';
import {DiaryService} from '../../services'

@Component({
  selector: 'arms-chart',
  templateUrl: './bar-chart.template.html'
})
export class PaiPolarChartComponent {
  diaries               = []
  shoulderGirdleLeft    = []
  shoulderGirdleRight   = []
  upperArmRight         = []
  upperArmLeft          = []
  lowerArmRight         = []
  lowerArmLeft          = []
  hipRight              = []
  hipLeft               = []
  upperLegRight         = []
  upperLegLeft          = []
  lowerLegRight         = []
  lowerLegLeft          = []
  jawRight              = []
  jawLeft               = []
  chest                 = []
  neck                  = []
  abdomen               = []
  upperBack             = []
  lowerBack             = []
  dateCount=[]
  user_id = window.localStorage.getItem('cpms_user_id')


  constructor( private diaryService: DiaryService) {

  }

  ngOnInit() {
    this.diaryService.getUserDiaries(this.user_id)
      .map((tasks: Array<any>) => {

        if (tasks) {


          tasks.forEach((task) => {
            // this.dateCount.push(task.date.substring(5,10));

            this.upperArmRight.push(task.upperArmRight);
            this.upperArmLeft.push(task.upperArmLeft);
            this.lowerArmRight.push(task.lowerArmRight);
            this.lowerArmLeft.push(task.lowerArmLeft);
            this.dateCount.push(task.date.substring(5,10));
          });
        }
        return this.upperArmRight;
      })

      .subscribe(res => this.diaries = res)
    setTimeout(() => {
      this.randomize()
    }, 2000);
  }

  // public polarAreaChartLabels:string[] = [
  //   // 'shoulderGirdleLeft', //
  //   // 'shoulderGirdleRight', //
  //   // 'upperArmRight', //
  //   // 'upperArmLeft', //
  //   // 'lowerArmRight', //
  //   // 'lowerArmLeft', //
  //   // 'upperLegRight', //
  //   // 'upperLegLeft', //
  //   // 'lowerLegRight', //
  //   // 'lowerLegLeft',//
  //   // 'jawRight', //
  //   // 'jawLeft', //
  //   // 'hipRight', //
  //   // 'hipLeft', //
  //   // 'chest',
  //   // 'neck',
  //   // 'abdomen',
  //   // 'upperBack', //
  //   // 'lowerBack' //
  //
  // ];

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true

  };
  public barChartLabels:string[] = this.dateCount;
  public barChartType:string = 'line';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: this.upperArmRight, label: 'Upper Right Arm'},
    {data: this.upperArmLeft, label: 'Upper Left Arm'},
    {data: this.lowerArmRight, label: 'Lower Left Arm'},
    {data: this.lowerArmLeft, label: 'Lower Left Arm'},
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize() {
    // Only Change 3 values
    let data = this.upperArmRight;
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;

  }
}

