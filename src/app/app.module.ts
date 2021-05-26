import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './component/title/title.component';
import { CalenderComponent } from './components/calender/calender.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
