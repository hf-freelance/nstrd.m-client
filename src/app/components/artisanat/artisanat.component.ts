
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-artisanat',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './artisanat.component.html',
  styleUrl: './artisanat.component.css'
})
export class ArtisanatComponent {
  title = 'Artisanat';
}
