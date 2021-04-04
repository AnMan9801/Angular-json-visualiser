import { Component } from '@angular/core';
import { TreeDataService } from './tree-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'visualiser-v0';
  constructor(public _treeDataService : TreeDataService) {
    
  }
}
