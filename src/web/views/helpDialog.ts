import { View } from "./view";

export class HelpDialogView extends View<HTMLDialogElement> {

    constructor() {
        super(document.getElementById("help-dialog") as HTMLDialogElement);
    }

    render() {
        const button = this.node.querySelector("button");
        button.onclick = (e) => {
            e.preventDefault();
            this.node.close();
        }
        this.node.showModal();
    }
}
