import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { Category, Item } from './boutique.types';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-boutique',
  standalone: true,
  imports: [RouterOutlet, ItemComponent],
  templateUrl: './boutique.component.html',
  styleUrl: './boutique.component.css'
})
export class BoutiqueComponent {
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/api/category').subscribe(data => {
      console.log(data);
      this.categories = data;
    });
  }

  title = 'Boutique';

  items:Item[] = [
    {name:'Lino 1', available: false},
    {name:'Lino 2' , available: true},
    {name:'Lino 3', available: true}
  ] 

  categories: any = [{label: ''}] 
}
