import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[TestComponent],
  declarations: []
})
export class TestLibModule { }
