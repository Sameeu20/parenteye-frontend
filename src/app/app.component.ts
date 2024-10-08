import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { RouterModule,  RouterLink } from '@angular/router';
// import { OverlayComponent } from './overlay/overlay.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NavbarComponent , MenuComponent , AssignmentComponent, TeacherDashboardComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment-Overlay';
}
