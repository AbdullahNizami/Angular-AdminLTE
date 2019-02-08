import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
// import { HomeModule } from './home/home.module';
// import { BlankpageModule } from './blankpage/blankpage.module';
import { UiModule } from '../ui/ui.module';

const routes: Routes = [
{
    path : '',
    component: MainComponent,
    children : [

      {

          path: '',
          loadChildren: './home/home.module#HomeModule',

      },

      {
        path : '',
        loadChildren: './blankpage/blankpage.module#BlankpageModule'

      },

      {
          path: '',
          loadChildren: './signin/signin.module#SigninModule'

      }
    ]


}


];


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    // HomeModule,
    // BlankpageModule,
    RouterModule.forChild(routes),
    UiModule
  ]
})
export class MainModule { }
