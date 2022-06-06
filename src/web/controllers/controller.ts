export class Controller {
    protected node: HTMLElement;

    constructor(node: HTMLElement) {
        this.node = node;
    }

    protected findInput(name: string): HTMLInputElement {
        return this.node.querySelector(`[name='${name}']`);
    }

    protected scrapeInput(name: string): string {
        const node = this.findInput(name);
        return this.findInput(name).value;
    }

    protected scrapeInputAsInt(name: string): number {
        const value = this.scrapeInput(name);
        return parseInt(value);
    }

    protected scrapeInputAsFloat(name: string): number {
        const value = this.scrapeInput(name);
        return parseFloat(value);
    }
}
