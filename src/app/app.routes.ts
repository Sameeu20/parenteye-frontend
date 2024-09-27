import { Routes } from '@angular/router';
import { AssignmentComponent } from './assignment/assignment.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';

export const routes: Routes = [
  { path: 'teacher-dashboard', component: TeacherDashboardComponent },
  {path : 'assignment', component: AssignmentComponent}
];