import { Planet } from './../planet';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-find-planet',
  templateUrl: './find-planet.component.html',
  styleUrls: ['./find-planet.component.css']
})
export class FindPlanetComponent implements OnInit {

  @ViewChild('world') elementView: ElementRef;

  planet: Planet;
  mouseX: number;
  mouseY: number;
  height = 500;
  width = 1000;

  constructor() {
    this.planet = new Planet(this.height, this.width);
    this.mouseX = 0;
    this.mouseY = 0;
   }

  ngOnInit() {
  }

  move(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  calculateOpacity(): number {
    const maxDistance = Math.sqrt(Math.pow(this.height, 2) + Math.pow(this.width, 2)) / 5;
    const distance = Math.sqrt(
            Math.pow(this.planet.xPosition - this.mouseX + this.planet.planetSize / 2, 2)
          + Math.pow(this.planet.yPosition - this.mouseY + this.planet.planetSize / 2, 2)
      );
    return distance / maxDistance;
  }

}
