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

export class Circle {
    point: [number, number];
    radius: number;
    style: Style;

    constructor(point, radius, style: Style = {}) {
        this.point = point;
        this.radius = radius;
        this.style = style;
    }
}

export class Arc {
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

export class Rectangle {
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

export class Triangle {
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
