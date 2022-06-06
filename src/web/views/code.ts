import { View } from './view';
import { StaveView } from './stave';

import { Stave } from '../models';
import { DEFAULT_ICON_URL } from '../consts';

export class CodeView extends View {
    private iconUrl: string;
    private staveViews: StaveView[];
    private onChange: () => void;

    constructor({node, onChange, iconUrl = DEFAULT_ICON_URL}: {
        node: HTMLElement,
        onChange: () => void,
        iconUrl?: string,
    }) {
        super(node);
        this.iconUrl = iconUrl;
        this.staveViews = [];
        this.onChange = onChange;
    }

    render(staves: Stave[]) {
        this.clear();
        this.staveViews = staves.map(this.createStave.bind(this));
    }

    findStave(name: string, suffix: string) {
        return this.staveViews.find(view => view.checkName(name, suffix));
    }

    addStave(params: { name: string; suffix: string; tokens: string[] }) {
        const staveName = `${params.name}::${params.suffix}`;
        const view = this.createStave({name: staveName, tokens: params.tokens});
        this.staveViews.push(view);
    }

    scrapeCode(): Stave[] {
        return this.staveViews.filter(view => view.couldBeScraped()).map(view => view.scrape());
    }

    protected createStave({ name: staveName, tokens }): StaveView {
        const node = document.createElement("li");
        const [name, suffix] = staveName.split("::", 2);
        this.node.appendChild(node);

        const view = new StaveView({node, iconUrl: this.iconUrl, onChange: this.onChange});
        view.render({name, suffix, tokens});
        return view;
    }
}
