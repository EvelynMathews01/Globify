import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/app.page';

const routes: Routes = [
  {path: '', component: PageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // {enableTracing: true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
