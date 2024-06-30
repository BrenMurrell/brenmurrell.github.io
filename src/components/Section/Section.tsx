import useHtmlParser from "../../hooks/useHtmlParser";
import Card from "../Card/Card";
// import { type Section } from "../../../content";
import useString from "../../hooks/useString";

const Section: React.FC<Section> = ({ title, content, cards, columns = 1 }) => {
    const { slug } = useString();
    const introHtml = useHtmlParser({ html: content });
    return (
        <section key={slug(title)}>
            <header>
                <h2>{title}</h2>
                {introHtml}
            </header>
            <div className={`cards cards--col-${columns}`}>
                {cards && cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </section>
    );
};

export default Section;