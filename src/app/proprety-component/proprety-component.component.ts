import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proprety-component',
  templateUrl: './proprety-component.component.html',
  styleUrls: ['./proprety-component.component.css']
})
export class PropretyComponentComponent  {

  intemImageUrl:string = "https://i.pinimg.com/474x/71/d8/9b/71d89b86c1d7f58f526e9001b9b96d0e.jpg";
  colspan:number = 1;
  isUnchanged:boolean = false;
  @Input('item') item:any
  @Input('name') name:any
  constructor() {

   }

  ngOnInit() :void {
    console.log(this.item)
  }

}
