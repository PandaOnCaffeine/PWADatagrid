import { Routes } from '@angular/router';
import { FileUploadComponent } from './Components/file-upload/file-upload.component';
import { DatagridComponent } from './Components/datagrid/datagrid.component';

export const routes: Routes = [
    {path: "file" , component: FileUploadComponent, pathMatch: 'full'},
    {path: "data" , component: DatagridComponent, pathMatch: 'full'},
    { path: '', redirectTo: '/file', pathMatch: 'full' }, // Add other routes or a default route if needed
    { path: '**', redirectTo: '/file', pathMatch: 'full' },// Add a wildcard route for handling 404 errors
];
