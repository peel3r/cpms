import {
  Component,
  OnDestroy,
OnInit,
  trigger,
  style,
  animate,
  state,
  transition } from '@angular/core';
import { ActivityService } from '../../services'
import { Router } from "@angular/router";
import { XLarge } from './x-large';
import {Store, ActivityList} from "../store";
import 'rxjs/Rx'
import {ChangeDetectorRef} from "@angular/core";
import * as moment from 'moment'
import {GoalService} from "../../services/goal.service";

@Component({
  selector: 'schedule',

  templateUrl: './schedule.template.html',
})




export class Schedule implements OnInit {

  events: any[];

  header: any;

  event: MyEvent;

  dialogVisible: boolean = false;

  idGen: number = 100;

  USER_ID = window.localStorage.getItem('cpms_user_id')
  date: any;
  goals = []
  date6:  Date;
  date7:  Date;

  minDate: Date;
  maxDate: Date;

  colors: Array<string> = ['#B19C09', '#FF6961', '#77DD77', '#AEC6CF', '#F49AC2', 'white'];
  duration = [5,10,15,20,30,45,60,90,120]
  rating = [1,2,3,4,5,6,7,8,9,10]

  constructor(private activityService: ActivityService, private cd: ChangeDetectorRef, private goalService: GoalService) {
    this.goalService.getUserGoals(this.USER_ID)
      .subscribe(res => {
        this.goals = res
      })
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


    // let today = new Date();
    // let month = today.getMonth();
    // let prevMonth = (month === 0) ? 11 : month -1;
    // let nextMonth = (month === 11) ? 0 : month + 1;
    // this.minDate = new Date();
    // this.minDate.setMonth(prevMonth);
    // this.maxDate = new Date();
    // this.maxDate.setMonth(nextMonth);
  }

  onColorSelect(color: string) {
    this.event.color = color;
  }

  handleDayClick(event) {
    this.event = new MyEvent();
    this.event.start = event.date.format();
    this.event.end = event.date.format();
    this.dialogVisible = true;

    //trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
    this.cd.detectChanges();
  }

  handleEventClick(e) {
    this.event = new MyEvent();
    this.event.title = e.calEvent.title;
    let start = e.calEvent.start;
    let end = e.calEvent.end;



    if(start) {
      this.event.start = start.format('llll');
    }
    if(end) {
      this.event.end = end.format('llll');
    }

    this.event._id = e.calEvent._id;
    this.event.fatigue = e.calEvent.fatigue;
    this.event.pain = e.calEvent.pain;
    this.event.fog = e.calEvent.fog;
    this.event.rating = e.calEvent.rating;
    this.event.comments = e.calEvent.comments;
    this.event.relatedGoal = e.calEvent.relatedGoal;
    this.event.color = e.calEvent.color;
    this.event.duration = e.calEvent.duration;


    this.event.allDay = e.calEvent.allDay;
    this.dialogVisible = true;
  }

  saveEvent() {
    //update
    if(this.event._id) {
      let index: number = this.findEventIndexById(this.event._id);


      if(index >= 0) {
        this.event.start = this.date6.toISOString();
        this.event.end = this.date7.toISOString();
        this.activityService.completeActivity(this.event)
          .subscribe();
        this.events[index] = this.event;
      }

    }
    //new
    else {
      this.event.start = this.date6.toISOString();
      this.event.end = this.date7.toISOString();
      console.log('this.event',this.event)
      this.activityService.createActivity(this.event)
        .subscribe()
      this.event._id = this.idGen;
      this.events.push(this.event);
      this.event = null;
    }
    this.dialogVisible = false;
  }

  refresh() {
    this.activityService.getUserActivities(this.USER_ID)
      .subscribe( )
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
  duration: string;
  allDay: boolean = false;
}
