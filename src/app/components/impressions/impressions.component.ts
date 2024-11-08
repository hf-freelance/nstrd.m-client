import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-impressions',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './impressions.component.html',
  styleUrl: './impressions.component.css'
})
export class ImpressionsComponent {
  title = 'Impression';
}
