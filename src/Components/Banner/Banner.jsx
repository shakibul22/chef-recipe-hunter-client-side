import React, { useState } from 'react';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
      {
        id: 1,
        imgUrl: "https://picsum.photos/id/1/600/400",
        caption: "Caption 1",
      },
      {
        id: 2,
        imgUrl: "https://picsum.photos/id/2/600/400",
        caption: "Caption 2",
      },
      {
        id: 3,
        imgUrl: "https://picsum.photos/id/3/600/400",
        caption: "Caption 3",
      },
    ];
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
    };
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    };
    
    return (
        <div className="relative">
      <div className="carousel flex overflow-x-scroll pb-4">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide w-full flex-shrink-0 relative${
              currentSlide === index ? "" : " hidden"
            }`}
          >
            <img src={slide.imgUrl} alt={slide.caption} className="w-full" />
            <div className="slide-caption absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white text-center p-2">
              {slide.caption}
            </div>
          </div>
        ))}
      </div>
      <button
        className="prev-button absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
        onClick={prevSlide}
      >
        Previous
      </button>
      <button
        className="next-button absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
        onClick={nextSlide}
      >
        Next
      </button>
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
            <p className="text-gray-700">A juicy beef patty topped with melted American cheese, lettuce, tomato, and pickles on a sesame seed bun.</p>
            <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Order Now</button>
        </div>
    </div>
    <div className="carousel-item bg-gray-200 rounded-lg overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1593594951320-1b1de5535d6e" alt="Burger 2" className="w-full h-56 object-cover" />
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">BBQ Bacon Cheeseburger</h2>
            <p className="text-gray-700">A flame-grilled beef patty topped with crispy bacon, melted cheddar cheese, BBQ sauce, and onion rings on a brioche bun.</p>
            <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Order Now</button>
        </div>
    </div>
    <div className="carousel-item bg-gray-200 rounded-lg overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1599120079338-7f4336a12804" alt="Burger 3" className="w-full h-56 object-cover" />
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Mushroom Swiss Burger</h2>
            <p className="text-gray-700">A grilled beef patty topped with sautéed mushrooms, melted Swiss cheese, lettuce, and garlic aioli on a ciabatta bun.</p>
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