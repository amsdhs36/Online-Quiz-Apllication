import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { GetstartedComponent } from "./getstarted/getstarted.component";
import { QuizhomeComponent } from "./quizhome/quizhome.component";
import { QuizdisplayComponent } from "./quizdisplay/quizdisplay.component";
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path:'',component:HomeComponent},
  
  { path:'getstart',component:GetstartedComponent},
  { path:'quizhome',component:QuizhomeComponent},
  { path:'quizdisplay',component:QuizdisplayComponent},
  { path:'review',component:ReviewComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
