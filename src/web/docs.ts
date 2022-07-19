import { DocsController, TutAnimParams } from "./controllers/docs";

import "@/style/docs.scss";

const ANIMATIONS_PARAMS: TutAnimParams[] = [];
const CURRENT_HREF = (document.currentScript as HTMLScriptElement).src;

export function makeAnimation(params: TutAnimParams) {
    ANIMATIONS_PARAMS.push(params);
}

function getIconsUrls(): string {
    const dirnameHref = CURRENT_HREF.substring(0, CURRENT_HREF.lastIndexOf('/') + 1);
    return `${dirnameHref}../_images`;
}

function renderAll(iconUrl: string) {
    ANIMATIONS_PARAMS.forEach(params => {
        const controller = new DocsController(params, iconUrl);
        controller.render(params);
        controller.iterateToPosition(params);
    });
}

window.addEventListener('load', event => {
    const iconUrl = getIconsUrls();
    renderAll(iconUrl);
});
