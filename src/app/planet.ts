export class Planet {
    yPosition: number;
    xPosition: number;
    planetSize = 50;

    constructor (height: number, width: number) {
        this.yPosition = Math.random() * height;
        this.xPosition = Math.random() * width;
    }
}
