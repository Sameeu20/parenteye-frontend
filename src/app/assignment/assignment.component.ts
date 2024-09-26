import { CdkPortal } from '@angular/cdk/portal';
import { Component } from '@angular/core';
import { OverlayComponent } from '../overlay/overlay.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



interface Assignment {
  id: number;
  title: string;
  subject: string;
  content : string;
}
@Component({
  selector: 'app-assignment',
  standalone: true,
  imports: [OverlayComponent, CommonModule, FormsModule],
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css'
})
export class AssignmentComponent {
  
  showOverlay = false;
  selectedAssignment: Assignment | null = null;
  newAssignmentTitle = '';
  newAssignmentSubject = '';
  newAssignmentContent ='';

  assignments: Assignment[] = [
    { id: 1, title: 'Assignment 1', subject: 'Math', content : 'Hello all' },
    { id: 1, title: 'Assignment 2', subject: 'Math', content : 'Hiii' },
    { id: 1, title: 'Assignment 3', subject: 'Math', content : 'Hello you ' },
    { id: 1, title: 'Assignment 4', subject: 'Math', content : 'Hello bye' },
  ];

  toggleOverlay(assignment?: Assignment) {
    this.showOverlay = !this.showOverlay;
    this.selectedAssignment = assignment || null;
  }
  
}

