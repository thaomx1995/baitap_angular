import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-my-component',
  templateUrl: './class-my-component.component.html',
  styleUrls: ['./class-my-component.component.css']
})
export class ClassMyComponentComponent implements OnInit {

  onSale:boolean = false;
  classExpression:Array<string> = ['class1','class2'];
  actionName:string = 'add';
  expression:string = 'red';
  constructor() { }

  ngOnInit():void {
  }

}
