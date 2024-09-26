import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component'; 
import { OverlayComponent } from './overlay/overlay.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    OverlayComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }