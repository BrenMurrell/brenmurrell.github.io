interface PageContent extends DocCont {
    title: string;
    slug: string,
    intro?: string | undefined;
    sections?: Section[];
    hidden?: boolean;
};