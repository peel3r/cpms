import {
  Component,
  OnDestroy,
OnInit,
  trigger,
  style,
  animate,
  state,
  transition, Input, ViewChild } from '@angular/core';
import { ActivityService } from '../../services'
import { Router } from "@angular/router";
import { XLarge } from './x-large';
import {Store, ActivityList} from "../store";
import 'rxjs/Rx'
import {ChangeDetectorRef} from "@angular/core";
import * as moment from 'moment'
import {GoalService} from "../../services/goal.service";
import {SummaryChartComponent} from "../../goal/summary/charts/chart.component";
@Component({
  selector: 'schedule',

  templateUrl: './schedule.template.html',
})




export class Schedule implements OnInit {

  @Input() activities = []
  events: any[];
  @Input() goals =[]
  header: any;

  event: MyEvent;
  help: boolean = true

  dialogVisible: boolean = false;

  idGen: number = 100;

  USER_ID = window.localStorage.getItem('cpms_user_id')
  date: any;

  date6:  Date;
  date7:  Date;

  colors: Array<string> = [
    '#06CA85',
    '#0ACAC9',
    '#0DA7CA',
    '#097CCA',
    '#BB04CA',
    '#CA0AA4',
    'white'
  ];
  duration = [5,10,15,20,30,45,60,90,120]
  rating = [1,2,3,4,5,6,7,8,9,10]

  constructor(private activityService: ActivityService, private cd: ChangeDetectorRef, private goalService: GoalService) {
    // this.goalService.getUserGoals(this.USER_ID)
    //   .subscribe(res => {
    //     this.goals = res
    //   })
  }
  relatedGoals = this.goals;
  ngOnInit() {
    this.activityService.getUserActivities(this.USER_ID)
      .subscribe(events => {this.events = events;
      })
    this.date = moment().toISOString();

    this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };
  }

  onColorSelect(color: string) {
    this.event.color = color;
  }

  handleDayClick(event) {
    this.event = new MyEvent();
    this.event.start = event.date;
    this.event.end = event.date;
    this.dialogVisible = true;

    //trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
    this.cd.detectChanges();
  }

  handleEventClick(e) {
    this.event = new MyEvent();
    this.event.title = e.calEvent.title;
    let start = e.calEvent.start;
    let end = e.calEvent.end;

    this.goalService.getUserGoals(this.USER_ID)
      .subscribe(res => {
        this.goals = res
      })

    if(start) {
      this.event.start = start.format('llll');
    }
    if(end) {
      this.event.end = end.format('llll');
    }


      this.event.duration = e.calEvent.duration


    this.event._id = e.calEvent._id;
    this.event.fatigue = e.calEvent.fatigue;
    this.event.pain = e.calEvent.pain;
    this.event.fog = e.calEvent.fog;
    this.event.rating = e.calEvent.rating;
    this.event.comments = e.calEvent.comments;
    this.event.relatedGoal = e.calEvent.relatedGoal;
    this.event.color = e.calEvent.color;



    this.event.allDay = e.calEvent.allDay;
    this.dialogVisible = true;
  }
  toggleHelp() {
    this.help = !this.help
  }
  saveEvent() {
    //update
    if(this.event._id) {
      let index: number = this.findEventIndexById(this.event._id);


      if(index >= 0) {
        if (this.date6) {
          this.event.start = this.date6.toISOString();
      }
      if (this.date7) {
        this.event.end = this.date7.toISOString();
      }
        this.activityService.completeActivity(this.event)
          .subscribe();
        this.events[index] = this.event;
      }

    }
    //new
    else {
      if (this.date6) {
        this.event.start = this.date6.toISOString();

      } else {
        this.event.start = this.date;
      }
      if (!this.event.date7) {
        this.event.end = this.date
      } else {
        this.event.end = this.date7.toISOString();
      }
      this.activityService.createActivity(this.event)
        .subscribe()
      this.event._id = this.idGen;
      this.events.push(this.event);
      this.event = null;
    }
    this.dialogVisible = false;

  }

  deleteEvent(e) {

    let index: number = this.findEventIndexById(this.event._id);

    this.activityService.deleteActivity(this.event)
      .subscribe();
    if(index >= 0) {
      this.events.splice(index, 1);
    }
    this.dialogVisible = false;
  }

  findEventIndexById(id: number) {
    let index = -1;
    for(let i = 0; i < this.events.length; i++) {
      if(id == this.events[i]._id) {
        index = i;
        break;
      }
    }
    return index;
  }
}

export class MyEvent {
  _id: number;
  title: string;
  fatigue: string;
  pain: string;
  fog: string;
  rating: string;
  comments: string;
  relatedGoal: string
  color: string;
  start: string ;
  end: string;
  duration: number;
  date6: string;
  date7: string;
  allDay: boolean = false;
}
