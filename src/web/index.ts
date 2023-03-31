import { MainController } from "./controllers/main";

import "@/style/main.scss";

const controller = new MainController();

window.addEventListener('load', event => {
    const staves = [
        {name: "F", tokens: ["DRAW_TRIANGLE", "COUNT_3", "DRAW_LINE", "ARGUMENT", "ROTATE_LEFT", "ANGLE_30", "CLOSE_CALL_G", "FRACT_1_5", "ARGUMENT", "CALL_F", "ARGUMENT"]},
        {name: "F", suffix: "END", tokens: ["MOVE_LEFT", "FRACT_1_2", "DRAW_CIRCLE", "COUNT_5", "COUNT_2"]},
        {name: "G", tokens: ["DRAW_LINE", "ARGUMENT", "ROTATE_LEFT", "ANGLE_90", "DRAW_LINE", "ARGUMENT", "ROTATE_LEFT", "ANGLE_90", "DRAW_LINE", "ARGUMENT"]}
        // {name: "G", tokens: ["DRAW_ARCLINE_L_1_2", "ARGUMENT", "DRAW_ARCLINE_L_1_2", "ARGUMENT"]}
    ];
    controller.render(staves);
});
