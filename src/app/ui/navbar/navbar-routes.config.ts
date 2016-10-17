import { MenuType, RouteInfo } from './navbar.metadata';

export const ROUTES: RouteInfo[] = [
  { path: '', title: 'Home', menuType: MenuType.BRAND },
  { path: 'diaries', title: 'Pain Log', menuType: MenuType.RIGHT },
  { path: 'esa', title: 'Esa', menuType: MenuType.RIGHT },
  { path: 'pip', title: 'Pip', menuType: MenuType.RIGHT }

];
