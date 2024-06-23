
export type Card = {
    title: string,
    content?: string
}


export type Section = {
    cards?: Card[];
    columns?: number;
    content?: string | undefined;
    title: string;
};


export type Page = {
    title: string;
    intro?: string | undefined;
    sections?: Section[];
    hidden?: boolean;
};

export type Content = {
    pages?: Page[];
};

