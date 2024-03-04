import { Component } from '@angular/core';

// Material
import { MatTableModule } from '@angular/material/table'

@Component({
  selector: 'app-datagrid',
  standalone: true,
  imports: [
    MatTableModule,
  ],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.scss'
})
export class DatagridComponent {

}
