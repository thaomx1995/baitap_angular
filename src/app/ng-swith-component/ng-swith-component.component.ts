import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-swith-component',
  templateUrl: './ng-swith-component.component.html',
  styleUrls: ['./ng-swith-component.component.css']
})
export class NgSwithComponentComponent implements OnInit {

  toechoice:any = 'abc';
  constructor() { }

  ngOnInit():void {
  }

}
