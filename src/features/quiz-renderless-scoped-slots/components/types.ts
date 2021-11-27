export interface Score {
    readonly total: number;
    readonly incorrect: number;
    readonly correct: number;
}

export interface Question {
    readonly text: string;
    readonly options: readonly string[];
    readonly answer: number;
}

export interface CurrentQuestion {
    readonly question: Question;
}