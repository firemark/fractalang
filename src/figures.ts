export interface Figure {}

export class Line {
    firstPoint: [number, number];
    secondPoint: [number, number];
    stroke: number;
    color: string;

    constructor(firstPoint, secondPoint, {color = "black", stroke = 1} = {}) {
        this.firstPoint = firstPoint;
        this.secondPoint = secondPoint;
        this.stroke = stroke;
        this.color = color;
    }
}

export class Circle {
    point: [number, number];
    radius: number;
    fill: string;
    color: string;
    stroke: number;

    constructor(point, radius, {fill = "black", color = "none", stroke = 0} = {}) {
        this.point = point;
        this.radius = radius;
        this.fill = fill;
        this.stroke = stroke;
        this.color = color;
    }
}

export class Arc {
    point: [number, number];
    radius: number;
    ratio: number;
    fill: string;
    color: string;
    close: boolean;
    shift: number;
    stroke: number;

    constructor(point, radius, ratio, {fill = "black", color = "none", close = false, shift = 0.0, stroke = 0} = {}) {
        this.point = point;
        this.radius = radius;
        this.ratio = ratio;
        this.fill = fill;
        this.close = close;
        this.shift = shift;
        this.stroke = stroke;
        this.color = color;
    }
}

export class Square {
    point: [number, number];
    orientation: [number, number];
    size: number;
    fill: string;
    stroke: number;
    color: string;

    constructor(point, orientation, size, {fill = "black", color = "none", stroke = 0} = {}) {
        this.point = point;
        this.orientation = orientation;
        this.size = size;
        this.fill = fill;
        this.stroke = stroke;
        this.color = color;
    }
}

export class Triangle  {
    point: [number, number];
    orientation: [number, number];
    size: number;
    fill: string;
    stroke: number;
    color: string;

    constructor(point, orientation, size, {fill = "black", color = "none", stroke = 0} = {}) {
        this.point = point;
        this.orientation = orientation;
        this.size = size;
        this.fill = fill;
        this.stroke = stroke;
        this.color = color;
    }
}
