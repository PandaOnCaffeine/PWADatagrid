import { Component } from '@angular/core';

// Other Modules


// Material
import { MatTableModule } from '@angular/material/table'
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
  selector: 'app-datagrid',
  standalone: true,
  imports: [
    MatTableModule,
    MatGridListModule
  ],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.scss'
})
export class DatagridComponent {

}
