import { Component, OnInit,Input } from '@angular/core';
import { Text } from '../../../app/Bookdata';
import { GetTextService } from 'src/app/getText.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss'],
})
export class C1Component implements OnInit {
  
  myData!: Text;
  constructor(private ldData: GetTextService) { }

  ngOnInit() {
    this.myData=this.ldData.loadData()
  }
 
}
