import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankpageComponent } from './blankpage.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
    path: 'blank',
    component: BlankpageComponent,

}


];


@NgModule({
  declarations: [BlankpageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class BlankpageModule { }
