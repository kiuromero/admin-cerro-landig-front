import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterNewsComponent } from './register-news.component';

const routes: Routes = [{
  path: '',
  component: RegisterNewsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterNewsRoutingModule {
}
