import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temple-varible-component',
  templateUrl: './temple-varible-component.component.html',
  styleUrls: ['./temple-varible-component.component.css']
})
export class TempleVaribleComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  callPhone(phone:any){
    alert (phone);
  }

}
