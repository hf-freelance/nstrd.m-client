import { Component, Input } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { BoutiqueService } from '../../api/services/boutique.service';
import {FormsModule} from '@angular/forms';
import { interval, take } from 'rxjs';

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
  displayedItems: any[] = [];

  ngOnInit() {
    interval(200)
      .pipe(take(this.items.length))
      .subscribe(index => {
        this.displayedItems.push(this.items[index]);
      });
  }

  filterCategory(label: string) {
      const newItems = this.items.filter((item: { category: string; }) => {
        return item.category === label;
      })
      interval(100)
        .pipe(take(this.displayedItems.length))
        .subscribe(() => {
          this.displayedItems.pop();
      });
      
      setTimeout(() => {
        interval(200)
            .pipe(take(newItems.length))
            .subscribe(index => {
              this.displayedItems.push(newItems[index]);
          });
      }, 1000)
      
  }

  title = 'Boutique';
  items:any = []; 
  categories: any = [{label: 'La boutique n\'est pas disponible actuellement'}]; 
}
