export type LanguageData = {
    name: string;
    frameworks?: string[];
    usage?: string[];
    devType?: string[];
    advantage?: string[];
    disavantage?: string[];
}

export type FrameworkData = {
    name: string;
    languages?:  string[];
    usage?: string[];
    devType?: string[];
    advantage?: string[];
    disavantage?: string[];
}

export type StackData = {
    name: string;
    tools: string[];
    type:  string;
    advantage: string[];
}
