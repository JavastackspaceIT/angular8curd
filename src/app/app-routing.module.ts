import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserregisterationComponent } from './userregisteration/userregisteration.component';

const routes: Routes = [
  {
  path: 'user', component: UserregisterationComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
