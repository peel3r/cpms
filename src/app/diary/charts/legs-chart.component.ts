import { Component } from '@angular/core';
import {DiaryService} from '../../services'

@Component({
  selector: 'legs-chart',
  templateUrl: './legs-chart.component.html'
})
export class LegsChartComponent {
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
  dateCount             = []


  constructor( private diaryService: DiaryService) {
    setTimeout(() => {
      this.randomize()
    }, 1000);
  }

  ngOnInit() {
    this.diaryService.getDiaries()
      .map((tasks: Array<any>) => {

        if (tasks) {


          tasks.forEach((task) => {
            // this.dateCount.push(task.date.substring(5,10));

            this.upperLegRight.push(task.upperLegRight);
            this.upperLegLeft.push(task.upperLegLeft);
            this.lowerLegRight.push(task.lowerLegRight);
            this.lowerLegLeft.push(task.lowerLegLeft);
            this.dateCount.push(task.date.substring(5,10));
          });
        }
        return this.upperArmRight;
      })

      .subscribe(res => this.diaries = res)
  }

  // public polarAreaChartLabels:string[] = [
  //   // 'shoulderGirdleLeft',
  //   // 'shoulderGirdleRight',
  //   'upperArmRight',
  //   'upperArmLeft',
  //   'lowerArmRight',
  //   'lowerArmLeft',
  //   // 'hipRight',
  //   // 'hipLeft',
  //   // 'upperLegRight',
  //   // 'upperLegLeft',
  //   // 'lowerLegRight',
  //   // 'lowerLegLeft',
  //   // 'jawRight',
  //   // 'jawLeft',
  //   // 'chest',
  //   // 'neck',
  //   // 'abdomen',
  //   // 'upperBack',
  //   // 'lowerBack'
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
    {data: this.upperLegRight, label: 'Upper Right Leg'},
    {data: this.upperLegLeft, label: 'Upper Left Leg'},
    {data: this.lowerLegRight, label: 'Lower Left Leg'},
    {data: this.lowerLegLeft, label: 'Lower Left Leg'},
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
    let data = this.upperLegRight;
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
}

