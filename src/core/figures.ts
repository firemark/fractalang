export interface Figure {}

export interface LineStyle {
    color?: string;
    stroke?: number;
}

export class Style {
    color?: string;
    stroke?: number;
    fill?: string;
}

export class Line {
    firstPoint: [number, number];
    secondPoint: [number, number];
    style: LineStyle;

    constructor(firstPoint, secondPoint, style: LineStyle = {}) {
        this.firstPoint = firstPoint;
        this.secondPoint = secondPoint;
        this.style = style;
    }
}

export abstract class Curve {}

export class LineCurve implements Curve {
    delta: [number, number];

    constructor(delta: [number, number]) {
        this.delta = delta;
    }
}

export class ArcCurve implements Curve {
    radius: number;
    ratio: number;
    shift: number;

    constructor(radius: number, ratio: number, shift: number) {
        this.radius = radius;
        this.ratio = ratio;
        this.shift = shift;
    }
}

export class Polygon implements Figure {
    point: [number, number];
    curves: Curve[];
    close: boolean;
    style: Style;

    constructor(point: [number, number], curves: Curve[], style: Style = {}) {
        this.point = point;
        this.curves = curves;
        this.style = style;
        this.close = true;
    }
}

export class Circle implements Figure {
    point: [number, number];
    radius: number;
    style: Style;

    constructor(point, radius, style: Style = {}) {
        this.point = point;
        this.radius = radius;
        this.style = style;
    }
}

export class Arc implements Figure {
    point: [number, number];
    radius: number;
    ratio: number;
    close: boolean;
    shift: number;
    style: Style;

    constructor(point, radius, ratio, { shift = 0.0, close = false } = {}, style: Style = {}) {
        this.point = point;
        this.radius = radius;
        this.ratio = ratio;
        this.shift = shift;
        this.close = close;
        this.style = style;
    }
}

export class Rectangle implements Figure {
    point: [number, number];
    orientation: [number, number];
    width: number;
    height: number;
    style: Style;

    constructor(point, orientation, width, height, style: Style = {}) {
        this.point = point;
        this.orientation = orientation;
        this.width = width;
        this.height = height;
        this.style = style;
    }
}

export class Triangle implements Figure {
    point: [number, number];
    orientation: [number, number];
    size: number;
    style: Style;

    constructor(point, orientation, size, style: Style = {}) {
        this.point = point;
        this.orientation = orientation;
        this.size = size;
        this.style = style;
    }
}
