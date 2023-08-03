import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';
import "./Details.css"

const Details = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://chef-recipe-hunter-server-side-shakibul22.vercel.app/chef/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [id]);

  if (!item) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl p-3  ">
        <figure><img src={item.picture} alt="Album" /></figure>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <h5 className=''>{item.description}</h5>
          <h5>Experience: {item.experience} years</h5>
          <h5>Like: {item.likes}</h5>
        </div>
      </div>

    
    </div>
  );
};

export default Details;
