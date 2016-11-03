import {Component, Input, EventEmitter, Output,
  OnDestroy,
  trigger,
  style,
  animate,
  state,
  transition } from '@angular/core';
import {} from '../services/activity.service'
import {ActivityService} from "../services/activity.service";
import {ChangeDetectorRef} from "@angular/core";
import {Router} from "@angular/router";
import {Store} from "../store";
@Component({
  selector: 'activity-card',
  styles: [`
    .note-card {
      padding: 15px;
      border-radius: 2px;
      width: 100%;
      position: relative;
      margin-bottom: 20px;
    }
    .title {
      font-size: 1.2rem;
      font-weight: bold;
      text-align: left;
      color: rgba(0,0,0,0.8);
    }
    .value {
      text-align: left;
      font-size: 1.4rem;
      font-weight: 200;
    }
    .icon {
      position: absolute;
      color: black;
      border: 1px solid lightgrey;
      background-color: white;
      font-size: 30px;
      top: -10px;
      left: -10px;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      cursor: pointer;
    }
  `],
  template: `
<p-schedule [events]="events" [header]="header" defaultDate="2016-11-02" [eventLimit]="4" [editable]="true"
            (onDayClick)="handleDayClick($event)" (onEventClick)="handleEventClick($event)"></p-schedule>
<p-dialog header="Event Details" [(visible)]="dialogVisible" [responsive]="true" showEffect="fade" [modal]="false">
    <div class="ui-grid ui-grid-responsive ui-fluid" *ngIf="event">
        <div class="ui-grid-row">
            <div class="ui-grid-col-4"><label >Title</label></div>
            <div class="ui-grid-col-8"><input pInputText id="title" [(ngModel)]="event.title" /></div>
        </div>
        <div class="ui-grid-row">
            <div class="ui-grid-col-4"><label for="fatigue">Fatigue Level</label></div>
            <div class="ui-grid-col-8"><input pInputText id="fatigue" [(ngModel)]="event.fatigue" /></div>
        </div>
        <div class="ui-grid-row">
            <div class="ui-grid-col-4"><label for="start">Start</label></div>
            <div class="ui-grid-col-8"><p-inputMask id="start" mask="9999-99-99" [(ngModel)]="event.start" placeholder="99/99/9999" slotChar="yyyy-mm-dd"></p-inputMask></div>
        </div>
        <div class="ui-grid-row">
            <div class="ui-grid-col-4"><label for="end">End</label></div>
            <div class="ui-grid-col-8"><p-inputMask id="end" mask="9999-99-99" [(ngModel)]="event.end" placeholder="Optional" slotChar="yyyy-mm-dd"></p-inputMask></div>
        </div>
        <div class="ui-grid-row">
            <div class="ui-grid-col-4"><label for="allday">All Day</label></div>
            <div class="ui-grid-col-8"><p-checkbox [(ngModel)]="event.allDay" binary="binary"></p-checkbox></div>
        </div>
      
    </div>
    <footer>
        <div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
            <button type="button" pButton icon="fa-close" (click)="deleteEvent()" label="Delete"></button>
            <button type="button" pButton icon="fa-check" (click)="saveEvent()" label="Save"></button>
        </div>
    </footer>
</p-dialog>



`
})

export class ActivityCard {

  activities = [];
  event: MyEvent;
  dialogVisible: boolean = false;
  idGen: number = 100;

  date = Date.now()
  USER_ID = window.localStorage.getItem('cpms_user_id')
  onLeave: boolean  = true

  @Input() activity = {};
  @Output() checked = new EventEmitter();
  events: any[];

  header: any;

  showCheck: boolean = false;

  constructor(
    public activityService: ActivityService,
    public router: Router,
    private store: Store,
    private cd: ChangeDetectorRef
  ) {
    this.activityService.getUserActivities(this.USER_ID)
      .subscribe(res => {
        this.activities =  res
        this.events = res

      })



    this.store.changes.pluck('activities')
      .subscribe();

    setTimeout(() => {
      this.toggle()
    },1000)
  }

  ngOnChange() {
    this.activityService.getEvents()
      .subscribe(events => {
        this.events = events;
      });
  }
  toggleCheck(){
    this.showCheck = !this.showCheck;
  }

  onChecked(activity) {
    this.checked.next(this.activity);
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
    this.event.fatigue = e.calEvent.fatigue;
    this.event.pain = e.calEvent.pain;
    this.event.fog = e.calEvent.fog;
    this.event.rating = e.calEvent.rating;
    this.event.duration = e.calEvent.duration;
    this.event.relatedGoal = e.calEvent.relatedGoal;


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
  fatigue: string;
  pain: string;
  fog: string;
  duration: string;
  relatedGoal: string;
  rating: string;
  allDay: boolean = true;
}
