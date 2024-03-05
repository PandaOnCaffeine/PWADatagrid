import { Component } from '@angular/core';

// Components
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { DatagridComponent } from '../datagrid/datagrid.component';

// Material
import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-file-upload-home',
  standalone: true,
  imports: [
    MatTabsModule,
    FileUploadComponent,
    DatagridComponent
  ],
  templateUrl: './file-upload-home.component.html',
  styleUrl: './file-upload-home.component.scss'
})
export class FileUploadHomeComponent {

}
