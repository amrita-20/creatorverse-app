import { useEffect, useState } from "react";
import { supabase  } from "../client";
import { useNavigate } from "react-router-dom";

function AddCreator () {
    const [creator, setCreator ] = useState({ name: '', url: '', description: '', imageUrl: ''});

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await supabase.from('creators').insert([creator]);
        navigate('/');
    }
    return (
        <form className="add-creator-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" className="input" value={creator.name} onChange={e => setCreator({...creator, name: e.target.value})} required/>
            <label htmlFor="name">Image</label>
            <input type="text" className="input" value={creator.imageUrl} onChange={e => setCreator({...creator, imageUrl: e.target.value})} required />
            <label htmlFor="name">Description</label>
            <input type="text" className="input" value={creator.description} onChange={e => setCreator({...creator, description: e.target.value})} required />
            <label htmlFor="name">Instagram</label>
            <input type="text" className="input" value={creator.url} onChange={e => setCreator({...creator, url: e.target.value})} required />
            <button type="submit">Add Creator</button>
        </form>
    )
}

export default AddCreator;