type Content = {
    pages: PageContent[] | DocumentData[];
    isLoading: boolean;
};

type Card = {
    title: string,
    content?: string
}

type Section = {
    cards?: Card[];
    columns?: number;
    content?: string | undefined;
    title: string;
};

type Page = {
    title: string;
    intro?: string | undefined;
    sections?: Section[];
    hidden?: boolean;
};

