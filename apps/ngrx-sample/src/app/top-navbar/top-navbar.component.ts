import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'org-top-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, TabMenuModule, ],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.scss',
})
export class TopNavbarComponent implements OnInit{
  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  ngOnInit() {
      this.items = [
          { label: 'Pokemons', icon: 'pi pi-fw pi-home' },
          { label: 'Poke-Foods', icon: 'pi pi-fw pi-calendar' },
      ];

      this.activeItem = this.items[0]; // state  management eklenecek !!
  }

}
