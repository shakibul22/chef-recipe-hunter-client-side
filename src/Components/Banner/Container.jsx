import React from 'react';

const Container = () => {
    return (
        <div className='py-3'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://th.bing.com/th/id/OIP.FqlJn3H8wEDXBRuqVjRC-gHaEo?pid=ImgDet&rs=1")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Our FoodLee</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container;