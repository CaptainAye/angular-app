import { Pilot } from './pilot';
import { SpaceShip } from './space-ship';

export class XWingShip extends SpaceShip {

    constructor( pilot?: Pilot) {
        super('X-wing', '/assets/X-wing.png', true, true, 85);
        this.pilot = pilot || null;
    }
}
