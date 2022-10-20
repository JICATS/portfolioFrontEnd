import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRoutesComponent } from './all-routes/all-routes.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';

import { LoginComponentComponent } from './components/login-component/login-component.component';
import { CreateUserComponent } from './componets/create-user/create-user.component';

const routes: Routes = [

  {path: 'app-login-component',component:LoginComponentComponent},
  {path: 'app-create-user',component:CreateUserComponent},
  {path:'app-all-routes',component:AllRoutesComponent},
  {path:'app-edit-form',component:EditFormComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
