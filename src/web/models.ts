export interface Stave {
    name: string,
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

