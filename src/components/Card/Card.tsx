import './card.css';
import useString from "../../hooks/useString";
import { type Card } from "../../../content";
import useHtmlParser from "@/hooks/useHtmlParser";

const Card: React.FC<Card> = ({ title, content }) => {
    const { slug } = useString();
    const parsedHtml = useHtmlParser({html: content});
    return (
        <div className="card" id={slug(title)}>
            <h3>{title}</h3>
            {parsedHtml}
        </div>
    )
}

export default Card;
