import { useLocation, useNavigate, Link } from "react-router-dom";
import { deleteCreator } from "../services";
import { AiOutlineInstagram } from "react-icons/ai";

function ViewCreator() {
  const location = useLocation();
  const navigate = useNavigate();
  const { creatorData } = location.state || {};
  if (!creatorData) {
    return <p>No data available</p>;
  }

  const handleDelete = async () => {
    try {
      await deleteCreator(creatorData.id);
      navigate("/");
    } catch (error) {
      console.log(`Error while deleting: ${error}`);
    }
  };
  return (
    <div className="view-container">
      <img src={creatorData.imageUrl} alt={creatorData.name} />
      <div className="view-content">
        <h3>{creatorData.name}</h3>
        <div>{creatorData.description}</div>
        <a className="view-link" href={creatorData.url} target="_blank">
          <span>
            <AiOutlineInstagram size={30} />
          </span>
          <span>visit insta</span>
        </a>

        <div className="btn-container">
          <Link
            to={`/edit/${creatorData.id}`}
            state={{ creatorData }}
            className="link"
          >
            Edit
          </Link>
          <button type="button" className="link" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewCreator;
