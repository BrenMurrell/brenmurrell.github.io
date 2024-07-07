interface PageContent {
    title: string;
    slug: string,
    intro?: string | undefined;
    sections?: Section[];
    isHidden?: boolean;
}
