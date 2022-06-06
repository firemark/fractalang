import { View } from "./view";
import { createSvg } from "../../svg";
import { Cursor } from "../../cursor";

export class ImageView extends View {

    render(cursor: Cursor) {
        this.clear();
        this.node.appendChild(createSvg(document, cursor));
    }
}
