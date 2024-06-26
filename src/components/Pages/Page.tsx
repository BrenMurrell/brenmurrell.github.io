import useContent from "../../hooks/useContent";
import { type Page } from "../../../content";
import useHtmlParser from "../../hooks/useHtmlParser";
import Section from "../Section/Section";

type PageProps = {
    searchString: string;
}

const Page:React.FC<PageProps> = ({ searchString }) => {
    const pageContent = useContent(searchString);
    const { title, intro, sections } = pageContent;
    
    return (
        <section>
            <header>
                <h1>{title}</h1>
                {useHtmlParser({ html: intro})}
            </header>
            {sections && sections.map((section, index) => (
                <Section key={index} {...section}/>
            ))}
        </section>
    );
};

export default Page;