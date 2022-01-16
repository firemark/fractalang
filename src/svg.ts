import { Cursor } from "./cursor";
import { Figure, Circle, Arc, Square, Line } from "./figures";

const NAMESPACE = "http://www.w3.org/2000/svg";

export function createSvg(document, cursor: Cursor) {
    const svg = document.createElementNS(NAMESPACE, "svg");
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
    return svg;
}

function toSvg(document, figure: Figure) {
    if (figure instanceof Line) {
        const node = document.createElementNS(NAMESPACE, "line");
        const [x1, y1] = figure.firstPoint;
        const [x2, y2] = figure.secondPoint;
        node.setAttribute("x1", x1);
        node.setAttribute("y1", y1);
        node.setAttribute("x2", x2);
        node.setAttribute("y2", y2);
        node.setAttribute("stroke", "black");
        node.setAttribute("stroke-width", figure.stroke);
        return node;
    } else if (figure instanceof Circle) {
        const node = document.createElementNS(NAMESPACE, "circle");
        const [x, y] = figure.point;
        node.setAttribute("cx", x);
        node.setAttribute("cy", y);
        node.setAttribute("r", figure.radius);
        setBasicAttrs(figure, node);
        return node;
    } else if (figure instanceof Arc) {
        const node = document.createElementNS(NAMESPACE, "path");
        const [x, y] = figure.point;
        const r = figure.radius;
        const startAngle = figure.shift * 2 * Math.PI;
        const endAngle = (figure.shift + figure.ratio) * 2 * Math.PI;
        const start_x = x + r * Math.cos(startAngle);
        const start_y = y + r * Math.sin(startAngle);
        const end_x = x + r * Math.cos(endAngle);
        const end_y = y + r * Math.sin(endAngle);
        const flag1 = Math.abs(figure.ratio) <= 0.5 ? "0" : "1";
        const flag2 = figure.ratio <= 0.0 ? "0" : "1";
        let path = `M ${start_x} ${start_y}`;
        path += ` A ${r} ${r} 0 ${flag1} ${flag2} ${end_x} ${end_y}`;
        if (figure.close) {
            path += `L ${x} ${y} Z`;
        }
        node.setAttribute("d", path);
        setBasicAttrs(figure, node);
        return node;
    } else if (figure instanceof Square) {
        const node = document.createElementNS(NAMESPACE, "rect");
        const [x, y] = figure.point;
        const size = figure.size;
        const half_size = size * 0.5;
        node.setAttribute("x", x - half_size);
        node.setAttribute("y", y - half_size);
        node.setAttribute("width", size);
        node.setAttribute("height", size);
        setBasicAttrs(figure, node);
        return node;
    }
    return null;
}

function setBasicAttrs(figure, node) {
    let style = `fill: ${figure.fill};`;
    if (figure.stroke > 0) {
        style += `stroke-width: ${figure.stroke};`
        style += `stroke: black`;
    }
    node.setAttribute("style", style);
}
