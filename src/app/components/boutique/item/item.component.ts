import { Component, Input } from '@angular/core';
import { Item } from '../boutique.types';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item: Item = {name:'', available:false};
}
