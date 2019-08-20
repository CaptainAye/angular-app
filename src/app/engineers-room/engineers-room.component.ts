import { Observable } from 'rxjs';
import { SpaceShipService } from './../ships/space-ship.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SpaceShipType } from '../space-ship-type.enum';
import { SpaceShipFormValues } from '../space-ship-form-values';
import { SpaceShip } from '../space-ship';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css']
})
export class EngineersRoomComponent implements OnInit {

  /*availableShipTypes = Object.keys(SpaceShipType).map((name) => ({label: name, value: SpaceShipType[name]}));*/
  availableShipTypes = SpaceShipType;
  isProducing = false;
  shipCount$: Observable<number>;

  constructor(private spaceShipService: SpaceShipService) {
    this.shipCount$ = this.spaceShipService.hangarShips$.pipe(
      map((ships) => ships.length));
  }

  ngOnInit() {
  }

  onSubmit(formValues: SpaceShipFormValues): void {
    this.isProducing = true;
    const source$ = this.spaceShipService.produceShips(formValues);
    source$.subscribe(
      {
        complete: () => this.isProducing = false
      }
    );
  }

}
