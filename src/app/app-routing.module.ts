import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { TreeVisualiserComponent } from './tree-visualiser/tree-visualiser.component';

const routes: Routes = [
  { path: 'visualiser', component: TreeVisualiserComponent },
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'file-upload/', component: FileUploadComponent },
  { path: '**', redirectTo: "/file-upload" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
