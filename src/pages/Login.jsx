import React, { useState } from "react";
import { useNavigate, Link , NavLink} from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
  const [val, setVal] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  // const [token, setToken] = useState("");
  const [step, setStep]= useState(1);
  const [email, setEmail] = useState('');

 
//   const handleReset = async (e) => {
//      setStep(2);
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     if(!email.includes('@gmail.com')){
//         toast.error("Please input correct email"); 
//         return;
//     }
//     try {
//         const res = await axios.post("http://localhost:4000/reset-password-token", {email});
//           const data = await res.data;      
//           setStep(3);
           
//           if (data.message == "Email Sent successfully, please check your email" ) {
//              toast.success(data.message);  
//           } else{ 
//             toast.error(data.message,"! ❌");
//           }
//       } catch (err) {
//           const message = err.response?.data?.message ;
//           toast.error(message,"! ❌");
//       }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
    
//     if(val.password.length < 6){
//       toast.error("Password must be at least 6 characters long.");
//       return 
//     }
//     try {
//       const res = await axios.post("http://localhost:4000/login", val);
//       const data = await res.data;

//       if (data.message == "Logged In successfully") {
//         let token = data.user.token;
//         // console.log("login ", data.user);
//         localStorage.setItem("token", token);
//         toast.success("Logged in ! 🎉");
//         setTimeout(() => {
//           navigate("/dashboard");
//         }, 1000);
//       } else {
//         toast.error(data.message, "! ❌");
//       }
//     } catch (err) {
//       const message = err.response?.data?.message || "Something went wrong";
//       toast.error(message, "! ❌");
//     }
//   };


 function clickhandler(){
    navigate('/');
 }
 
  return (
    <div className="flex min-h-screen bg-sky-100 ">
 
      {step == 1 && ( <div className="w-full lg:w-1/2 flex items-center justify-center mx-auto">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-3xl font-bold text-center text-blue-700">
            Welcome Back
          </h2>
          <form className="space-y-4" >
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              value={val.email}
              onChange={(e) => setVal({ ...val, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
              value={val.password}
              onChange={(e) => setVal({ ...val, password: e.target.value })}
              required
            />
            <button 
              onClick={clickhandler}
              className="w-full text-center cursor-pointer bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Login
            </button>

          </form>
          
        
        </div>
      </div>)}

     
      { step == 2 && ( 
       <div className="w-full min-h-screen flex items-center justify-center bg-blue-50 p-4">
       <div className="w-full max-w-md p-6 bg-blue-100 rounded-xl shadow-lg">
         
         <form  onSubmit={handleSubmit} >
           <div className="mb-4">
             <label
               htmlFor="email"
               className="block text-blue-800 text-sm font-bold mb-2"
             >
               Email Address
             </label>
             <input
               type="email"
               id="email"
               className="w-full p-2 border-2 border-blue-300 rounded-md bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-500"
               placeholder="Enter your email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
             />
           </div>
          
         </form>
       </div>
     </div>
    )}

     
      


     
    </div>
  );
};

export default Login;