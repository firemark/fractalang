import { View } from "./view";
import { createSvg } from "@/core/renderers/svg";
import { createCanvas } from "@/core/renderers/canvas";
import { ICursor } from "@/core/cursor";

export class ImageView extends View {

    render(cursor: ICursor, { backgroundColor = "none", engine = "svg", scale = 1.0, margin = 10 } = {}) {
        this.clear();
        const style = this.node.style;
        switch (engine) {
            case "svg":
                this.node.appendChild(createSvg(document, cursor));
                break;
            case "canvas":
                const canvas = createCanvas(document, cursor, scale, margin);
                style.backgroundImage = `url("${canvas.toDataURL()}")`;
                style.backgroundRepeat = "repeat";
                break;
        }
        style.backgroundColor = backgroundColor;
    }
}
