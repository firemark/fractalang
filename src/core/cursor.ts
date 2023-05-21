import { Figure, Line, Rectangle, Triangle, Circle, Arc, Style } from "@/core/figures";
import { Polygon, LineCurve, ArcCurve } from "@/core/figures";

export interface Box {
    min: [number, number];
    max: [number, number];
}

export interface OpsParams {
    color: number,
    stroke: number,
    isFilled: boolean,
}

export enum Shape { Square, Triangle, Circle }

export abstract class ICursor {
    distanceMultipler: number;
    position: [number, number];
    orientation: [number, number];
    reflection: number;
    figures: Figure[];
    box: Box;
    // angle = 0.0 -> 0°
    // angle = 1.0 -> 360°
    angle: number;

    constructor() {
        this.figures = [];
    }

    forward(distance: number) {
        const [x, y] = this.orientation;
        const arg = distance * this.distanceMultipler
        this.position[0] += x * arg;
        this.position[1] += y * arg;
    }

    backward(distance: number) {
        this.forward(-distance);
    }

    right(distance: number) {
        const [x, y] = this.orientation;
        // rotate orientation by 90°
        const arg = distance * this.distanceMultipler * this.reflection;
        this.position[0] -= y * arg;
        this.position[1] += x * arg;
    }

    left(distance: number) {
        this.right(-distance);
    }

    rotate(angle: number) {
        // angle = 0.0 -> 0°
        // angle = 1.0 -> 360°
        const nAngle = angle * this.reflection;
        this.angle = (this.angle + nAngle) % 1.0;
        const radians = nAngle * 2 * Math.PI;
        const sin = Math.sin(radians);
        const cos = Math.cos(radians);
        const [x, y] = this.orientation;
        this.orientation[0] = x * cos - y * sin;
        this.orientation[1] = x * sin + y * cos;
    }

    flip() {
        this.reflection *= -1.0;
    }

    close() { }

    protected extendBox([x, y]: number[], size = 0) {
        this.box.min[0] = Math.min(this.box.min[0], x - size);
        this.box.max[0] = Math.max(this.box.max[0], x + size);
        this.box.min[1] = Math.min(this.box.min[1], y - size);
        this.box.max[1] = Math.max(this.box.max[1], y + size);
    }

    abstract calcStyleParams(ops: OpsParams): Style;
    abstract drawLine(distance: number, stroke: number, color: number): void;
    abstract drawArcLine(ratio: number, size: number, stroke: number, color: number): void;
    abstract drawShape(shape: Shape, size: number, ops: OpsParams): void;
    abstract calcColor(color: number): string;
}

export class Cursor extends ICursor {
    strokeSize: number;
    firstColor: [number, number, number];
    secondColor: [number, number, number];

    constructor({
        strokeSize = 1,
        distanceMultipler = 100,
        firstColor = "#000000",
        secondColor = "#DC143C",
    } = {}) {
        super();
        this.strokeSize = strokeSize;
        this.distanceMultipler = distanceMultipler;
        this.reflection = 1.0;
        this.position = [0.0, 0.0];
        this.angle = 0.0;
        this.orientation = [1.0, 0.0];
        this.box = {
            min: [0.0, 0.0],
            max: [0.0, 0.0],
        };
        this.firstColor = this.hexToColor(firstColor);
        this.secondColor = this.hexToColor(secondColor);
    }

    private hexToColor(hex: string): [number, number, number] {
        const r = parseInt(hex.substring(1, 1 + 2), 16);
        const g = parseInt(hex.substring(3, 3 + 2), 16);
        const b = parseInt(hex.substring(5, 5 + 2), 16);
        return [r, g, b];
    }

    calcStyleParams(ops: OpsParams): Style {
        const color = this.calcColor(ops.color);
        if (ops.isFilled) {
            return { fill: color };
        }
        return { fill: "none", color: color, stroke: ops.stroke * this.strokeSize };
    }

    drawLine(distance: number, stroke: number, color: number) {
        const [old_x, old_y] = this.position;
        this.forward(distance);
        const [new_x, new_y] = this.position;
        const style = this.calcStyleParams({ stroke, color, isFilled: false });
        this.figures.push(new Line([old_x, old_y], [new_x, new_y], style));
        this.extendBox(this.position);
    }

