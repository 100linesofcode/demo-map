import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapviewComponent } from './mapview/mapview.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

const routes: Routes = [{
  path: '',component:MapviewComponent ,pathMatch:'full'
//   {


//    path:'sidemenu',component:SidemenuComponent

// 
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],


  exports: [RouterModule]
})
export class AppRoutingModule { }
