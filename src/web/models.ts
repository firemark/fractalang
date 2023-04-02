export interface Stave {
    name: string,
    suffix?: string,
    tokens: string[],
};

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