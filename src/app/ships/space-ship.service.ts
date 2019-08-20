import { StarDestroyerShip } from './../star-destroyer-ship';
import { Injectable } from '@angular/core';
import { SpaceShipFormValues } from '../space-ship-form-values';
import { SpaceShip } from '../space-ship';
import { Observable, timer, BehaviorSubject } from 'rxjs';
import { SpaceShipType } from '../space-ship-type.enum';
import { XWingShip } from '../xwing-ship';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpaceShipService {

  productionTimeMs = 2000;
  hangarShips$ = new BehaviorSubject<SpaceShip[]>([]);

  produceShips(formValues: SpaceShipFormValues): Observable<SpaceShip> {
    const shipClass = formValues.shipType === SpaceShipType.STAR_DESTROYER ? StarDestroyerShip : XWingShip;
    const source$ = timer(this.productionTimeMs, this.productionTimeMs).pipe(
      map(() => new shipClass()),
      take(formValues.shipCount),
      tap((ship) => this.hangarShips$.next([...this.hangarShips$.getValue(), ship]))
    );
    return source$;
  }

  removeShip(index: number) {
    const ships = [...this.hangarShips$.getValue()];
    ships.splice(index, 1);
    this.hangarShips$.next(ships);
  }

  constructor() { }
}
