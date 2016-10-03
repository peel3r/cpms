import { Component } from '@angular/core';
import {DiaryService} from '../../services'

@Component({
  selector: 'legs-chart',
  templateUrl: './bar-chart.template.html'
})
export class LegsChartComponent {
  diaries               = []

  upperLegRight         = []
  upperLegLeft          = []
  lowerLegRight         = []
  lowerLegLeft          = []

  dateCount             = []

  user_id               = window.localStorage.getItem('cpms_user_id')

  constructor( private diaryService: DiaryService) {
  }

  ngOnInit() {
    this.diaryService.getUserDiaries(this.user_id)
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
        return this.upperLegRight;
      })

      .subscribe(res => this.diaries = res)
    setTimeout(() => {
      this.randomize()
    }, 2500);
  }


  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true

  };
  public barChartLabels:string[] = this.dateCount;
  public barChartType:string = 'line';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: this.upperLegRight, label: 'Upper Right'},
    {data: this.upperLegLeft, label: 'Upper Left'},
    {data: this.lowerLegRight, label: 'Lower Left'},
    {data: this.lowerLegLeft, label: 'Lower Left'},
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

