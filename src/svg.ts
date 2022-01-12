import { Figure, Line } from "./figures";

export function createSvg(document, serializer, figures: Figure[]) {
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "-200 -200 200 200");
    figures.forEach(figure => {
        if (figure instanceof Line) {
            const lineNode = document.createElement("line");
            const [x1, y1] = figure.firstPoint;
            const [x2, y2] = figure.secondPoint;
            lineNode.setAttribute("x1", x1);
            lineNode.setAttribute("y1", y1);
            lineNode.setAttribute("x2", x2);
            lineNode.setAttribute("y2", y2);
            lineNode.setAttribute("stroke", "black");
            svg.appendChild(lineNode);
        }
    });

    return serializer.serializeToString(svg);
}
