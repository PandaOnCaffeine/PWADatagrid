import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {

  file!: File;

  onFilechange(event: any) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]
  }
  
  upload() {
    if (this.file) {
      console.log(this.file);
      // this.uploadService.uploadfile(this.file).subscribe(resp => {
      //   alert("Uploaded")
      // })
    } else {
      alert("Please select a file first")
    }
  }

}
