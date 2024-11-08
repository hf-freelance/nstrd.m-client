import { Component } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { BoutiqueService } from '../../api/services/boutique.service';

@Component({
  selector: 'app-boutique',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './boutique.component.html',
  styleUrl: './boutique.component.css'
})
export class BoutiqueComponent {
  constructor(private http: BoutiqueService) {
    this.http.fetchCategories().subscribe(data => {
        this.categories = data;
    });
  }

  title = 'Boutique';

  items:any = [
    {name:'Lino 1', available: false},
    {name:'Lino 2' , available: true},
    {name:'Lino 3', available: true},
    {name:'Lino 3', available: true},
    {name:'Lino 3', available: true},
    {name:'Lino 3', available: true}
  ] 

  categories: any = [{label: 'test'}] 
}
