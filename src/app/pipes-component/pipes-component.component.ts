import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-component',
  templateUrl: './pipes-component.component.html',
  styleUrls: ['./pipes-component.component.css']
})

export class PipesComponentComponent implements OnInit {

  name:string = 'customer';
  public transform(value:any) :any{
    return value.toUpperCase;
  }
  constructor() { }

  ngOnInit() {
  }

}
