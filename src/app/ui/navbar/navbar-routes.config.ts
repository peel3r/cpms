import { MenuType, RouteInfo } from './navbar.metadata';

export const ROUTES: RouteInfo[] = [
  { path: '', title: 'Home', menuType: MenuType.BRAND },
  { path: '', title: 'Home', menuType: MenuType.LEFT},

  { path: 'diaries', title: 'Pain Log', menuType: MenuType.RIGHT },
  { path: 'esa', title: 'Esa', menuType: MenuType.LEFT },
  { path: 'pip', title: 'Pip', menuType: MenuType.LEFT },
  { path: 'goals', title: 'Goals', menuType: MenuType.RIGHT},
  { path: 'articles', title: 'Articles', menuType: MenuType.RIGHT}

];
