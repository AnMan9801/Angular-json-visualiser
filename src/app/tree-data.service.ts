import { Injectable } from '@angular/core';
import { data } from "../data";

export interface FoodNode {
  id: string;
  children?: FoodNode[];
}

@Injectable({
  providedIn: 'root'
})
export class TreeDataService {

  treeData = [{
    id: "Please Upload Content.JSON file."
  }];
  visualiserComponent: boolean = false;
  constructor() { }

  getTreeData() {
    return this.treeData;
  }

  setTreeData(data) {
    this.treeData = data;
  }
}
