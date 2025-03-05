import { Component } from '@angular/core';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss'
})
export class RsvpComponent {
  guestName: string = '';

  findInvitation() {
    alert(`Searching invitation for: ${this.guestName}`);
  }
}
