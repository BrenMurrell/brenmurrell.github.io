import { AppContext } from "@/AppContext";
import { useContext, useState } from 'react';
import { Page } from "../../content";

const useContent = (title: string) => {
    const { pages } = useContext(AppContext);
    const [pageContent] = useState<Page>(pages?.find((page) => page.title === title) as Page);


    return pageContent;
};

export default useContent;