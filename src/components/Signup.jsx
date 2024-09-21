// import React from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Login from "./Login";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import toast from "react-hot-toast";
// function Signup() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const from = location.state?.from?.pathname || "/";
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       fullname: data.fullname,
//       email: data.email,
//       password: data.password,
//     };
//     await axios
//       .post("http://localhost:4000/user/signup", userInfo)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data) {
//           toast.success("Signup Successfully");
//           navigate(from, { replace: true });
//         }
//         localStorage.setItem("Users", JSON.stringify(res.data.user));
//       })
//       .catch((err) => {
//         if (err.response) {
//           console.log(err);
//           toast.error("Error: " + err.response.data.message);
//         }
//       });
//   };
//   return (
//     <>
//       <div className="flex h-screen items-center justify-center">
//         <div className=" w-[600px] ">
//           <div className="modal-box">
//             <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//               {/* if there is a button in form, it will close the modal */}
//               <Link
//                 to="/"
//                 className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//               >
//                 ✕
//               </Link>

//               <h3 className="font-bold text-lg">Signup</h3>
//               <div className="mt-4 space-y-2">
//                 <span>Name</span>
//                 <br />
//                 <input
//                   type="text"
//                   placeholder="Enter your fullname"
//                   className="w-80 px-3 py-1 border rounded-md outline-none"
//                   {...register("fullname", { required: true })}
//                 />
//                 <br />
//                 {errors.fullname && (
//                   <span className="text-sm text-red-500">
//                     This field is required
//                   </span>
//                 )}
//               </div>
//               {/* Email */}
//               <div className="mt-4 space-y-2">
//                 <span>Email</span>
//                 <br />
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-80 px-3 py-1 border rounded-md outline-none"
//                   {...register("email", { required: true })}
//                 />
//                 <br />
//                 {errors.email && (
//                   <span className="text-sm text-red-500">
//                     This field is required
//                   </span>
//                 )}
//               </div>
//               {/* Password */}
//               <div className="mt-4 space-y-2">
//                 <span>Password</span>
//                 <br />
//                 <input
//                   type="text"
//                   placeholder="Enter your password"
//                   className="w-80 px-3 py-1 border rounded-md outline-none"
//                   {...register("password", { required: true })}
//                 />
//                 <br />
//                 {errors.password && (
//                   <span className="text-sm text-red-500">
//                     This field is required
//                   </span>
//                 )}
//               </div>
//               {/* Button */}
//               <div className="flex justify-around mt-4">
//                 <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
//                   Signup
//                 </button>
//                 <p className="text-xl">
//                   Have account?{" "}
//                   <button
//                     className="underline text-blue-500 cursor-pointer"
//                     onClick={() =>
//                       document.getElementById("my_modal_3").showModal()
//                     }
//                   >
//                     Login
//                   </button>{" "}
//                   <Login />
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Signup;

// first code by gpt

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    console.log(userInfo);
    await axios
      .post("https://book-store-backend-9u87.onrender.com/user/signup", userInfo)
      // .post(`${process.env.REACT_APP_BACKEND_URL}/user/signup`, userInfo)

      .then((res) => {
        // console.log()
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Signup</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="text"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
            </div>
          </form>

          {/* Move Login component outside the form */}
          <div className="mt-4 text-xl">
            <span>Have an account? </span>
            <button
              className="underline text-blue-500 cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </button>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

// import React from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Login from "./Login";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import toast from "react-hot-toast";

// function Signup() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const from = location.state?.from?.pathname || "/";
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       fullname: data.fullname,
//       email: data.email,
//       password: data.password,
//     };
//     try {
//       const res = await axios.post(
//         // "https://book-store-backend-9u87.onrender.com/user/signup",
//         // `${process.env.REACT_APP_BACKEND_URL}/user/signup`,
//         "http://localhost:5173/user/signup",
//         userInfo
//       );

//       if (res.data) {
//         toast.success("Signup Successfully");
//         localStorage.setItem("Users", JSON.stringify(res.data.user));
//         navigate(from, { replace: true });
//       }
//     } catch (err) {
//       if (err.response) {
//         toast.error("Error: " + err.response.data.message);
//       } else {
//         toast.error("Error signing up. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="flex h-screen items-center justify-center">
//       <div className="w-[600px]">
//         <div className="modal-box">
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <Link
//               to="/"
//               className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//             >
//               ✕
//             </Link>

//             <h3 className="font-bold text-lg">Signup</h3>
//             <div className="mt-4 space-y-2">
//               <label htmlFor="fullname">Name</label>
//               <br />
//               <input
//                 type="text"
//                 placeholder="Enter your fullname"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("fullname", { required: "Full name is required" })}
//               />
//               {errors.fullname && (
//                 <span className="text-sm text-red-500">
//                   {errors.fullname.message}
//                 </span>
//               )}
//             </div>

//             <div className="mt-4 space-y-2">
//               <label htmlFor="email">Email</label>
//               <br />
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("email", { required: "Email is required" })}
//               />
//               {errors.email && (
//                 <span className="text-sm text-red-500">
//                   {errors.email.message}
//                 </span>
//               )}
//             </div>

//             <div className="mt-4 space-y-2">
//               <label htmlFor="password">Password</label>
//               <br />
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("password", { required: "Password is required" })}
//               />
//               {errors.password && (
//                 <span className="text-sm text-red-500">
//                   {errors.password.message}
//                 </span>
//               )}
//             </div>

//             <div className="flex justify-around mt-4">
//               <button
//                 type="submit"
//                 className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
//               >
//                 Signup
//               </button>
//             </div>
//           </form>

//           {/* Login Modal trigger */}
//           <div className="mt-4 text-xl">
//             <span>Have an account? </span>
//             <button
//               className="underline text-blue-500 cursor-pointer"
//               onClick={() => document.getElementById("my_modal_3").showModal()}
//             >
//               Login
//             </button>
//             {/* Render the Login component */}
//             <Login />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;

