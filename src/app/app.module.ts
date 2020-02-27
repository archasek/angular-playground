import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, MyComponent, MyCreatorDirective } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MyCreatorDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
