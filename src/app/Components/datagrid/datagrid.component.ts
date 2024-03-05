import { Component, OnInit } from '@angular/core';

// Servies
import { UploadService } from '../../Services/upload.service';
import { MatTableDataSource } from '@angular/material/table';
import { CdkTableDataSourceInput } from '@angular/cdk/table';

// Other Modules
import { CommonModule } from '@angular/common';

// Material
import { MatTableModule } from '@angular/material/table'
import { MatGridListModule } from '@angular/material/grid-list';
import { ImageFile } from '../../Interfaces/image-file';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-datagrid',
  standalone: true,
  imports: [
    MatTableModule,
    MatGridListModule,
    CommonModule
  ],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.scss'
})
export class DatagridComponent implements OnInit{
  displayedColumns: string[] = ['picture', 'name', 'size'];
  // images?: Observable<ImageFile[]>;
  // imagesDataSource = new MatTableDataSource();

  dataSource = new MatTableDataSource<ImageFile>();

  constructor(private upload: UploadService){
    // this.dataSource = this.upload.filesData;
  }

  ngOnInit(): void {
    this.upload.GetFiles().subscribe(result =>{
      this.dataSource.data = result; // Initialize with data
      console.log(this.dataSource);
      
    })
  }

}
