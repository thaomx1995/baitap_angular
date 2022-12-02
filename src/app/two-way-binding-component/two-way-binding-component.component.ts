import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-component',
  templateUrl: './two-way-binding-component.component.html',
  styleUrls: ['./two-way-binding-component.component.css']
})
export class TwoWayBindingComponentComponent implements OnInit {

  firstName:string ='Angula';
  constructor() { }

  ngOnInit() {
  }

}
