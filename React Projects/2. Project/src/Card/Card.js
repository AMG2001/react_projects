export default function Card({title,description,imagePath}){
    return (
        <li className="concept">
        <img src={imagePath} alt="TODO: TITLE" />
        <h2>{title}</h2>
        <p>{description}</p>
        </li>
    );
}