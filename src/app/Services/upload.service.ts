import { Injectable } from '@angular/core';
import { ImageFile } from '../Interfaces/image-file';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private files: Array<ImageFile> = [];
  private files$: Subject<ImageFile[]> = new BehaviorSubject<ImageFile[]>(this.files);

  filesData: Observable<ImageFile[]> = this.files$.asObservable()

  constructor() { }


  Upload(file: ImageFile){
    this.files?.push(file);
    this.files$.next(this.files);
  }

  GetFiles():Observable<ImageFile[]>{
    return this.filesData;
  }

}
