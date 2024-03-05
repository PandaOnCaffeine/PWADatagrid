import { Routes } from '@angular/router';

// Components
import { FileUploadHomeComponent } from './Components/file-upload-home/file-upload-home.component';

export const routes: Routes = [
    {path: "fileupload" , component: FileUploadHomeComponent, pathMatch: 'full'},
    { path: '', redirectTo: '/fileupload', pathMatch: 'full' }, // Add other routes or a default route if needed
    { path: '**', redirectTo: '/fileupload', pathMatch: 'full' },// Add a wildcard route for handling 404 errors
];
