import React, { useContext, useEffect, useState } from 'react';
import "./Home.css";
import { AuthContext } from '../../Providers/AuthProvider';
import Banner from '../Banner/Banner';
import ChefRecipe from '../ChefRecipe/ChefRecipe';
import AppLink from './AppLink';
import Review from './Review';
import { ClipLoader} from 'react-spinners';

const Home = () => {
    const user = useContext(AuthContext);
    const [recipeDatas, setRecipeDatas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); // set loading state to true before fetching data
        setTimeout(() => {
            fetch("https://chef-recipe-hunter-server-side-shakibul22.vercel.app/chef")
                .then((response) => response.json())
                .then((data) => {
                    setRecipeDatas(data);
                    setLoading(false); // set loading state to false after data is fetched
                });
        }, 1000); // simulate a 2-second loading time with setTimeout
    }, []);

    return (
        <div className='home '>
            {
                loading ?
                <div className="text-center mt-16">
                    <ClipLoader color={"#FFA500"} loading={loading}  size={50} />
                </div>
                :
                <div>
                    <Banner></Banner>
                    <div className='text-center '><h2 className='text-4xl mb-12 mx-auto items-center font-extrabold text-orange-300 my-5'>Our Respected Chef</h2></div>
                    <div className='grid grid-cols-1  p-10 md:grid-cols-3  justify-center gap-5 mb-4'>
                        {
                            recipeDatas.map(recipeData => <ChefRecipe recipeData={recipeData} key={recipeData.id}></ChefRecipe>)
                        }
                    </div>
                    <Review></Review>
                    <AppLink></AppLink>
                </div>
            }
        </div>
    );
};

export default Home;
