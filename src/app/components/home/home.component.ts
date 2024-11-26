import { Component, Renderer2 } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private renderer: Renderer2) {
    let i = 0;
    setTimeout(() => {
      while (i < 40) {
      this.createLeaf();
      i++;
    }}, 1600)
  }

  private lastSparkleTime = 0;
  private throttleInterval = 100;

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



  createLeaf(): void {
    const leaf = this.renderer.createElement('div');
    this.renderer.addClass(leaf, 'leaf');

    // Génération des valeurs aléatoires
    const randomLeft = Math.floor(20 + Math.random() * 60);
    const randomSpeed = 3 + Math.random() * 4;
    const randomSize = Math.floor(50 + Math.random() * 150);
    const randomRotation = Math.floor(360 + Math.random() * 1080);

    // Définition des variables CSS personnalisées directement sur l'élément
    leaf.style.setProperty('--left', `${randomLeft}%`);
    leaf.style.setProperty('--speed', `${randomSpeed}s`);
    leaf.style.setProperty('--size', `${randomSize}px`);
    leaf.style.setProperty('--rotation', `${randomRotation}deg`);

    this.renderer.appendChild(document.body, leaf);

    leaf.addEventListener('animationend', () => {
      this.renderer.removeChild(document.body, leaf);
    });
  }

  onMouseMove(event: MouseEvent): void {
    const currentTime = Date.now();

    if (currentTime - this.lastSparkleTime > this.throttleInterval) {
      this.lastSparkleTime = currentTime;
      this.createSparkle(event.clientX, event.clientY);
    }
  }

  createSparkle(x: number, y: number): void {
    const sparkle = this.renderer.createElement('div');
    this.renderer.addClass(sparkle, 'sparkle');

    const randomX = (Math.random() - 0.5) * 700;
    const randomY = (Math.random() - 0.5) * 700;
    const randomColorR = Math.floor(60 + Math.random() * 180).toString(16);

    sparkle.style.setProperty('--translate-x', `${randomX}px`);
    sparkle.style.setProperty('--translate-y', `${randomY}px`);
    sparkle.style.setProperty('--translate-y-drop', `${randomY+20}px`);
    sparkle.style.setProperty('--bg-color', `#${randomColorR + randomColorR + randomColorR}`);
    sparkle.style.setProperty('--scale-max', `40`);

    this.renderer.setStyle(sparkle, 'left', `${x}px`);
    this.renderer.setStyle(sparkle, 'top', `${y}px`);

    this.renderer.appendChild(document.body, sparkle);

    sparkle.addEventListener('animationend', () => {
      this.renderer.removeChild(document.body, sparkle);
    });
  }
}
