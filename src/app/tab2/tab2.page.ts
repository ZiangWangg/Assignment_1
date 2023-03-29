import { Component,Input } from '@angular/core';
import { Bookdata } from '../../app/Bookdata';
import { GetBookService } from '../getBookdata.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  data: any;
  myBook! : Bookdata[]

  total = localStorage.length
  constructor(private ldData: GetBookService,private router: Router) {
    
  }

 

  ngOnInit() {
    
    this.total = localStorage.length
    this.myBook=this.ldData.loadData();
    
    this.myBook.splice(0,1);
    console.log(this.myBook);
    for(let i = 0;i<localStorage.length;i++){
      this.myBook.push({Name: (JSON.parse(localStorage.getItem(String(i))!)).Name,
        description: (JSON.parse(localStorage.getItem(String(i))!)).description,
        author:(JSON.parse(localStorage.getItem(String(i))!)).author,
        year:(JSON.parse(localStorage.getItem(String(i))!)).year ,
        publisher:(JSON.parse(localStorage.getItem(String(i))!)).publisher,
        comments:(JSON.parse(localStorage.getItem(String(i))!)).comments})
        
      }
    
      
  }
  

    refresh(){
      window.location.reload();
      
      this.total = localStorage.length
    }
}

