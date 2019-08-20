import { Observable, BehaviorSubject } from 'rxjs';
import { SpaceShipService } from './../ships/space-ship.service';
import { PilotRoomComponent } from './../pilot-room/pilot-room.component';
import { Pilot } from './../pilot';
import { XWingShip } from './../xwing-ship';
import { StarDestroyerShip } from './../star-destroyer-ship';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SpaceShip } from '../space-ship';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit, AfterViewInit {

  @ViewChild(PilotRoomComponent) pilotRoom: PilotRoomComponent;

  selectedPilot: Pilot;
  hangarStream$: BehaviorSubject<SpaceShip[]>;

  constructor(private spaceShipService: SpaceShipService) {
    this.hangarStream$ = spaceShipService.hangarShips$;
  }

  ngAfterViewInit() {

  }

  assignPilot(spaceShip: SpaceShip) {
    spaceShip.pilot = this.selectedPilot;
    const index = this.pilotRoom.pilots.indexOf(this.selectedPilot);
    this.pilotRoom.pilots.splice(index, 1);
    this.selectedPilot = null;
    this.pilotRoom.selectedPilot = null;
  }

  deassignPilot(spaceShip: SpaceShip) {
    this.pilotRoom.pilots.push(spaceShip.pilot);
    spaceShip.pilot = null;
  }

  selectPilot(pilot: Pilot) {
    this.selectedPilot = pilot;
  }

  ngOnInit() {
  }

}
