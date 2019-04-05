import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestAComponent } from './test-a/test-a.component';

const routes: Routes = [
  {path : '', component : TestAComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
