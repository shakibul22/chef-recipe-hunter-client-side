import React, { useState } from 'react';
import  { Suspense, lazy } from 'react';
const LazyImage = lazy(() => import('./Container'));

const Banner = () => {

    return (
       <div className=''>
     <Suspense fallback={<div>Loading...</div>}>
        <LazyImage />
      </Suspense>

    <div className="carousel w-full h-96 ">

        <div id="slide1" className="carousel-item relative w-full">
            <img src="https://oneriverpoint.com/wp-content/uploads/2016/08/how-to-find-best-private-chefs-miami-1.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle"></a>
                <a href="#slide2" className="btn btn-circle"></a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img src="https://th.bing.com/th/id/R.0e3e29b9e474eb9313e8c231bc1697da?rik=aGqdDCKB7VnbSg&pid=ImgRaw&r=0" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle"></a>
                <a href="#slide3" className="btn btn-circle"></a>
            </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
            <img src="https://th.bing.com/th/id/R.6e0ee678a8d2fef873a67ecfa6b023e6?rik=PT3kDM2c%2b1nx%2bA&pid=ImgRaw&r=0" className="w-full " />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle"></a>
                <a href="#slide1" className="btn btn-circle"></a>
            </div>
        </div>
        
    </div>
       </div>
 
    );
};
export default Banner;



