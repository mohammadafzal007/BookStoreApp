import React from 'react';
// import books from "../../public/books.json"
import Card from './Card';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from "axios";
function Course() {
  const [book, setBook ] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
          const res=await axios.get("http://localhost:4001/book");
          console.log(res.data);
          setBook(res.data)
      }
      catch (error) {
console.log("Error : ",error)
      }
    }
getBook();
  },[])
  
  return (
    <div className="max-w-screeen-2xl container mx-auto md:px-20 px-2">
      <div className=" items-center justify-center text-center">
        <h1 className="my-20 text-2xl md:text-4xl font-semibold" >
          we are delighted to have you<span className="text-pink-500"> Here:)</span>
        </h1>
        <p className="mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, a
          utem labore unde error, ad ipsa eaque excepturi reprehenderit a
          rchitecto possimus perferendis libero? Inventore nesciunt exercitationem, dolores ipsam expedita blanditiis possimus.
        </p>

        <Link to="/" ><button className="bg-pink-600 rounded-md text-white px-4 py-2 mt-4 hover:bg-pink-700 duration-200">Back</button></Link>
        <div />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (

            <Card key={item.id} item={item} />
          )
          )}

        </div>
      </div>
    </div>
  )
}

export default Course
