import { SpaceShipService } from './space-ship.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EngineersTrashGuard implements CanActivate {

  constructor(private spaceShipService: SpaceShipService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const ships = this.spaceShipService.hangarShips$.getValue();
      if (ships.length === 0) {
        return false;
      } else {
        return true;
      }
  }
}
