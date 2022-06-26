import { DocsController, TutAnimParams } from "./controllers/docs";

let ICONS_URL_PREFIX = "";

import "../style/docs.scss";

const ANIMATIONS_PARAMS: TutAnimParams[] = [];
const CURRENT_HREF = (document.currentScript as HTMLScriptElement).src;

export function makeAnimation(params: TutAnimParams) {
    ANIMATIONS_PARAMS.push(params);
}

function setIconsUrls() {
    const dirnameHref = CURRENT_HREF.substring(0, CURRENT_HREF.lastIndexOf('/') + 1);
    ICONS_URL_PREFIX = `${dirnameHref}../_images`;
}

function renderAll() {
    ANIMATIONS_PARAMS.forEach(params => {
        const controller = new DocsController(params);
        controller.render(params);
        controller.iterateToPosition(params);
    });
}

window.addEventListener('load', event => {
    setIconsUrls();
    renderAll();
});
