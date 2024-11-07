import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-boutique',
  standalone: true,
  imports: [RouterOutlet, ItemComponent],
  templateUrl: './boutique.component.html',
  styleUrl: './boutique.component.css'
})
export class BoutiqueComponent {
  title = 'Boutique';
}
