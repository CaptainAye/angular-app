import { Observable } from 'rxjs';
import { SpaceShipService } from './../space-ship.service';
import { Component, OnInit } from '@angular/core';
import { SpaceShip } from '../../space-ship';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-engineers-trash',
  templateUrl: './engineers-trash.component.html',
  styleUrls: ['./engineers-trash.component.css']
})
export class EngineersTrashComponent implements OnInit {
  ships$: Observable<SpaceShip[]>;

  constructor(private spaceShipService: SpaceShipService) {
    this.ships$ = this.spaceShipService.hangarShips$;
  }

  ngOnInit() {
  }

  onSubmit(ngForm: NgForm) {
    this.spaceShipService.removeShip(+ngForm.value.selectedShip);
    ngForm.reset();

  }

}
