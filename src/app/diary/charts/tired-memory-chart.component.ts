import { Component } from '@angular/core';
import {DiaryService} from '../../services'

@Component({
  selector: 'memory-fatigue-chart',
  templateUrl: './bar-chart.template.html'
})

export class MemoryFatigueChartComponent {
  dateCount             = []
  diaries               = []

  fatigue               = []
  refreshed             = []
  cognitiveSymptoms     = []

  user_id               = window.localStorage.getItem('cpms_user_id')

  constructor( private diaryService: DiaryService) {
    setTimeout(() => {
       this.randomize()
    }, 2000);
  }

  ngOnInit() {
    this.diaryService.getUserDiaries(this.user_id)
      .map((tasks: Array<any>) => {

        if (tasks) {

          tasks.forEach((task) => {
            // this.dateCount.push(task.date.substring(5,10));

            this.cognitiveSymptoms.push(task.cognitiveSymptoms);
            this.fatigue.push(task.fatigue);
            this.refreshed.push(task.refreshed);
            this.dateCount.push(task.date.substring(5,10));
          });
        }
        console.log(this.fatigue)

        return [this.fatigue,this.refreshed, this.cognitiveSymptoms];
      })

      .subscribe(res => this.diaries = res)
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels:string[] = this.dateCount;
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [this.fatigue], label: 'Fatigue'},
    {data: this.cognitiveSymptoms, label: 'Memory'},
    {data: this.refreshed, label: 'Morning Tiredness'}

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
    let data = this.fatigue;
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
}
