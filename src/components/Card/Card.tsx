import './card.css';
import useString from "../../hooks/useString";
import useHtmlParser from "../../hooks/useHtmlParser";


const Card: React.FC<Card> = ({ title, content }) => {
    const { slug } = useString();
    return (
        <div className="card" id={slug(title)}>
            <h3>{title}</h3>
            {useHtmlParser({ html: content})}
        </div>
    )
}

export default Card;
