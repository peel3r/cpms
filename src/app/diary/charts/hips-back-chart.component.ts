import { Component } from '@angular/core';
import {DiaryService} from '../../services'

@Component({
  selector: 'hip-back-chart',
  templateUrl: './bar-chart.template.html'
})
export class HipsAndBackChartComponent {
  diaries               = []
  // chart fields
  hipRight              = []
  hipLeft               = []
  upperBack             = []
  lowerBack             = []

  user_id               = window.localStorage.getItem('cpms_user_id')
  // date label for chart
  dateCount             = []


  constructor( private diaryService: DiaryService) {
  }

  ngOnInit() {
    this.diaryService.getUserDiaries(this.user_id)
      .map((tasks: Array<any>) => {

        if (tasks) {


          tasks.forEach((task) => {
            // this.dateCount.push(task.date.substring(5,10));

            this.hipRight.push(task.hipRight);
            this.hipLeft.push(task.hipLeft);
            this.upperBack.push(task.upperBack);
            this.lowerBack.push(task.lowerBack);
            this.dateCount.push(task.date.substring(5,10));
          });
        }
        return this.hipLeft;
      })

      .subscribe(res => this.diaries = res)

    setTimeout(() => {
      this.randomize()
    }, 1500);
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
  //   // 'hipRight',
  //   // 'hipLeft',
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
    {data: this.hipRight, label: 'Hip Right'},
    {data: this.hipLeft, label: 'Hip Left'},
    {data: this.lowerBack, label: 'Lower Back'},
    {data: this.upperBack, label: 'Upper Back'},
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
    let data = this.hipRight;
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;

  }
}

