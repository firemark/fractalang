export interface Figure {}

export class Line {
    firstPoint: [number, number];
    secondPoint: [number, number];

    constructor(firstPoint, secondPoint) {
        this.firstPoint = firstPoint;
        this.secondPoint = secondPoint;
    }
}

export class Circle {
    point: [number, number];
    radius: number;

    constructor(point, radius) {
        this.point = point;
        this.radius = radius;
    }
}
