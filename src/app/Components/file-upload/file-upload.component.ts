import { Component } from '@angular/core';

// Other Modules
import { CommonModule } from '@angular/common';

// Components
import { FileDialogComponent } from '../file-dialog/file-dialog.component';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MAT_DIALOG_DATA, } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'

// Interfaces
import { ImageFile } from '../../Interfaces/image-file';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    CommonModule
  ],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {

  imgSrc: any;
  file!: File;
  imageSrc!: string;

  constructor(public dialog: MatDialog) { }


  onFilechange(event: any) {
    console.log(event.target.files[0]);
    this.file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      this.imgSrc = URL.createObjectURL(event.target.files[0]);
    }
    // const reader = new FileReader();
    // reader.readAsDataURL(this.file);
  }


  // Use in dialog component

  // upload() {
  //   if (this.file) {
  //     console.log(this.file);
  //   } else {
  //     alert("Please select a file first")
  //   }
  // }


  openDialog(): void {
    const dialogRef = this.dialog.open(FileDialogComponent, {
      data: {
        FileName: this.file.name,
        FileSize: this.file.size,
        File: this.file,
      },
      height: 'auto',
      width: '50vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      // Snackbar confirmed message
    })
  }

  // readURL(event: Event): void {
  //   if (event.target.files && event.target.files[0]) {
  //     const file = event.target.files[0];

  //     const reader = new FileReader();
  //     reader.onload = e => this.imageSrc = reader.result;

  //     reader.readAsDataURL(file);
  //   }
  // }
}
