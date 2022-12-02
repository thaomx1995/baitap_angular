import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thuchanh-component',
  templateUrl: './thuchanh-component.component.html',
  styleUrls: ['./thuchanh-component.component.css']
})
export class ThuchanhComponentComponent  {

  fontSize = 14;
  changefontsize(){
    this.fontSize++;
  }
  dowfontsize(){
    this.fontSize--;
  }
  

}
