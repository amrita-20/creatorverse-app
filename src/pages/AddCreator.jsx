import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { saveCreator } from "../services";

function AddCreator() {
  const [creator, setCreator] = useState({
    name: "",
    url: "",
    description: "",
    imageUrl: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await saveCreator(creator);
      navigate("/");
    } catch (error) {
      console.log(`Failed to save: ${error}`);
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
      <button type="submit" className="button">
        Add Creator
      </button>
    </form>
  );
}

export default AddCreator;
