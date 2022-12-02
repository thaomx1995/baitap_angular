import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-component',
  templateUrl: './ngif-component.component.html',
  styleUrls: ['./ngif-component.component.css']
})
export class NgifComponentComponent implements OnInit {

  isshow:boolean = false;
  the_number:number =10;
  constructor() { }

  ngOnInit() {
  }

}
