import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'nstrd.m-client';
  message = 'Bonjour';
  display = false;
  logoUrl = "assets/moth2.png";
  birdUrl = "assets/Lino00.png";
  lino1Url = 'assets/Lino1.jpg';
  lino2Url = 'assets/Lino2.jpg';
  lino3Url = 'assets/Lino3.png';
  lino4Url = 'assets/Cera1.jpg';
  
  hello = () => { this.display = !this.display }
}
