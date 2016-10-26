import {Component, OnInit,Input} from '@angular/core';
import {GoalService} from '../services/goal.service'
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'show-goal',
  styleUrls: ['./goal.style.css'],
  templateUrl: './show-goal.template.html'
})

export class ShowGoal {
  @Input() goal = {}
  id: string
  painLevelCount:string;
  moodLevelCount: string;
  goals = []
  user_id = window.localStorage.getItem('cpms_user_id')

  // powers = ['Aching','Sharp','Penetrating','Throbbing','Tender','Nagging','Shooting','Burning','Numb','Stabbing','Pinching','Gnaving'];

  constructor( private goalService: GoalService, private route: ActivatedRoute, private router: Router) {

    route.params.subscribe(params => { this.id = params['id']; });
  this.goalService.getGoals()
    .subscribe(
      res => {this.goals = res})

    this.goalService.getGoal(this.id)
      .subscribe(res => this.goal = res);
  }

  toUserProfile(): void {
    this.router.navigate(['','users', this.user_id]);
  }

  onBack(): void {
    this.router.navigate(['/goals']);
  }
}
