import { createEmptyProject, Project } from "@/web/models";
import { decodeStaves, encodeStaves } from "@/core/shortcuts";

export function encodeProjectToUrlParams(project: Project): URLSearchParams {
    const params = new URLSearchParams();
    encodeStaves(project.staves)
        .forEach(([name, tokens]) => {
            params.append(name, tokens);
        });

    params.append("z", "z");
    params.append("t", project.title);
    params.append("i", project.iterations.toFixed());
    params.append("c1", project.style.firstColor);
    params.append("c2", project.style.secondColor);
    params.append("b", project.style.backgroundColor);
    params.append("s", project.style.strokeSize.toFixed(2));
    return params;
}

export function decodeProjectFromUrlParams(params: URLSearchParams): Project {
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

    return project;
}