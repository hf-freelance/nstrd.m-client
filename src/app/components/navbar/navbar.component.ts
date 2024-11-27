import { Component, Renderer2 } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavBarComponent {
  constructor(private renderer: Renderer2) {}
  logoUrl = 'assets/logo.svg'
  private lastSparkleTime = 0;
  private throttleInterval = 1000;

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

    const randomX = (Math.random() - 0.5) * 300;
    const randomY = (Math.random() - 0.5) * 300;
    const randomColorR = Math.floor(60 + Math.random() * 180).toString(16);
    const randomColorV = Math.floor(60 + Math.random() * 180).toString(16);
    const randomColorB = Math.floor(60 + Math.random() * 180).toString(16);

    sparkle.style.setProperty('--translate-x', `${randomX}px`);
    sparkle.style.setProperty('--translate-y', `${randomY}px`);
    sparkle.style.setProperty('--translate-y-drop', `${randomY+20}px`);
    sparkle.style.setProperty('--bg-color', `#${randomColorR + randomColorV + randomColorB}`);
    sparkle.style.setProperty('--scale-max', `1`);

    this.renderer.setStyle(sparkle, 'left', `${x}px`);
    this.renderer.setStyle(sparkle, 'top', `${y}px`);


    this.renderer.setStyle(sparkle, 'left', `${x}px`);
    this.renderer.setStyle(sparkle, 'top', `${y}px`);

    this.renderer.appendChild(document.body, sparkle);

    sparkle.addEventListener('animationend', () => {
      this.renderer.removeChild(document.body, sparkle);
    });
  }
}
