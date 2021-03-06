import { Figure, Line, Rectangle, Triangle, Circle, Arc, Style } from "@/core/figures";

export interface Box {
    min: [number, number];
    max: [number, number];
}

export interface OpsParams {
    color: number,
    stroke: number,
    isFilled: boolean,
}

export class Cursor {
    strokeSize: number;
    distanceMultipler: number;
    position: [number, number];
    orientation: [number, number];
    // angle = 0.0 -> 0°
    // angle = 1.0 -> 360°
    angle: number;
    figures: Figure[];
    box: Box;
    firstColor: [number, number, number];
    secondColor: [number, number, number];

    constructor({
        strokeSize = 1,
        distanceMultipler = 100,
        firstColor = "#000000",
        secondColor = "#DC143C",
    } = {}) {
        this.strokeSize = strokeSize;
        this.distanceMultipler = distanceMultipler;
        this.position = [0.0, 0.0];
        this.angle = 0.0;
        this.orientation = [1.0, 0.0];
        this.figures = [];
        this.box = {
            min: [0.0, 0.0],
            max: [0.0, 0.0],
        };
        this.firstColor = this.hexToColor(firstColor);
        this.secondColor = this.hexToColor(secondColor);
    }

    private hexToColor(hex: string): [number, number, number] {
        const r = parseInt(hex.substr(1, 2), 16);
        const g = parseInt(hex.substr(3, 2), 16);
        const b = parseInt(hex.substr(5, 2), 16);
        return [r, g, b];
    }

    rotate(angle: number) {
        // angle = 0.0 -> 0°
        // angle = 1.0 -> 360°
        this.angle = (this.angle + angle) % 1.0;
        const radians = angle * 2 * Math.PI;
        const sin = Math.sin(radians);
        const cos = Math.cos(radians);
        const [x, y] = this.orientation;
        this.orientation[0] = x * cos - y * sin;
        this.orientation[1] = x * sin + y * cos;
    }

    drawLine(distance: number, stroke: number, color: number) {
        const [old_x, old_y] = this.position;
        this.forward(distance);
        const [new_x, new_y] = this.position;
        const style = {
            stroke: this.strokeSize * stroke,
            color: this.calcColor(color),
        };
        this.figures.push(new Line([old_x, old_y], [new_x, new_y], style));
        this.computeBox(this.position);
    }

    drawArcLine(ratio: number, size: number, stroke: number, color: number) {
        const arcSize = size / 2 * this.distanceMultipler;
        const arcRadius = arcSize / Math.sin(ratio * Math.PI);
        const [dx, dy] = this.orientation;
        // rotate by 90°
        const ndx = -dy;
        const ndy = dx;
        const [x, y] = this.position;
        const point = [x + arcRadius * ndx, y + arcRadius * ndy];
        const style = this.calcStyleParams({stroke, color, isFilled: false});
        const ops = {
            shift: this.angle - 0.25,
            close: false,
        };

        this.figures.push(new Arc(point, arcRadius, ratio, ops, style));

        this.rotate(ratio / 2);
        this.forward(size);
        this.rotate(ratio / 2);
        this.computeBox(point, Math.abs(arcRadius));
    }

    drawCircle(radius: number, ops: OpsParams) {
        const [x, y] = this.position;
        const style = this.calcStyleParams(ops);
        this.figures.push(new Circle([x, y], radius, style));
        this.computeBox([x, y], Math.abs(radius));
    }

    drawSquare(size: number, ops: OpsParams) {
        const [x, y] = this.position;
        const [dx, dy] = this.orientation;
        const style = this.calcStyleParams(ops);
        this.figures.push(new Rectangle([x, y], [dx, dy], size, size, style));
        this.computeBox([x, y], Math.abs(size));
    }

    drawTriangle(size: number, ops: OpsParams) {
        const [x, y] = this.position;
        const [dx, dy] = this.orientation;
        const style = this.calcStyleParams(ops);
        this.figures.push(new Triangle([x, y], [dx, dy], size, style));
        this.computeBox([x, y], Math.abs(size));
    }

    forward(distance: number) {
        const [x, y] = this.orientation;
        this.position[0] += x * distance * this.distanceMultipler;
        this.position[1] += y * distance * this.distanceMultipler;
    }

    backward(distance: number) {
        this.forward(-distance);
    }

    right(distance: number) {
        const [x, y] = this.orientation;
        // rotate orientation by 90°
        this.position[0] -= y * distance * this.distanceMultipler;
        this.position[1] += x * distance * this.distanceMultipler;
    }

    left(distance: number) {
        this.right(-distance);
    }

    addMargin(margin: number) {
        this.box.min[0] -= margin;
        this.box.min[1] -= margin;
        this.box.max[0] += margin;
        this.box.max[1] += margin;
    }

    private computeBox([x, y]: number[], size = 0) {
        this.box.min[0] = Math.min(this.box.min[0], x - size);
        this.box.max[0] = Math.max(this.box.max[0], x + size);
        this.box.min[1] = Math.min(this.box.min[1], y - size);
        this.box.max[1] = Math.max(this.box.max[1], y + size);
    }

    private calcColor(color: number): string {
        const ca = this.firstColor;
        const cb = this.secondColor;
        const aRatio = Math.abs(color - 0.5) * 2;
        const bRatio = 1.0 - aRatio;
        const r = Math.trunc(ca[0] * aRatio + cb[0] * bRatio);
        const g = Math.trunc(ca[1] * aRatio + cb[1] * bRatio);
        const b = Math.trunc(ca[2] * aRatio + cb[2] * bRatio);
        return `rgb(${r}, ${g}, ${b})`;
    }

    private calcStyleParams(ops: OpsParams): Style {
        const color = this.calcColor(ops.color);
        if (ops.isFilled) {
            return { fill: color };
        }
        return { fill: "none", color: color, stroke: ops.stroke };
    }
}
