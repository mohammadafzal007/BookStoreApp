import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from "axios";
import toast from 'react-hot-toast';
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userData = {
      email: data.email,
      password: data.password
    }
    await axios.post("http://localhost:4001/user/login", userData)
      .then(
        (res) => {
          console.log(res.data);
          if (res.data) 
            { 
                toast.success("Logged In Successfully");
                document.getElementById('my_modal_3').close()
                setTimeout(() =>{
                    window.location.reload()
                    localStorage.setItem("Users",JSON.stringify(res.data.user));
                },1000)
                console.log("ok")
             }

        })
      .catch((err) => { 
        if(err.response){
          toast.error("Error :" + err.response.data.message)
          setTimeout(() => {
              window.location.reload()
          }, 2000);
        }
      })
  }
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">

                        <Link to="/" onClick={() => document.getElementById('my_modal_3').close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                    
                    <h3 className="font-bold text-lg">Login!</h3>
     {/* email */}
                    <div className="mt-4 space-y-2">
                        <span>Email</span>
                        <br />
                        <input type="email" {...register("email", { required: true })} placeholder="Enter email" className="text-black w-80 px-3 border rounded outline-none" />
                       <br/>
                       {errors.email && <span className="text-sm text-red-500">This Field is Required</span>}
                    </div>
                    {/* password */}
                    <div className="mt-4 space-y-2">
                        <span>Password</span>
                        <br />
                        <input type="password" {...register("password", { required: true })} placeholder="Enter password" className="text-black w-80 px-3 border rounded outline-none" />
                        <br/>
                        {errors.password && <span className="text-sm text-red-500">This Field is Required</span>}
                    </div>
                    {/* buttons */}
                    <div className="flex mt-4 justify-around">
                     
               <button
                type="submit"
                className="btn py-2 bg-pink-600 hover:bg-pink-900 hover:text-white"
              >
                Login
              </button>
                        <p>Not registered?{" "}<Link to="/signup" className="text-blue-700 cursor-pointer underline">SignUp</Link></p>
                    </div>
                    </form>
                </div>
            </dialog>

        </div>
    )
}

export default Login;






// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useForm } from 'react-hook-form';

// function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => console.log(data);

//   return (
//     <div>
//       <dialog id="my_modal_3" className="modal" >
//         <div className="modal-box">
//           <button
//             className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//             onClick={() => document.getElementById('my_modal_3').close()}
//           >
//             ✕
//           </button>
//           <h3 className="font-bold text-lg">Login!</h3>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             {/* Email */}
//             <div className="mt-4 space-y-2">
//               <label>
//                 <span>Email</span>
//                 <br />
//                 <input
//                   type="email"
//                   {...register('email', { required: 'Email is required' })}
//                   placeholder="Enter email"
//                   className="w-80 px-3 border rounded outline-none"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500">{errors.email.message}</p>
//                 )}
//               </label>
//             </div>

//             {/* Password */}
//             <div className="mt-4 space-y-2">
//               <label>
//                 <span>Password</span>
//                 <br />
//                 <input
//                   type="password"
//                   {...register('password', { required: 'Password is required' })}
//                   placeholder="Enter password"
//                   className="w-80 px-3 border rounded outline-none"
//                 />
//                 {errors.password && (
//                   <p className="text-red-500">{errors.password.message}</p>
//                 )}
//               </label>
//             </div>

//             {/* Buttons */}
//             <div className="flex mt-4 justify-around">
//               <button
//                 type="submit"
//                 className="btn py-2 bg-pink-600 hover:bg-pink-900 hover:text-white"
//               >
//                 Login
//               </button>
//               <p>
//                 Not registered?{' '}
//                 <Link to="/signup" className="text-blue-700 cursor-pointer underline">
//                   SignUp
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </dialog>
//     </div>
//   );
// }

// export default Login;
