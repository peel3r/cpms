import { Component } from '@angular/core';
import {DiaryService} from '../../services'

@Component({
  selector: 'bar-chart-demo',
  templateUrl: './chart.template.html'
})
export class BarChartDemoComponent {

  diaries = []
  painLevelCount: Array<any> = []
  moodLevelCount = []
  dateCount = []

  constructor(private diaryService: DiaryService) {
    setTimeout(() => {
      this.randomize()
    }, 1000);
  }

  ngOnInit() {
    this.diaryService.getDiaries()
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
  }


  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true

  };
  public barChartLabels: string[] = this.dateCount;
  public barChartType: string = 'line';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {data: this.painLevelCount, label: 'Pain Level'},
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
