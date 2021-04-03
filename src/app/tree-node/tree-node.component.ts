import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {

  _;
  @Input("node") node;
  @Input("treeControl") treeControl;
  constructor() {
    this._ = _;
  }

  ngOnInit(): void {
  }

}
