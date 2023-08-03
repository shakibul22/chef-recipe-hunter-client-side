import React from 'react';

const Review = () => {
    return (
        <div>
            <div className='text-center'><h2 className='text-2xl mb-3 mx-auto items-center font-bold text-blue-500 my-5'>Our Previous Review</h2>
            <div className="rating mx-auto items-center">
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
            </div>
            </div>
            <div className='flex flex-col md:flex-row px-2 gap-2'>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center">
                        <img
                            className="h-12 w-12 rounded-full mr-4"
                            src="https://th.bing.com/th/id/R.1e421b84ef27a47cbfd13d9537d7d37b?rik=5HacnClWK%2bURSg&pid=ImgRaw&r=0"
                            alt="Reviewer avatar"
                        />
                        <div>
                            <p className="font-bold text-lg">John Doe</p>
                            <p className="text-gray-500 text-sm">2 days ago</p>
                        </div>
                    </div>
                    <p className="mt-4 text-gray-700 text-base">
                        This fastfood dish  perfectly cooked shrimp served over a bed of creamy risotto. I would highly recommend it to anyone who loves fastfood.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center">
                        <img
                            className="h-12 w-12 rounded-full mr-4"
                            src="https://th.bing.com/th/id/OIP.d88arD-ISOtmUhNlemKHkgHaKh?pid=ImgDet&w=800&h=1136&rs=1"
                            alt="Reviewer avatar"
                        />
                        <div>
                            <p className="font-bold text-lg">Shakib</p>
                            <p className="text-gray-500 text-sm">10 seconds ago</p>
                        </div>
                    </div>
                    <p className="mt-4 text-gray-700 text-base">
                        The Food Was undoubtedly delious and healthy.Everybody can take their food.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Review;