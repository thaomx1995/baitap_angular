import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-component',
  templateUrl: './event-component.component.html',
  styleUrls: ['./event-component.component.css']
})
export class EventComponentComponent implements OnInit {

  clickMe1():void{
    alert('clickme1')
  }
  clickMe2():void{
    alert('clickme2')
  }
  onkeyup(event:any):void{
    if(event.wich == 13){
      let tag = event.target.value;
      console.log(tag);
      // $('#result-tag').append(`<span class="btn btn-success">${tag}</span>`);
      event.target.value ='';
    }

  }
  constructor() { }

  ngOnInit() {
  }

}
