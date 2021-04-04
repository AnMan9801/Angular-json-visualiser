import {
  Component,
  OnInit
} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import * as _ from 'lodash';
import { FoodNode, TreeDataService } from '../tree-data.service';
/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */

@Component({
  selector: 'app-tree-visualiser',
  templateUrl: './tree-visualiser.component.html',
  styleUrls: ['./tree-visualiser.component.css']
})

export class TreeVisualiserComponent implements OnInit {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  _;
  constructor(private _treeDataService:TreeDataService) {
    
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
    this.dataSource.data = this._treeDataService.getTreeData();
    this._ = _;
    this.treeControl.dataNodes = this.dataSource.data;
  }

}