import React from 'react'
import { Link,useNavigate,useLocation } from 'react-router-dom'
import Login from './Components/Login';
import { useForm } from 'react-hook-form';
import axios from "axios";
import toast from 'react-hot-toast';
function Signup() {
  const location=useLocation();
  const from =location.state?.from?.pathname || "/";
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const onSubmit = (data) => console.log(data);
  const onSubmit = async (data) => {
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password
    }
    await axios.post("http://localhost:4001/user/signup", userData)
      .then(
        (res) => {
          console.log(res.data);
          if (res.data) 
            { 
              toast.success("Signup Successfully");
              navigate(from,{replace:true});
             }
             localStorage.setItem("Users",JSON.stringify(res.data.user));

        })
      .catch((err) => { 
        if(err.response){
          toast.error("Error :" + err.response.data.message)
        }
      })
  }
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px] ">
        <div className="modal-box shadow-black dark:bg-slate-900  dark:text-white dark:border">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>


            <h3 className="font-bold text-lg">SignUp!</h3>
            {/* name */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input type="text" {...register("name", { required: true })} placeholder="Enter name" className="w-80 px-3 border rounded outline-none text-black" />
              <br />
              {errors.name && <span className="text-sm text-red-500">This Field is Required</span>}
            </div>
            {/* email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input type="email" {...register("email", { required: true })} placeholder="Enter email" className=" text-black w-80 px-3 border rounded outline-none" />
              <br />
              {errors.email && <span className="text-sm text-red-500">This Field is Required</span>}
            </div>
            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input type="password" {...register("password", { required: true })} placeholder="Enter password" className=" text-black w-80 px-3 border rounded outline-none" />
              <br />
              {errors.password && <span className="text-sm text-red-500">This Field is Required</span>}
            </div>
            {/* buttons */}
            <div className="flex mt-4 justify-around">
              <button className="btn py-2 bg-pink-600 hover:bg-pink-900 hover:text-white">SignUp</button>
              <p>Have Account?<button to="/" onClick={() => document.getElementById('my_modal_3').showModal()} className="text-blue-700 cursor-pointer underline">Login</button><Login /></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
