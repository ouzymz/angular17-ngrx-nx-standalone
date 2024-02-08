import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'org-deck-details',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Deck Details</p>`,
  styleUrl: './deck-details.component.scss',
})
export class DeckDetailsComponent {}
