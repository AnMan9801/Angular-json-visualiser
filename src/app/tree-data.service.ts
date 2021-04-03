import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TreeDataService {

  treeData: {};
  constructor() { }

  getTreeData() {
    return this.treeData;
  }
}
