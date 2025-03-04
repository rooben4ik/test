import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test';
  isSpinning = false;
  private currentRotation = 0;
  sectors = [10, 20, 30, 40, 50, 60];
  selectedValue: number | null = null;
  animateResult = false;
  spinningLights = false;
  selectedLights: boolean[] = [false, false, false, false, false, false];

  get rotationStyle() {
    return `rotate(${this.currentRotation}deg)`;
  }

  spinWheel() {
    if (this.isSpinning == false ) {
      this.isSpinning = true
        }
    const randomDegrees = 1440 + Math.floor(Math.random() * 720);
    this.currentRotation += randomDegrees;
    this.animateResult = false;
    this.spinningLights = true;
    this.selectedLights = [false, false, false, false, false, false];
    setTimeout(() => {
      this.spinningLights = false;
      const finalRotation = this.currentRotation % 360;
      let sectorIndex = Math.floor((360 - finalRotation) / 60) % 6;
      this.selectedValue = this.sectors[sectorIndex];
      this.animateResult = true;

      this.selectedLights[sectorIndex] = true;
      this.selectedLights[(sectorIndex + 1) % 6] = true;
      this.isSpinning = false;
    }, 4700);
  }
}