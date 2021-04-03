import {
  Component,
  OnInit
} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { data } from "../../data";
import * as _ from 'lodash';
/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  id: string;
  children?: FoodNode[];
}

@Component({
  selector: 'app-tree-visualiser',
  templateUrl: './tree-visualiser.component.html',
  styleUrls: ['./tree-visualiser.component.css']
})

export class TreeVisualiserComponent implements OnInit {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  _;
  constructor() {
    this.dataSource.data = data;
    this._ = _;
    this.treeControl.dataNodes = this.dataSource.data;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  ngOnInit(): void {}

}