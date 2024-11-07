import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { Item } from './boutique.types';

@Component({
  selector: 'app-boutique',
  standalone: true,
  imports: [RouterOutlet, ItemComponent],
  templateUrl: './boutique.component.html',
  styleUrl: './boutique.component.css'
})
export class BoutiqueComponent {
  title = 'Boutique';

  items:Item[] = [
    {name:'Lino 1', available: false},
    {name:'Lino 2' , available: true},
    {name:'Lino 3', available: true}
  ] 
}
