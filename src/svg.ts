import { Cursor } from "./cursor";
import { Figure, Circle, Line } from "./figures";

export function createSvg(document, serializer, cursor: Cursor) {
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    const [min_x, min_y] = cursor.box.min;
    const [max_x, max_y] = cursor.box.max;
    const width = max_x - min_x;
    const height = max_y - min_y;
    svg.setAttribute("viewBox", `${min_x} ${min_y} ${width} ${height}`);
    cursor.figures.forEach(figure => {
        const node = toSvg(document, figure);
        if (node) {
            svg.appendChild(node);
        }
    });

    return serializer.serializeToString(svg);
}

function toSvg(document, figure: Figure) {
    if (figure instanceof Line) {
        const node = document.createElement("line");
        const [x1, y1] = figure.firstPoint;
        const [x2, y2] = figure.secondPoint;
        node.setAttribute("x1", x1);
        node.setAttribute("y1", y1);
        node.setAttribute("x2", x2);
        node.setAttribute("y2", y2);
        node.setAttribute("stroke", "black");
        return node;
    } else if (figure instanceof Circle) {
        const node = document.createElement("circle");
        const [x, y] = figure.point;
        node.setAttribute("cx", x);
        node.setAttribute("cy", y);
        node.setAttribute("r", figure.radius);
        node.setAttribute("fill", "black");
        return node;
    }
    return null;
}
