import { Injectable } from '@angular/core';
import { Bookdata } from '../app/Bookdata';
import { BookData } from '../assets/data/newbook';

@Injectable({
  providedIn: 'root'
})
export class GetBookService {
  
  constructor() { }

  loadData(): Bookdata[]{
    return BookData;
    
    }
}