    drawArcLine(ratio: number, size: number, stroke: number, color: number) {
        const arcSize = size / 2 * this.distanceMultipler;
        const arcRadius = arcSize / Math.sin(ratio * Math.PI);
        const [dx, dy] = this.orientation;
        // rotate by 90°
        const ndx = -dy * this.reflection;
        const ndy = dx * this.reflection;
        const [x, y] = this.position;
        const point = [x + arcRadius * ndx, y + arcRadius * ndy];
        const style = this.calcStyleParams({ stroke, color, isFilled: false });
        const ops = {
            shift: this.angle - 0.25,
            close: false,
        };

        this.figures.push(new Arc(point, arcRadius, ratio, ops, style));

        this.rotate(ratio / 2);
        this.forward(size);
        this.rotate(ratio / 2);
        this.extendBox(point, Math.abs(arcRadius));
    }

    drawShape(shape: Shape, size: number, ops: OpsParams) {
        const [x, y] = this.position;
        const [dx, dy] = this.orientation;
        const style = this.calcStyleParams(ops);
        this.extendBox([x, y], Math.abs(size));

        switch (shape) {
            case Shape.Circle:
                this.figures.push(new Circle([x, y], size, style));
                break;
            case Shape.Square:
                this.figures.push(new Rectangle([x, y], [dx, dy], size, size, style));
                break;
            case Shape.Triangle:
                this.figures.push(new Triangle([x, y], [dx, dy], size, style));
                break;
        }
    }

    calcColor(color: number): string {
        const ca = this.firstColor;
        const cb = this.secondColor;
        const aRatio = Math.abs(color - 0.5) * 2;
        const bRatio = 1.0 - aRatio;
        const r = Math.trunc(ca[0] * aRatio + cb[0] * bRatio);
        const g = Math.trunc(ca[1] * aRatio + cb[1] * bRatio);
        const b = Math.trunc(ca[2] * aRatio + cb[2] * bRatio);
        return `rgb(${r}, ${g}, ${b})`;
    }
}

export class CloseCursor extends ICursor {
    #cursor: ICursor;
    #polygon: Polygon;

    constructor(cursor: ICursor, ops: OpsParams) {
        super();
        this.#cursor = cursor;
        this.position = [...cursor.position];
        this.orientation = [...cursor.orientation];
        this.reflection = cursor.reflection;
        this.angle = cursor.angle;
        this.distanceMultipler = cursor.distanceMultipler;
        this.box = this.#cursor.box;
        const style = this.calcStyleParams(ops);
        this.#polygon = new Polygon([...cursor.position], [], style);
    }

    calcStyleParams(ops: OpsParams): Style {
        return this.#cursor.calcStyleParams(ops);
    }

    drawLine(distance: number, stroke: number, color: number) {
        const [old_x, old_y] = this.position;
        this.forward(distance);
        const [new_x, new_y] = this.position;
        const delta: [number, number] = [new_x - old_x, new_y - old_y];
        this.#polygon.curves.push(new LineCurve(delta));
        this.extendBox(this.position);
    }

    drawArcLine(ratio: number, size: number, stroke: number, color: number) {
        const arcSize = size / 2 * this.distanceMultipler;
        const arcRadius = arcSize / Math.sin(ratio * Math.PI);
        const shift = this.angle - 0.25;

        this.#polygon.curves.push(new ArcCurve(arcRadius, ratio, shift));

        const [dx, dy] = this.orientation;
        // rotate by 90°
        const ndx = -dy * this.reflection;
        const ndy = dx * this.reflection;
        const [x, y] = this.position;
        const point = [x + arcRadius * ndx, y + arcRadius * ndy];
        this.extendBox(point, Math.abs(arcRadius));

        this.rotate(ratio / 2);
        this.forward(size);
        this.rotate(ratio / 2);
    }

    drawShape(shape: Shape, size: number, ops: OpsParams) {
        this.#cursor.drawShape(shape, size, ops);
    }

    calcColor(color: number): string {
        return this.#cursor.calcColor(color);
    }

    close() {
        if (this.figures.length > 0) {
            // Cursor is closed. Go away.
            return;
        }
        this.figures.push(this.#polygon);
        this.#cursor.figures = this.#cursor.figures.concat(this.figures);
    }
}
