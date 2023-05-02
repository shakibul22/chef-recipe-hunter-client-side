import React from 'react';

const Details = () => {
    return (
        <div>
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
        </div>
    );
};

export default Details;