import React from "react";


function Card ({item}){
    // console.log(item);
    return (
        <>
    <div className="mt-4 my-3 p-3">

    <div className="card w-92 bg-base-100 dark:bg-slate-900 dark:text-white dark:border shadow-2xl hover:shadow-2xl hover:scale-105 duration-200 ">
  <figure>
    <img
      src={"https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1723939200&semt=ais_hybrid"}
      alt="" className=""/>
  </figure>
  <div className="card-body p-2">
    <h2 className="card-title ">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline  bg-pink-600 text-white duration-200  p-5">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 cursor-pointer p-5">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
    )

    
}


export default Card;