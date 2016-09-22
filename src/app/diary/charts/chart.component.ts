
import { Component } from '@angular/core';
import {DiaryService} from '../../services'
// webpack html imports

@Component({
  selector: 'bar-chart-demo',
  templateUrl: './chart.template.html'
})
export class BarChartDemoComponent {

 diaries = []
  painLevelCount:Array<any>=[]
  moodLevelCount= []
  dateCount=[]
  constructor( private diaryService: DiaryService) {
    setTimeout(() => {
      this.randomize()
    }, 1500);
  }

  ngOnInit() {
    this.diaryService.getDiaries()
      .map((tasks: Array<any>) => {

        if (tasks) {
          tasks.forEach((task) => {
            this.painLevelCount.push(task.overAllPainLevel);
            this.moodLevelCount.push(task.overAllMoodLevel);
            this.dateCount.push(task.date.substring(5,10));
          });
        }
        return this.painLevelCount;
      })

      .subscribe(res => this.diaries = res)
  }


  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true

  };
  public barChartLabels:string[] = this.dateCount;
  public barChartType:string = 'line';
  public barChartLegend:boolean = false;

  public barChartData:any[] = [
    {data: this.painLevelCount, label: 'Pain Level'},
    {data: this.moodLevelCount, label: 'Mood'}
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
    let data = this.painLevelCount;
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;


    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }



}// import { Component } from '@angular/core';
// import {DiaryService} from '../services'
//
//
//
// @Component({
//   selector: 'bar-chart-demo',
//   templateUrl: './chart.template.html'
// })
// export class BarChartDemoComponent {
// diaries = []
//   painLevelCount:Array<any>=[]
//   constructor( private diaryService: DiaryService) {
//
//   }
//
//   ngOnInit() {
//     this.diaryService.getDiaries()
//       .map((tasks: Array<any>) => {
//
//         if (tasks) {
//           tasks.forEach((task) => {
//             this.painLevelCount.push(task.overAllPainLevel);
//           });
//         }
//         return this.painLevelCount;
//       })
//
//       .subscribe(res => this.diaries = res)
//   }
//
//   over(){
//     this.lineChartType = 'line' ;
//   }
//
//   public lineChartData:Array<any> = [
//     this.painLevelCount,
//     [28, 48, 40, 19, 86, 27],
//     [28, 48, 40, 19, 86, 27]
//   ];
//   public lineChartLabels:Array<any> = this.painLevelCount;
//   public lineChartType:string = 'line';
//   public pieChartType:string = 'pie';
//
//   // Pie
//   public pieChartLabels:string[] = ['ew', 'ew', 'eq','as','sas'];
//   public pieChartData:number[] = this.painLevelCount;
//
//   public randomizeType():void {
//     this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
//     this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
//   }
//
//   public chartClicked(e:any):void {
//     console.log(e);
//   }
//
//   public chartHovered(e:any):void {
//     console.log(e);
//   }
// }
