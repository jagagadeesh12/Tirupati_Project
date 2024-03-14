export interface ITab {
  name: string;
  component: React.ElementType;
}
export interface IListOfScreens {
  name: string;
  component: any;
  headerTile?: string;
}
