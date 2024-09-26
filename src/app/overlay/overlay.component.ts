import { Component , EventEmitter,Output , Input} from '@angular/core';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.css'
})
export class OverlayComponent {
  @Input() assignment: any;
  @Output() close = new EventEmitter<void>();
  

  onClose() {

    this.close.emit();
  }

}
