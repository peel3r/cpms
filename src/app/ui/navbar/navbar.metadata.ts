export enum MenuType {
  BRAND,
  RIGHT

}

export interface RouteInfo {
  path: string;
  title: string;
  menuType: MenuType;
}
