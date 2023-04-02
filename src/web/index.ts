import { MainController } from "./controllers/main";
import { Database } from './database';
import { createEmptyProject } from "./models"

import "@/style/main.scss";


window.addEventListener('load', event => {
    const database = new Database();
    database.get("__temp__", project => {
        const controller = new MainController(database, project || createEmptyProject());
        controller.render();
    }, () => {
        const controller = new MainController(database, createEmptyProject());
        controller.render();
    })
});
