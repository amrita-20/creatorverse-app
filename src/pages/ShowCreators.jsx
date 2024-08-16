import Card from "../components/Card";
import { useEffect, useState } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";

function ShowCreators () {
    const [creators, setCreators] = useState([]);

    const fetchCreators = async () => {
        const {data, error} = await supabase.from('creators').select('*');
        setCreators(data);
        if(error){
            console.log(error)
        }
    }

    useEffect (() => {
        fetchCreators();
    }, [])
    return (
        <>
        <h1>Creators</h1>
        <Link to="/add">Add New Creator</Link>
        <section className="show-creators">
            {creators.map(creator => (
                 <Card 
                 backgroundImage={creator.imageUrl} url={creator.url} name={creator.name} description={creator.description} key={creator.id} id={creator.id}
             />
            ))}
        </section>
        </>
    )
}

export default ShowCreators;