import React from 'react';
import banner from "../../public/banner.png"

function Banner() {
  return (
    <div className="mt-10 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row ">
        {/* left banner */}
        <div className='order-2 md:order-1 mt-12 md:mt-25 w-full md:w-1/2'>
        <div className="space-y-12">
        <h1 className="text-4xl ">
            Hello welcome here to learn something {" "}
            <span className="text-yellow-400">new everyday</span> 
        </h1>
        <p className="text-xl font-semibold">
        Welcome to Book Store, your go-to online bookstore for every reader!  
        Enjoy personalized recommendations, exclusive content, and special discounts. 
        Book Store is where your next great read awaits!
        </p>
{/* //email */}
      <label className="input input-bordered flex items-center gap-2 ">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
        </div>
        {/* button */}
        <button className="btn btn-secondary mt-2" >Get Started</button>
        </div>
        {/* right banner */}
        <div className="order-1 w-full md:w-1/2">
        <img src={banner} className=" mt-10 w-full h-92"/>
        </div>
    </div>
  );
}

export default Banner;