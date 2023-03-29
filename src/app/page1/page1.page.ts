import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Bookdata } from '../../app/Bookdata';
import { GetBookService } from '../getBookdata.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  myBooks!:any
  myBook1!:any
  data: any;
  namep1: any;
  descriptionp1: any;
  authorp1: any;
  yearp1: any;
  publisherp1: any;
  commentsp1: any;
   x! :number;

  constructor(private ldData: GetBookService,private router: Router) { 

    this.data=this.router.getCurrentNavigation()?.extras.state
   //console.log(this.data.id)
  }

  updateBook(){
    this.myBook1 = this.ldData.loadData();
    //this.myBook1.splice(0,localStorage.length);
    this.myBook1[String(this.x)].Name =  this.namep1
    this.myBook1[String(this.x)].description =  this.descriptionp1
    this.myBook1[String(this.x)].author =  this.authorp1
    this.myBook1[String(this.x)].year =  this.yearp1
    this.myBook1[String(this.x)].publisher =  this.publisherp1
    this.myBook1[String(this.x)].comments =  this.commentsp1
    console.log(this.myBook1[String(this.x)])  
    localStorage.setItem(String(this.x),JSON.stringify(this.myBook1[String(this.x)]));
      
  }

  deleteBook(){
    this.myBook1 = this.ldData.loadData();
    this.myBook1.splice(this.x,1);
    for(var item in this.myBook1){
      localStorage.setItem(item,JSON.stringify(this.myBook1[item]))
      
    }localStorage.removeItem(String(localStorage.length -1))
    this.router.navigate(['tabs/tab2']);
   
  }


  ngOnInit() {
    this.myBooks=this.ldData.loadData()
   
      for( let i = 0;i<localStorage.length;i++){
        
        if((JSON.parse(localStorage.getItem(String(i))!)).Name=== this.data.id){
          this.namep1 = (JSON.parse(localStorage.getItem(String(i))!)).Name
          this.descriptionp1 = (JSON.parse(localStorage.getItem(String(i))!)).description
          this.authorp1 = (JSON.parse(localStorage.getItem(String(i))!)).author
          this.yearp1 = (JSON.parse(localStorage.getItem(String(i))!)).year
          this.publisherp1 = (JSON.parse(localStorage.getItem(String(i))!)).publisher
          this.commentsp1 = (JSON.parse(localStorage.getItem(String(i))!)).comments
          this.x = i;
        }
      }

  }
 
}
