import React, { useContext } from 'react';
import "./Home.css"
import { AuthContext } from '../../Providers/AuthProvider';
import Banner from '../Banner/Banner';

const Home = () => {
    const user=useContext(AuthContext);
    return (
        <div className='home'>
            
              <Banner></Banner>
              {/* <div className="flex justify-center items-center ">
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl">
                        <img className="rounded-full w-48 h-48 object-cover mx-auto mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ohx15TKJy_16WFzrDgzO6vooPvn-dTFK8mSM0leIBENMpICu0a_7tOJtq79unwNP5SE&usqp=CAU" alt="" />
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">{user && <span>{user.displayName}</span> }</h2>
                        <p className="text-center text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna vel libero aliquet elementum. Nam eget elit quis arcu pharetra mollis.</p>
                        <div className="flex justify-around items-center">
                            <p className="text-gray-600"><i className="far fa-heart"></i> 500 Likes</p>
                            <p className="text-gray-600"><i className="fas fa-utensils"></i> 50 Recipes</p>
                            <p className="text-gray-600"><i className="fas fa-clock"></i> 10 Years of Experience</p>
                        </div>
                </div>
            </div> */}
           
        </div>
    );
};

export default Home;