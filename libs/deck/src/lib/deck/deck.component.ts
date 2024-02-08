import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckListComponent } from '../deck-list/deck-list.component';
import { DeckDetailsComponent } from '../deck-details/deck-details.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'org-deck',
  standalone: true,
  imports: [CommonModule, DeckListComponent, DeckDetailsComponent, DragDropModule],
  templateUrl: './deck.component.html',
  styleUrl: './deck.component.scss',
})
export class DeckComponent {
  selectedPokemon$ = null;
}
