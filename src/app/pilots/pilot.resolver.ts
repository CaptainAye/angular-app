import { PilotService } from './pilot.service';
import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Pilot } from '../pilot';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PilotResolver implements Resolve<Pilot> {

    constructor(private pilotService: PilotService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return route.params.id != null ? this.pilotService.getPilot(route.params.id) :
        of(new Pilot());
    }
}
