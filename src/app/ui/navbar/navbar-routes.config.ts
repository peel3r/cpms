import { MenuType, RouteInfo } from './navbar.metadata';

export const ROUTES: RouteInfo[] = [
  { path: '', title: 'Home', menuType: MenuType.BRAND },
  { path: 'diaries', title: 'Pain Log', menuType: MenuType.RIGHT },
  { path: 'esa', title: 'Esa', menuType: MenuType.LEFT },
  { path: 'pip', title: 'Pip', menuType: MenuType.LEFT },
  { path: 'goal/new', title: 'New Goal', menuType: MenuType.RIGHT}

];
