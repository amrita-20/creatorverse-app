import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { deleteCreator, updateCreator } from "../services";

function EditCreator() {
  const location = useLocation();
  const { creatorData } = location.state || {};

  const [creator, setCreator] = useState({
    name: creatorData.name,
    url: creatorData.url,
    description: creatorData.description,
    imageUrl: creatorData.imageUrl,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCreator(creatorData.id, creator);
      navigate("/");
    } catch (error) {
      console.log(`Error while ediitng: ${error}`);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteCreator(creatorData.id);
      navigate("/");
    } catch (error) {
      console.log(`Error while deleting: ${error}`);
    }
  };

  return (
    <form className="add-creator-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        className="input"
        value={creator.name}
        onChange={(e) => setCreator({ ...creator, name: e.target.value })}
        required
      />
      <label htmlFor="name">Image</label>
      <input
        type="text"
        className="input"
        value={creator.imageUrl}
        onChange={(e) => setCreator({ ...creator, imageUrl: e.target.value })}
      />
      <label htmlFor="name">Description</label>
      <input
        type="text"
        className="input"
        value={creator.description}
        onChange={(e) =>
          setCreator({ ...creator, description: e.target.value })
        }
      />
      <label htmlFor="name">Instagram</label>
      <input
        type="text"
        className="input"
        value={creator.url}
        onChange={(e) => setCreator({ ...creator, url: e.target.value })}
        required
      />
      <div className="button-container">
        <button type="submit" className="button">
          Submit
        </button>
        <button type="button" className="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </form>
  );
}

export default EditCreator;
