export interface Figure {}

export class Line {
    firstPoint: [number, number];
    secondPoint: [number, number];

    constructor(firstPoint, secondPoint) {
        this.firstPoint = firstPoint;
        this.secondPoint = secondPoint;
    }
}
