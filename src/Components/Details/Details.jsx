import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/chef/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // const foundItem = data.find((item) => item.id === parseInt(id));
        setItem(data);
      });
      console.log("hello");
  }, [id]);
  console.log(item?.recipes);

  if (!item) {
    return <p>Loading...</p>;
  }
    return (
        <div className='my-15 p-5'>
          <div className="card lg:card-side bg-base-100 shadow-xl p-4">
        <figure><img src={item.picture} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <h5 className=''>{item.description}</h5>
          <h5>Experience: {item.experience} years</h5>
          <h5>Like: {item.likes}</h5>
        </div>
      </div>
      <div>
      
      </div>
            
        </div>
    );
};

export default Details;
// {
//   data.map(n=>console.log(n))
//   }