import { View } from "./view";

export class CommentView extends View {
    private text: string;

    constructor(node: HTMLElement) {
        super(node);
        this.node.classList.add("fract-comment");
    }

    render(comment: string = "") {
        this.node.innerText = comment;
    }
}
