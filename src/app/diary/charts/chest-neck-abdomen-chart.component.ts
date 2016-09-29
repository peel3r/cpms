import { Component } from '@angular/core';
import {DiaryService} from '../../services'

@Component({
  selector: 'chestNeckAbdomen-chart',
  templateUrl: './bar-chart.template.html'
})
export class ChestNeckAbdomenChartComponent {
  diaries               = []

  chest                 = []
  neck                  = []
  abdomen               = []

  dateCount=[]
  user_id = window.localStorage.getItem('cpms_user_id')


  constructor( private diaryService: DiaryService) {
    setTimeout(() => {
      this.randomize()
    }, 1000);
  }

  ngOnInit() {
    this.diaryService.getUserDiaries(this.user_id)
      .map((tasks: Array<any>) => {

        if (tasks) {


          tasks.forEach((task) => {
            // this.dateCount.push(task.date.substring(5,10));

            this.neck.push(task.neck);
            this.chest.push(task.chest);
            this.abdomen.push(task.abdomen);
            this.dateCount.push(task.date.substring(5,10));
          });
        }
        return this.neck;
      })

      .subscribe(res => this.diaries = res)
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
    { data: this.neck, label: 'Neck' },
    { data: this.chest, label: 'Chest' },
    { data: this.abdomen, label: 'Abdomen'},
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
    let data = this.neck;
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;

  }
}

