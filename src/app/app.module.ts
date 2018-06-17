import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AtlasComComponent } from './atlas-com/atlas-com.component';

@NgModule({
  declarations: [
    AppComponent,
    AtlasComComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
