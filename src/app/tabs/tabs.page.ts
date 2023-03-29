import { Component,OnInit } from '@angular/core';
import { Bookdata } from '../../app/Bookdata';
import { GetBookService } from '../getBookdata.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  myBook! : Bookdata[]
  constructor(private ldData: GetBookService) {}

  ngOnInit() {     
  }
  refresh(){
    //this.myBook=this.ldData.loadData()  
  }
}
