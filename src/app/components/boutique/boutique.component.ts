import { Component, Input } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { BoutiqueService } from '../../api/services/boutique.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-boutique',
  standalone: true,
  imports: [ItemComponent, FormsModule],
  templateUrl: './boutique.component.html',
  styleUrl: './boutique.component.css'
})
export class BoutiqueComponent {
  constructor(private http: BoutiqueService) {
      this.http.fetchCategories().subscribe(data => {
          this.categories = data;
      });
      this.http.fetchAllItems().subscribe(data => {
        this.items = data;
      });
  }
  title = 'Boutique';
  items:any = []; 
  categories: any = [{label: 'test'}] 
}
