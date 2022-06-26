import { View } from "./view";

export class TitleView extends View {
    private text: string;

    constructor(node: HTMLElement, text: string) {
        super(node);
        this.text = text;
    }

    render() {
        this.node.innerText = this.text;
    }
}
