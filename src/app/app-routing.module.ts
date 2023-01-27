import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondCComponent } from './second-c/second-c.component';
import { ThirdCComponent } from './third-c/third-c.component';
import{ContentComponent} from './content/content.component'

const routes: Routes = [
  {
    path:"", redirectTo:'/content',pathMatch:'full'

  },
  {path:"content",component:ContentComponent},
  {
    path:'second',
    component:SecondCComponent
  },
  {
    path:'third',
    component:ThirdCComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
