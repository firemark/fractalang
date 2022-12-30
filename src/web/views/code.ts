import { View } from './view';
import { StaveView } from './stave';

import { Stave } from '@/web/models';
import { DEFAULT_ICON_URL } from '@/web/consts';

export class CodeView extends View {
    private iconUrl: string;
    private staveViews: StaveView[];
    private onDrop: (d: HTMLElement, o: HTMLElement) => void | null;

    constructor({node, onDrop = null, iconUrl = DEFAULT_ICON_URL}: {
        node: HTMLElement,
        onDrop?: (d: HTMLElement, o: HTMLElement) => void,
        iconUrl?: string,
    }) {
        super(node);
        this.iconUrl = iconUrl;
        this.staveViews = [];
        this.onDrop = onDrop;
    }

    render(staves: Stave[]) {
        this.clear();
        this.staveViews = staves.map(this.createStave.bind(this));
    }

    findStave(name: string, suffix: string): StaveView | undefined {
        return this.staveViews.find(view => view.checkName(name, suffix));
    }

    addStave(params: { name: string; suffix: string; tokens: string[] }) {
        const view = this.createStave({
            name: params.name,
            suffix: params.suffix,
            tokens: params.tokens,
        });
        this.staveViews.push(view);
    }

    scrapeCode(): Stave[] {
        return this.staveViews.filter(view => view.couldBeScraped()).map(view => view.scrape());
    }

    protected createStave({ name, suffix, tokens }): StaveView {
        const node = document.createElement("li");
        this.node.appendChild(node);

        const view = new StaveView({
            node,
            name,
            suffix: suffix || "",
            iconUrl: this.iconUrl,
            findStaveDelegator: this.findStave.bind(this),
            onDrop: this.onDrop,
            tokens,
        });
        view.render();
        return view;
    }

}
