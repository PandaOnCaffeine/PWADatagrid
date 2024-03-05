import { Component, Inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

// Interfaces
import { ImageFile } from '../../Interfaces/image-file';

// Services
import { UploadService } from '../../Services/upload.service';


// Material
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-file-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  templateUrl: './file-dialog.component.html',
  styleUrl: './file-dialog.component.scss'
})
export class FileDialogComponent implements OnInit {

  FileData!: FormGroup;

  fileName = this.data.FileName;
  fileSize = this.data.FileSize;
  file = this.data.File;
  imgSrc: any;

  constructor(
    public dialogRef: MatDialogRef<FileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private upload: UploadService) { }

  ngOnInit(): void {
    this.imgSrc = URL.createObjectURL(this.data.File);
    this.FileData = new FormGroup({
      FileName: new FormControl(this.fileName),
      FileSize: new FormControl(this.fileSize),
      File: new FormControl(this.file)
    })
  }

  Upload() {
    const img: ImageFile = {
      fileName: this.fileName,
      fileSize: this.fileSize,
      fileSrc: URL.createObjectURL(this.file),
      file: this.file
    }
    this.upload.Upload(img).subscribe(result => {
      console.log("Sucess");
    })
    this.dialogRef.close();
  }
}
