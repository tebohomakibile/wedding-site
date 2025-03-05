import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss'
})
export class RsvpComponent {
  guestName: string = '';

  searchQuery: string = '';
  searchResults: any[] = [];

  
  invitations = [
    { id: 1, firstName: 'Mapaseka', lastName: 'Koetle', response: 'Accepted', responseDate: '2024-03-10' },
    { id: 2, firstName: 'Thabo', lastName: 'Mbeki', response: 'Pending', responseDate: '' },
    { id: 3, firstName: 'Julius Malema', lastName: 'Johnson', response: 'Declined', responseDate: '2024-03-05' }
  ];

  searchInvitation() {
    if (!this.searchQuery.trim()) {
      this.searchResults = [];
      return;
    }

    const query = this.searchQuery.toLowerCase().trim();
    this.searchResults = this.invitations.filter(invite =>
      invite.firstName.toLowerCase().includes(query) || invite.lastName.toLowerCase().includes(query)
    );
  }

  respondToInvitation(invite: any, response: string) {
    invite.response = response;
    invite.responseDate = new Date().toISOString().split('T')[0];
  }
}
