import { AppContext } from "../AppContext";
import { useContext, useState } from 'react';

const useContent = (title: string) => {
    const { pages } = useContext(AppContext);
    console.log(pages, 'from context', title);
    const [pageContent] = useState<Page>(pages?.find((page) => page.slug === title) as Page);
    return pageContent;
};

export default useContent;
