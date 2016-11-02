import {
  Component,
  OnDestroy,
  trigger,
  style,
  animate,
  state,
  transition } from '@angular/core';
import { ActivityService } from '../services'
import { Router } from "@angular/router";
import { XLarge } from './x-large';
import {Store, ActivityList} from "../store";
import 'rxjs/Rx'
import {ChangeDetectorRef} from "@angular/core";


@Component({
  selector: 'activity',
  styleUrls: ['./activity.style.css'],
  animations: [
    trigger('fade', [
      state('void', style({opacity: 0})),
      transition('void => *', [
        animate(600, style({opacity: 1}))
      ]),
      transition('* => void', animate(1000))
    ])
  ],
  templateUrl: './activity.template.html',
})

export class Activity {
  activities = [];
  events: any[];
  header: any;
  event: ActivityList;
  dialogVisible: boolean = false;
  idGen: number = 100;

  date = Date.now()
  USER_ID = window.localStorage.getItem('cpms_user_id')
  onLeave: boolean  = true
  constructor(
    public activityService: ActivityService,
    public router: Router,
    private store: Store,
    private cd: ChangeDetectorRef
  ) {
    this.activityService.getUserActivities(this.USER_ID)
      .subscribe(res => {
        this.activities =  res

      })



    this.store.changes.pluck('activities')
      .subscribe();

    setTimeout(() => {
      this.toggle()
    },1000)
  }


  onCreateActivity(activity) {
    this.activityService.createActivity(activity)
      .subscribe(activity => {
        this.activities.push(activity)
      });
  }

  onActivityChecked(activity,i) {
    this.activityService.deleteActivity(activity)
      .subscribe();
    this.activities.splice(i, 1);


  }

  onBackActivityChecked(activity,i) {
    this.activityService.completeActivity(activity)
      .subscribe();

  }



  toggle() {
    this.onLeave = !this.onLeave;
  }

  toUserProfile(): void {
    this.router.navigate(['','users', this.USER_ID]);
  }

  ngOnInit() {
    this.activityService.getEvents()
      .subscribe(events => {
      this.events = events;
    });

    this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };
  }
  handleDayClick(event) {
    this.event = new MyEvent();
    this.event.start = event.date.format();
    this.dialogVisible = true;

    //trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
    this.cd.detectChanges();
  }

  handleEventClick(e) {
    this.event = new MyEvent();
    this.event.title = e.calEvent.title;

    let start = e.calEvent.start;
    let end = e.calEvent.end;
    if(e.view.name === 'month') {
      start.stripTime();
    }

    if(end) {
      end.stripTime();
      this.event.end = end.format();
    }

    this.event.id = e.calEvent.id;
    this.event.start = start.format();
    this.event.allDay = e.calEvent.allDay;
    this.dialogVisible = true;
  }

  saveEvent() {
    //update
    if(this.event.id) {
      let index: number = this.findEventIndexById(this.event.id);
      if(index >= 0) {
        this.events[index] = this.event;
      }
    }
    //new
    else {
      this.event.id = this.idGen;
      this.events.push(this.event);
      this.event = null;
    }

    this.dialogVisible = false;
  }

  deleteEvent() {
    let index: number = this.findEventIndexById(this.event.id);
    if(index >= 0) {
      this.events.splice(index, 1);
    }
    this.dialogVisible = false;
  }

  findEventIndexById(id: number) {
    let index = -1;
    for(let i = 0; i < this.events.length; i++) {
      if(id == this.events[i].id) {
        index = i;
        break;
      }
    }

    return index;
  }


}
export class MyEvent {
  id: number;
  title: string;
  start: string;
  end: string;
  allDay: boolean = true;
}
