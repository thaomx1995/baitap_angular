import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThuchanhComponentComponent } from './thuchanh-component/thuchanh-component.component';
import { MyPetComponentComponent } from './myPet-component/myPet-component.component';
import { PropretyComponentComponent } from './proprety-component/proprety-component.component';
// import { PropretyComponentComponent } from './proprety-component.component';
import { ClassMyComponentComponent } from './class-my-component/class-my-component.component';
import { EventComponentComponent } from './event-component/event-component.component';
import { ETowWayComponentComponent } from './e-tow-way-component/e-tow-way-component.component';
import { PipesComponentComponent } from './pipes-component/pipes-component.component';
import { NgSwithComponentComponent } from './ng-swith-component/ng-swith-component.component';
import { GameNumberComponentComponent } from './game-number-component/game-number-component.component';
import { TwoWayBindingComponentComponent } from './two-way-binding-component/two-way-binding-component.component';
import { TempleVaribleComponentComponent } from './temple-varible-component/temple-varible-component.component';
import { NgifComponentComponent } from './ngif-component/ngif-component.component';
@NgModule({
  declarations: [		
    AppComponent,
      ThuchanhComponentComponent,
      MyPetComponentComponent,
      PropretyComponentComponent,
      ClassMyComponentComponent,
      EventComponentComponent,
      ETowWayComponentComponent,
      PipesComponentComponent,
      NgSwithComponentComponent,
      GameNumberComponentComponent,
      TwoWayBindingComponentComponent,
      TempleVaribleComponentComponent,
      NgifComponentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
