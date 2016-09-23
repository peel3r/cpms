import { Component } from '@angular/core';
import {DiaryService} from '../../services'

@Component({
  selector: 'shoulders-chart',
  templateUrl: './shoulders-chart.component.html'
})
export class ShouldersChartComponent {
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

            this.shoulderGirdleLeft.push(task.shoulderGirdleLeft);
            this.shoulderGirdleRight.push(task.shoulderGirdleRight);
            this.jawRight.push(task.jawRight);
            this.jawLeft.push(task.jawLeft);
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
    {data: this.shoulderGirdleRight, label: 'Shoulder Right'},
    {data: this.shoulderGirdleLeft, label: 'Shoulder Left'},
    {data: this.jawRight, label: 'Jaw right'},
    {data: this.jawLeft, label: 'Jaw Right'},
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
    let data = this.shoulderGirdleRight;
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
}

