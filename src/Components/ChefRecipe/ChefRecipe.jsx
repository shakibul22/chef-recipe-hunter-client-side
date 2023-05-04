import React, { useState } from 'react';
import { useEffect } from 'react';
import {  AcademicCapIcon, HandThumbUpIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const ChefRecipe = ({recipeData}) => {
 const {id,name,description,experience,picture,likes}=recipeData;
  
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
              <button>Details</button>
            </Link>
                    </div>
                </div>
     
        </div>
    );
};

export default ChefRecipe;



       {/* <h1>Our Services</h1>
      <div className="services">
        {servicesData[0]?.services?.map((service) => (
          <div key={service?.id} className="service-card">
            <h2>{service?.name}</h2>
            <p>{service?.description}</p>
            <ul>
              {service?.items?.map((item) => (
                <li key={item?.id}>
                  {item?.name} - ${item?.price}
                </li>
              ))}
            </ul>
            <p>Price: ${service?.price}</p>
            <p>Duration: {service?.duration}</p>
            <Link to={`/services/${service?.id}`}>
              <button>Details</button>
            </Link>
          </div>
        ))}
      </div> */}