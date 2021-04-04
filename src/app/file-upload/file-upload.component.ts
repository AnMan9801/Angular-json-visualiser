import {
  Component,
  OnInit
} from '@angular/core';
import {
  TreeDataService
} from '../tree-data.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  obj;
  loading: boolean = false;
  fileLoaded: boolean = false;
  fileLoadError: boolean = false;
  constructor(private _treeDataService: TreeDataService) {}

  ngOnInit(): void {

  }

  async onFileSelected(event) {

    try {
      let fileContents = await this.onFileSelectedSub(event.target.files[0]);
      fileContents = JSON.parse(fileContents as string);
      console.log(fileContents);
      this.fileLoaded = true;
      let arrayObj = [];
      arrayObj.push(fileContents);
      this._treeDataService.setTreeData(arrayObj);

    } catch (e) {
      console.warn(e.message);
      this.fileLoadError = true;
      this.fileLoaded = false;
    }
    // await this.onFileSelectedSub(event.target.files[0]);
    // if (!this.fileLoadError) {
    //   this.fileLoaded = true;
    //   let arrayObj = [];
    //   arrayObj.push(this.obj);
    //   this._treeDataService.setTreeData(arrayObj);
    // }
  }
  onFileSelectedSub = (file) => {
    var that = this;
    var reader = new FileReader(); // File reader to read the file 

    that.fileLoadError = false;
    that.fileLoaded = true;
    return new Promise((resolve, reject) => {
      reader.onerror = () => {
        reader.abort();
        that.fileLoadError = true;
        that.fileLoaded = false;
        reject(new DOMException("Problem parsing input file."));
      };

      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsText(file);
    });
    // This event listener will happen when the reader has read the file
    // reader.addEventListener('load', function () {
      //   try {
      //     that.fileLoadError = false;
      //     that.fileLoaded = true;
    //     var result = JSON.parse(reader.result as string); // Parse the result into an object 
    //     that.obj = result;
    //   } catch (error) {
    //     that.fileLoadError = true;
    //     that.fileLoaded = false;
    //   }
    // });

    // reader.readAsText(file); // Read the uploaded file
  }

  async visualiseTree(event) {
    this.loading = true;
    await this.sleep(2000);
    this._treeDataService.visualiserComponent = true;
    document.getElementById("routeMe").click();
  }

  sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
