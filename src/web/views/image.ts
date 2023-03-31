import { View } from "./view";
import { createSvg } from "@/core/svg";
import { ICursor } from "@/core/cursor";

export class ImageView extends View {

    render(cursor: ICursor, backgroundColor: string | null = null) {
        this.clear();
        this.node.style.backgroundColor = backgroundColor ? backgroundColor : "none";
        this.node.appendChild(createSvg(document, cursor));
    }
}
