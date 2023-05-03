import React, { useState } from 'react';

const Banner = () => {
 
    return (
        <div className="carousel w-full h-1/3 ">
        <div id="slide1" className="carousel-item relative w-full h-1/3 ">
          <img src="https://th.bing.com/th/id/R.6a5484ca9c01ee4af5907ae4038d979a?rik=ND8nGa2A4P7DJg&pid=ImgRaw&r=0" className="w-full h-1/3" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
         <a href="#slide4" className="btn btn-circle"></a> 
         <a href="#slide2" className="btn btn-circle"></a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://th.bing.com/th/id/R.79622bef764e45bc4aa4bb9459919937?rik=6N2%2bVGnAKKO%2ffw&pid=ImgRaw&r=0" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
         <a href="#slide1" className="btn btn-circle"></a> 
         <a href="#slide3" className="btn btn-circle"></a>
          </div>
        </div> 
       
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://th.bing.com/th/id/R.38bc4ef912a0736e72e3becab294e9aa?rik=cSDoKoXfecHmiQ&riu=http%3a%2f%2fres.freestockphotos.biz%2fpictures%2f17%2f17317-a-cheeseburger-with-a-white-background-pv.jpg&ehk=OmsJlS%2bv9%2bKBPjxxu2cPwc1xExn6eG2EZn%2bUIfngpS0%3d&risl=&pid=ImgRaw&r=0" className="w-full " />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
         <a href="#slide3" className="btn btn-circle"></a> 
         <a href="#slide1" className="btn btn-circle"></a>
          </div>
        </div>
      </div>
        
       
            
             );
};
export default Banner;



{/* <div className="relative">
<div className="carousel">
    <div className="carousel-item bg-gray-200 rounded-lg overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1598968560207-7dfed5488646" alt="Burger 1" className="w-full h-56 object-cover" />
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Classic Cheeseburger</h2>
            <p className="text-gray-700">A juicy beef patty topped with melted American cheese, lettuce, tomato, and pickles n a sesame seed bun.</p>
            <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Order Now</button>
        </div>
    </div>
    <div className="carousel-item bg-gray-200 rounded-lg overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1593594951320-1b1de5535d6e" alt="Burger 2" className="w-full h-56 object-cover" />
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">BBQ Bacon Cheeseburger</h2>
            <p className="text-gray-700">A flame-grilled beef patty topped with crispy bacon, melted cheddar cheese, BBQ sauce, and onion rings n a brioche bun.</p>
            <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Order Now</button>
        </div>
    </div>
    <div className="carousel-item bg-gray-200 rounded-lg overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1599120079338-7f4336a12804" alt="Burger 3" className="w-full h-56 object-cover" />
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Mushroom Swiss Burger</h2>
            <p className="text-gray-700">A grilled beef patty topped with sautéed mushrooms, melted Swiss cheese, lettuce, and garlic aioli n a ciabatta bun.</p>
            <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Order Now</button>
        </div>
    </div>
</div>
<button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-500 hover:bg-gray-600 text-white rounded-full h-10 w-10 flex justify-center items-center ml-2 transition duration-300 ease-in-out" id="carousel-prev">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
    <span className="sr-only">Previous</span>
</button>
<button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-500 hover:bg-gray-600 text-white rounded-full h-10 w-10 flex justify-center items-center ml-2 transition duration-300 ease-in-out" id="carousel-prev">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
    <span className="sr-only">Next</span>
</button>
</div> */}