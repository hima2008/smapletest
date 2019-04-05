import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestAComponent } from './test-a/test-a.component';

@NgModule({
  declarations: [TestAComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
