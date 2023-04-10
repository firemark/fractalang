import { MainController } from "./controllers/main";
import { Database } from './database';
import { createEmptyProject } from "./models"

import "@/style/main.scss";
import { decodeProjectFromUrlParams } from "./urlParams";


window.addEventListener('load', event => {
    const database = new Database();
    const params = new URLSearchParams(window.location.search);

    if (params.get("z") === "z") {
        const project = decodeProjectFromUrlParams(params);
        const controller = new MainController(database, project);
        controller.render();

        window.history.replaceState({}, document.title, window.location.pathname);
    } else {
        database.get("__temp__", project => {
            const controller = new MainController(database, project || createEmptyProject());
            controller.render();
        }, () => {
            const controller = new MainController(database, createEmptyProject());
            controller.render();
        });
    }
});
