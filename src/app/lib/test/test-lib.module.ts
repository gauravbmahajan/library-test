import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { HttpModule } from '@angular/http';
import { TestService } from './test.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[TestComponent],
  declarations: [TestComponent],
  providers:[HttpModule,TestService,]
})
export class TestLibModule { }
