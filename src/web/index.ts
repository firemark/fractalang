import { MainController } from "./controllers/main";
import { Database } from './database';
import { createEmptyProject } from "./models"
import { decodeStaves } from "@/core/shortcuts"

import "@/style/main.scss";


window.addEventListener('load', event => {
    const database = new Database();
    const params = new URLSearchParams(window.location.search);

    if (params.get("z") === "z") {
        const project = createEmptyProject();
        project.staves = decodeStaves(params.entries());

        const title = params.get("t");
        const iterations = params.get("i");
        const firstColor = params.get("c1");
        const secondColor = params.get("c2");
        const backgroundColor = params.get("b");
        const strokeSize = params.get("s");

        if (title !== null) {
            project.id = title;
            project.title = title;
        }
        if (iterations !== null) project.iterations = Number.parseInt(iterations);
        if (firstColor !== null) project.style.firstColor = firstColor;
        if (secondColor !== null) project.style.secondColor = secondColor;
        if (backgroundColor !== null) project.style.backgroundColor = backgroundColor;
        if (strokeSize !== null) project.style.strokeSize = Number.parseInt(strokeSize);

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
