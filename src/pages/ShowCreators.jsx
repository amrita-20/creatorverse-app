import Card from "../components/Card";
import { useEffect, useState } from "react";
import { fetchCreators } from "../services";

function ShowCreators() {
  const [creators, setCreators] = useState([]);

  const getCreators = async () => {
    const data = await fetchCreators();
    setCreators(data);
  };

  useEffect(() => {
    getCreators();
  }, []);

  return (
    <>
      <section className="show-creators">
        {creators.length === 0 ? (
          <div>No Data to display</div>
        ) : (
          creators.map((creator) => (
            <Card creatorData={creator} key={creator.id} />
          ))
        )}
      </section>
    </>
  );
}

export default ShowCreators;
