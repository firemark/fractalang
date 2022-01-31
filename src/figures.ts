export interface Figure {}

export class Line {
    firstPoint: [number, number];
    secondPoint: [number, number];
    stroke: number;

    constructor(firstPoint, secondPoint, stroke = 1) {
        this.firstPoint = firstPoint;
        this.secondPoint = secondPoint;
        this.stroke = stroke;
    }
}

export class Circle {
    point: [number, number];
    radius: number;
    fill: string;
    stroke: number;

    constructor(point, radius, {fill = "black", stroke = 0} = {}) {
        this.point = point;
        this.radius = radius;
        this.fill = fill;
        this.stroke = stroke;
    }
}

export class Arc {
    point: [number, number];
    radius: number;
    ratio: number;
    fill: string;
    close: boolean;
    shift: number;
    stroke: number;

    constructor(point, radius, ratio, {fill = "black", close = false, shift = 0.0, stroke = 0} = {}) {
        this.point = point;
        this.radius = radius;
        this.ratio = ratio;
        this.fill = fill;
        this.close = close;
        this.shift = shift;
        this.stroke = stroke;
    }
}

export class Square {
    point: [number, number];
    orientation: [number, number];
    size: number;
    fill: string;
    stroke: number;

    constructor(point, orientation, size, {fill = "black", stroke = 0} = {}) {
        this.point = point;
        this.orientation = orientation;
        this.size = size;
        this.fill = fill;
        this.stroke = 1;
    }
}

export class Triangle  {
    point: [number, number];
    orientation: [number, number];
    size: number;
    fill: string;
    stroke: number;

    constructor(point, orientation, size, {fill = "black", stroke = 0} = {}) {
        this.point = point;
        this.orientation = orientation;
        this.size = size;
        this.fill = fill;
        this.stroke = 1;
    }
}
