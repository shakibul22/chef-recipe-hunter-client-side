import React, { useState } from 'react';
import { useEffect } from 'react';
import { AcademicCapIcon, HandThumbUpIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const ChefRecipe = ({ recipeData }) => {
  const { id, name, description, experience, picture, likes } = recipeData;

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={picture} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="flex justify-around items-center">
            <p ><HandThumbUpIcon className="h-6 w-6 text-blue-500" />{likes}</p>
            <p ><AcademicCapIcon className="h-6 w-6 text-blue-500" />{experience}</p>

          </div>
          <Link to={`/recipeData/${recipeData?.id}`}>
            <button className='btn btn-info'>View Recipe</button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default ChefRecipe;



