import { ICursor } from "@/core/cursor";
import { Figure, Circle, Arc, Rectangle, Triangle, Line, Style } from "@/core/figures";
import { Polygon, LineCurve, ArcCurve } from "@/core/figures";

export function createCanvas(document: Document, cursor: ICursor, scale: number = 1.0, margin: number = 10.0) {
    const canvas = document.createElement("canvas");
    let [minX, minY] = cursor.box.min;
    let [maxX, maxY] = cursor.box.max;
    minX = scale * minX - margin;
    minY = scale * minY - margin;
    maxX = scale * maxX + margin;
    maxY = scale * maxY + margin;
    canvas.width = maxX - minX;
    canvas.height = maxY - minY;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    const render = renderFigure.bind(null, ctx, [minX, minY], scale);
    cursor.figures.forEach(render);
    return canvas;
}

const SQRT3H2 = Math.sqrt(3) / 2;
const H2 = 1 / 2;

function trans(p: [number, number], offset: [number, number], scale: number) {
    return [scale * p[0] - offset[0], scale * p[1] - offset[1]];
}

function renderFigure(ctx: CanvasRenderingContext2D, offset: [number, number], scale: number, figure: Figure): void {
    const _trans = (p: [number, number]) => trans(p, offset, scale);
    if (figure instanceof Line) {
        const [x1, y1] = _trans(figure.firstPoint);
        const [x2, y2] = _trans(figure.secondPoint);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        setStroke(figure.style, ctx);
        ctx.closePath();
    } else if (figure instanceof Polygon) {
        const [xs, ys] = _trans(figure.point);

        let x = xs;
        let y = ys;

        ctx.beginPath();
        ctx.moveTo(x, y);
        figure.curves.forEach(curve => {
            if (curve instanceof LineCurve) {
                const [dx, dy] = curve.delta;
                x += scale * dx;
                y += scale * dy;

                ctx.lineTo(x, y);
            } else if (curve instanceof ArcCurve) {
                // Probably broken.
                const r = curve.radius;
                const startAngle = curve.shift * 2 * Math.PI;
                const endAngle = (curve.shift + curve.ratio) * 2 * Math.PI;
                const dx = scale * r * (Math.cos(endAngle) - Math.cos(startAngle));
                const dy = scale * r * (Math.sin(endAngle) - Math.sin(startAngle));
                ctx.arcTo(x, y, x + dx, y + dx, r)
                x += dx;
                y += dy;
            }
        });

        if (figure.close) {
            ctx.lineTo(xs, ys);
        }

        setBasicAttrs(figure.style, ctx);
        ctx.closePath();
    } else if (figure instanceof Circle) {
        const [x, y] = _trans(figure.point);

        ctx.beginPath();
        ctx.arc(x, y, figure.radius, 0, 2 * Math.PI);
        setBasicAttrs(figure.style, ctx);
        ctx.closePath();
    } else if (figure instanceof Arc) {
        const [x, y] = _trans(figure.point);
        const r = scale * figure.radius;
        const shift = r > 0 ? figure.shift : figure.shift - 0.5;
        const ratio = figure.ratio;
        const startAngle = shift * 2 * Math.PI;
        const endAngle = (shift + ratio) * 2 * Math.PI;
        const clockwise = ratio < 0;

        ctx.beginPath();
        ctx.arc(x, y, Math.abs(r), startAngle, endAngle, clockwise);
        setStroke(figure.style, ctx);
        ctx.closePath();
    } else if (figure instanceof Rectangle) {
        const [x, y] = _trans(figure.point);
        const [dx, dy] = figure.orientation;
        const W = scale * figure.width / 2;
        const H = scale * figure.height / 2;

        ctx.beginPath();
        ctx.moveTo(x - W * dx - H * dy, y + H * dx - W * dy);
        ctx.lineTo(x - W * dx + H * dy, y - H * dx - W * dy);
        ctx.lineTo(x + W * dx + H * dy, y - H * dx + W * dy);
        ctx.lineTo(x + W * dx - H * dy, y + H * dx + W * dy);
        setBasicAttrs(figure.style, ctx);
        ctx.closePath();
    } else if (figure instanceof Triangle) {
        const [x, y] = _trans(figure.point);
        const [dx, dy] = figure.orientation;
        const S = scale * figure.size;

        ctx.beginPath();
        ctx.moveTo(x + S * dx, y + S * dy);
        ctx.lineTo(x - SQRT3H2 * S * dy - H2 * S * dx, y - H2 * S * dy + SQRT3H2 * S * dx);
        ctx.lineTo(x + SQRT3H2 * S * dy - H2 * S * dx, y - H2 * S * dy - SQRT3H2 * S * dx);
        setBasicAttrs(figure.style, ctx);
        ctx.closePath();
    }
}

function setBasicAttrs(style: Style, ctx: CanvasRenderingContext2D) {
    setStroke(style, ctx);
    setFill(style, ctx);
}

function setFill(style: Style, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = style.fill || "black";
    ctx.fill();
}

function setStroke(style: Style, ctx: CanvasRenderingContext2D) {
    if (style.stroke !== undefined && style.stroke > 0) {
        ctx.strokeStyle = style.color || "none";
        ctx.lineWidth = style.stroke;
        ctx.stroke();
    }
}