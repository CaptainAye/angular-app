import { Pilot } from './pilot';
import { SpaceShip } from './space-ship';

export class StarDestroyerShip extends SpaceShip {

    constructor( pilot?: Pilot) {
        super('Star Destroyer', '/assets/star_destroyer.png', true, false, 50);
        this.pilot = pilot || null;
    }
}
