import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {MatIconModule} from '@angular/material/icon';
import { TreeDataService } from './tree-data.service';
import { TreeVisualiserComponent } from './tree-visualiser/tree-visualiser.component';
import { MatTreeModule } from '@angular/material/tree';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { TreeLeafComponent } from './tree-leaf/tree-leaf.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import {  AmplifyUIAngularModule } from "@aws-amplify/ui-angular";
import 'crypto-js/lib-typedarrays';
import Amplify, { Auth } from "aws-amplify";
// import awsconfig from "../aws-exports";

// Amplify.configure(awsconfig);
Auth.configure({ authenticationFlowType: 'USER_PASSWORD_AUTH', });
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FileUploadComponent,
    TreeVisualiserComponent,
    TreeNodeComponent,
    TreeLeafComponent,
    ScrollTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTreeModule,
    AmplifyUIAngularModule,
  ],
  providers: [TreeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
