import "../css/Card.css";
import { Link } from "react-router-dom";

function Card({ creatorData }) {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${creatorData.imageUrl})` }}
    >
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{creatorData.name}</h3>
          <div className="card-icon">
            <Link
              className="card-link"
              to={`/creator/${creatorData.id}`}
              state={{ creatorData }}
            >
              view
            </Link>
            <Link
              className="card-link"
              to={`/edit/${creatorData.id}`}
              state={{ creatorData }}
            >
              edit
            </Link>
          </div>
        </div>
        <div className="card-main">
          <p className="card-description">{creatorData.description}</p>
          <Link className="card-link" to={creatorData.url}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
