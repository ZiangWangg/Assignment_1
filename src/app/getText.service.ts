import { Injectable } from '@angular/core';
import { Text } from '../app/Bookdata';
import { TEXT } from '../assets/data/text';

@Injectable({
  providedIn: 'root'
})
export class GetTextService {
  
  constructor() { }

  loadData(): Text{
    
    return TEXT;
    
    }
}