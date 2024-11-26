import { Component, Input } from '@angular/core';
import { Item } from '../../../api/models/boutique.types';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],  
  animations: [
    trigger('fadeInOut', [
      transition(':leave', [
        style({ opacity: 1, height: '*'}),
        animate('600ms', style({ opacity: 0 })),
        animate('1200ms', style({ height: '0' }))
      ])
    ])
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item: Item = {
    title: '',
    caption: '',
    imgReference: '',
    price: 0,
    category: '',
    available: false,
  };

}
