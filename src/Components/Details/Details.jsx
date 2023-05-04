import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();

useEffect(() => {
  fetch(`http://localhost:5000/recipeData/${id}`)
    .then((res) => res.json())
    .then((data) => console.log(data.item));
}, []);

    return (
        <div><div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src="" alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          
        </div>
      </div>
            
        </div>
    );
};

export default Details;
// {
//   data.map(n=>console.log(n))
//   }