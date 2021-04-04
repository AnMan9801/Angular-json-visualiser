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
    id: "manan"
  }];
  constructor() { }

  getTreeData() {
    console.log(this.treeData);

    return this.treeData;
    
  }

  setTreeData(data) {
    console.log(data);
    
    this.treeData = data;
  }
}
