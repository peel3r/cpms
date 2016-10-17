import { Component, OnInit } from '@angular/core';
import { ROUTES } from './navbar-routes.config';
import { MenuType } from './navbar.metadata';
import {AuthService} from '../../services'
import {ToastsManager} from "ng2-toastr";
import {DiaryService} from "../../services/painDiaries";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styles: [ `
.active {
  color: #fff;
}
.navbar-toggler {
  border: solid 1px silver;
  border-radius: 2px;
  color: #eee;
}

` ]
})
export class NavbarComponent implements OnInit {
  public menuItems: any[];
  public brandMenu: any;
  isCollapsed = true;
  mode: string;
  modeIn: string;

  library: string = ''
  user_id = window.localStorage.getItem('cpms_user_id')
  user_name = window.localStorage.getItem('cpms_user_name')


  private _open: boolean = false;

  private _toggleSidebar() {
    this._open = !this._open;
  }


  constructor(
    private authService: AuthService,
    private router: Router,
    private diaryService: DiaryService,
    public toastr: ToastsManager){

  }

  showSuccess() {
    this.toastr.success('Successfully logged out');
  }

  ngDoCheck() {

    if (localStorage.getItem('retain_token')) {
      this.mode = 'signout'
      this.library = 'Library'
      this.modeIn = ''

    } else {
      this.mode = ''
      this.library = ''
      this.modeIn = 'Sign In'

    }
  }

  changeModeOut() {
    if (this.mode == 'signin') {
      this.mode = 'signout'
      this.modeIn = ''

    } else {
      this.mode = 'signin'
      this.modeIn = ''
      this.authService.signout()
    }
  }

  changeModeIn() {
    if (this.modeIn == 'Sign In') {
      this.modeIn = ''
    } else {
      this.modeIn = ''

    }
  }


  signout() {
    this.authService.signout()
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
    this.brandMenu = ROUTES.filter(menuItem => menuItem.menuType === MenuType.BRAND)[0];
  }

  public get menuIcon(): string {
    return this.isCollapsed ? '☰' : '✖';
  }

  public getMenuItemClasses(menuItem: any) {
    return {
      'pull-xs-right': this.isCollapsed && menuItem.menuType === MenuType.RIGHT
    };
  }
}
