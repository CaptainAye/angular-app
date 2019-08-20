import { Pilot } from './pilot';
export abstract class SpaceShip {
    modelName: String;
    imageUrl: String;
    health: Number;
    activeShields: Boolean;
    activeWeapons: Boolean;
    pilot: Pilot;

    constructor(modelName: String, imageUrl: String, activeShields: Boolean, activeWeapons: Boolean, health: Number) {
        this.modelName = modelName;
        this.imageUrl = imageUrl;
        this.activeShields = activeShields;
        this.activeWeapons = activeWeapons;
        this.health = health;
    }
}
