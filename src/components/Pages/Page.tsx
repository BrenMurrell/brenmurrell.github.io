import { useLocation } from "react-router-dom";
import useContent from "../../hooks/useContent";
import useHtmlParser from "../../hooks/useHtmlParser";
// import Section from "../Section/Section";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import Section from "../Section/Section";
import useString from "../../hooks/useString";

const Page:React.FC = () => {
    const { pages } = useContext(AppContext);
    const { slug } = useString();
    const [ pageContent, setPageContent ] = useState<Page>({} as Page);

    const path = useLocation().pathname;

    const title = pageContent?.title;
    const intro = pageContent?.intro;
    const sections = pageContent?.sections;

    useEffect(() => {
        setPageContent(pages?.find((page) => page.slug === path));
        // const setPageContent(useContent(path))
    }, [pages]);
    return (
        <section>
            <header>
                <h1>{title ? title : ''}</h1>
                {useHtmlParser({ html: intro ? intro : ''})}
            </header>
            {sections && sections.map((section) => (
                <Section key={slug(section?.title)} {...section}/>
            ))}
        </section>
    );
};

export default Page;