import { PilotService } from './../pilots/pilot.service';
import { Pilot } from './../pilot';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {
  pilots: Pilot[] = [];
  selectedPilot: Pilot;
  @Output() pilotSelected = new EventEmitter();

  select(pilot: Pilot) {
    this.pilotSelected.emit(pilot);
    this.selectedPilot = pilot;
  }

  constructor(private pilotService: PilotService) { }

  ngOnInit() {
    this.pilotService.getPilots().subscribe({
      next: (pilots) => this.pilots = pilots,
      error: () => alert('something went wrong')
    });
  }

}
