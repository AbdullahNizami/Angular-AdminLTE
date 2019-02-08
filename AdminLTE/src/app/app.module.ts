import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import {Routes, RouterModule} from '@angular/router';
import { UiModule } from './ui/ui.module';
import { HeaderComponent } from './ui/header/header.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: './main/main.module#MainModule'

  }

];



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    // UiModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
