import { Component } from '@angular/core';
import { Bookdata } from '../../app/Bookdata';
import { GetBookService } from '../getBook.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data1: any;
  name: any;
  description: any;
  author: any;
  year: any;
  publisher: any;
  comments: any;
  id= 0;
  x= 0;
  
  constructor(private ldData: GetBookService) { 
    
  }
  myData!: Bookdata[];
 
  
  loadBooks(){
    this.myData=this.ldData.loadData()
    //console.log(this.myData);
    for(let data in this.myData){
      
      localStorage.setItem(String(this.id),JSON.stringify(this.myData[data]));
      //console.log(this.id)
      this.id++;
    }
    alert("book successfully loaded");
    this.total = localStorage.length
    //window.location.reload();
    return this.id;
  }

  addBook(){
    console.log(this.id)
    if(this.name == null || this.description == null || this.author == null){
      alert("Name, description and author must be filled in")
    }else{
      this.myData=this.ldData.loadData()
      this.myData.push( {Name: this.name,description: this.description,
      author:this.author,year:this.year ,publisher:this.publisher,comments:this.comments})
      localStorage.setItem(String(localStorage.length+1),JSON.stringify(this.myData[this.myData.length-1]));
      alert("book successfully added");
    }
    this.name = null;
    this.description = null; 
    this.author = null;
    this.year = null;
    this.publisher= null;
    this.comments= null;
    this.total = localStorage.length
    window.location.reload();
  }

  clearBook(){
    localStorage.clear();
    alert("book successfully cleared");
    this.total = localStorage.length
    window.location.reload();
  }

  
    total = localStorage.length
    
   
}
