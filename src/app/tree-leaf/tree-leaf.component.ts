import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-tree-leaf',
  templateUrl: './tree-leaf.component.html',
  styleUrls: ['./tree-leaf.component.css']
})
export class TreeLeafComponent implements OnInit {

  _;
  @Input() node;

  constructor() {
    this._ = _;
   }

  ngOnInit(): void {
  }

}
