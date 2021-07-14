import { ISoftwareListItem } from "./ISoftwareListItem";

export interface ICrudwithReactState{
    status:string;
    SoftwareListItems:ISoftwareListItem[],
    SoftwaeListItem:ISoftwareListItem;
}