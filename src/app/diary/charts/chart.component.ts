import { Component } from '@angular/core';
import {DiaryService} from '../../services'

@Component({
  selector: 'bar-chart-demo',
  templateUrl: './bar-chart.template.html'
})
export class BarChartDemoComponent {

  diaries = []
  painLevelCount: Array<any> = []
  moodLevelCount = []
  dateCount = []
  user_id = window.localStorage.getItem('cpms_user_id')


  constructor(private diaryService: DiaryService) {
  }

  ngOnInit() {
    this.diaryService.getUserDiaries(this.user_id)
      .map((tasks: Array<any>) => {

        if (tasks) {
          tasks.forEach((task) => {
            this.painLevelCount.push(task.overAllPainLevel);
            this.moodLevelCount.push(task.overAllMoodLevel);
            this.dateCount.push(task.date.substring(5, 10));
          });
        }
        return this.painLevelCount;
      })

      .subscribe(res => this.diaries = res)

    setTimeout(() => {
      this.randomize()
    }, 2500);
  }


  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true

  };
  public barChartLabels: string[] = this.dateCount;
  public barChartType: string = 'line';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {data: this.painLevelCount, label: 'Pain'},
    {data: this.moodLevelCount, label: 'Mood'}
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize() {
    // Only Change 3 values
    let data = this.painLevelCount;
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;

  }
}
