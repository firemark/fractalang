import { View } from "./view";
import { createSvg } from "@/core/svg";
import { Cursor } from "@/core/cursor";

export class ImageView extends View {

    render(cursor: Cursor, backgroundColor: string | null = null) {
        this.clear();
        this.node.style.backgroundColor = backgroundColor ? backgroundColor : "none";
        this.node.appendChild(createSvg(document, cursor));
    }
}
