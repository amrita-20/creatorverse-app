import "../css/Card.css";
import { Link } from "react-router-dom";

function Card({ backgroundImage, name, description, url, id }) {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{name}</h3>
          <div className="card-icon">
            <Link className="card-link" to={`/creator/${id}`}>view
         </Link>
          <Link className="card-link" to={`/edit/${id}`}>
          edit</Link>
          </div>
        </div>
        <div className="card-main">
        <p className="card-description">{description}</p>
        <Link className="card-link" to={url}>
          Learn More
        </Link>
        </div>
       
      </div>
      </div>
  );
}

export default Card;
