import { Stave } from "@/core/stave";
export { Stave } from "@/core/stave";

export interface TokenInfo {
    name: string;
    label: string;
    type: 'action' | 'value';
};

export interface TokenCategory {
    label: string;
    tokens: string[];
};

export interface ProjectStyle {
    firstColor: string,
    secondColor: string,
    backgroundColor: string,
    strokeSize: number,
}

export interface Project {
    title: string,
    staves: Stave[],
    iterations: number,
    style: ProjectStyle,
    created: Date,
    updated: Date,
}

export function createEmptyProject(): Project {
    return {
        title: "NEW" + (new Date()).toDateString,
        created: new Date(),
        updated: new Date(),
        staves: [
            {"name": "F", tokens: []},
        ],
        style: {
            firstColor: "#000000",
            secondColor: "#FF0000",
            backgroundColor: "#FFFFFF",
            strokeSize: 1.0,
        },
        iterations: 3,
    }
}