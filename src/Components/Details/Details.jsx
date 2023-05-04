import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recipes from './Recipes';

const Details = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/chef/${id}`)
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
     <div className='my-15 p-5 flex justify-center '>

<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={item.picture} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{item.name}</h2>
    <h5 className=''>{item.description}</h5>
          <h5>Experience: {item.experience} years</h5>
          <h5>Like: {item.likes}</h5>
  </div>
</div>
      

    </div>
      <div className='grid grid-cols-1  p-10 md:grid-cols-3  justify-center gap-5 mb-4'>
      {
     
      item?.recipes?.map(recipe=><Recipes recipe={recipe} key={recipe.ingredients}></Recipes>)
      }

      </div>
   </div>
  );
};

export default Details;
