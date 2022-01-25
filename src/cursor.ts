import { Figure, Line, Circle } from "./figures";

export interface Box {
    min: [number, number];
    max: [number, number];
}

export class Cursor {
    position: [number, number];
    orientation: [number, number];
    figures: Figure[];
    box: Box;

    constructor() {
        this.position = [0.0, 0.0];
        this.orientation = [1.0, 0.0];
        this.figures = [];
        this.box = {
            min: [0.0, 0.0],
            max: [0.0, 0.0],
        };
    }

    rotate(angle: number) {
        // angle = 0.0 -> 0°
        // angle = 1.0 -> 360°
        const radians = angle * 2 * Math.PI;
        const sin = Math.sin(radians);
        const cos = Math.cos(radians);
        const [x, y] = this.orientation;
        this.orientation[0] = x * cos - y * sin;
        this.orientation[1] = x * sin + y * cos;
    }

    drawLine(distance: number) {
        const [old_x, old_y] = this.position;
        this.forward(distance);
        const [new_x, new_y] = this.position;
        this.figures.push(new Line(
            [old_x, old_y],
            [new_x, new_y],
        ));
    }

    drawCircle(radius: number) {
        const [x, y] = this.position;
        this.figures.push(new Circle([x, y], radius));
    }

    forward(distance: number) {
        const [x, y] = this.orientation;
        this.position[0] += x * distance * 100;
        this.position[1] += y * distance * 100;
        this.computeBox();
    }

    addMargin(margin: number) {
        this.box.min[0] -= margin;
        this.box.min[1] -= margin;
        this.box.max[0] += margin;
        this.box.max[1] += margin;
    }

    private computeBox() {
        const [x, y] = this.position;
        this.box.min[0] = Math.min(this.box.min[0], x);
        this.box.max[0] = Math.max(this.box.max[0], x);
        this.box.min[1] = Math.min(this.box.min[1], y);
        this.box.max[1] = Math.max(this.box.max[1], y);
    }
}
