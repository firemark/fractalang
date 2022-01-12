import { Figure, Line } from "./figures";

export class Cursor {
    position: [number, number];
    orientation: [number, number];
    figures: Figure[];

    constructor() {
        this.position = [0.0, 0.0];
        this.orientation = [0.0, 1.0];
        this.figures = [];
    }

    rotate(angle: number) {
        // angle = 0.0 -> 0°
        // angle = 1.0 -> 360°
        const radians = angle * 2 * Math.PI;
        const sin = Math.sin(radians);
        const cos = Math.cos(radians);
        const [x, y] = this.orientation;
        this.orientation[0] = x * cos - y * sin;
        this.orientation[1] = x * cos + y * sin;
    }

    drawLine(distance: number) {
        const [old_x, old_y] = this.position;
        this.forward(distance);
        const [new_x, new_y] = this.position;
        const line = new Line([old_x, old_y], [new_x, new_y]);
        this.figures.push(line);
    }

    forward(distance: number) {
        const [x, y] = this.orientation;
        this.position[0] += x * distance;
        this.position[1] += y * distance;
    }
}
