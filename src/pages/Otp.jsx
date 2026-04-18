import React, { useState, useContext } from "react";
import single from "../assets/single.png";
import Mininav from "../components/Mininav";
import { PopupContext } from "../context/PopupContext";
import { useNavigate } from "react-router-dom";

import { IoLogOutOutline } from "react-icons/io5";
import { PiArrowsClockwiseBold } from "react-icons/pi";
import { LuMapPin } from "react-icons/lu";
import { AiFillProfile } from "react-icons/ai";





const Otp = () => {
  const navigate = useNavigate();
  const [color , setColor] = useState('gray');

  const [activeTab, setActiveTab] = useState("profile");
  const {
    user,
    handleLogout,
    handlePopup,
    isLoggedIn,
    setShowProfileDropdown,
    showProfileDropdown,
    handleLogin,
  } = useContext(PopupContext);

  const orders = [
    {
      id: 1,
      title: "Herba essential hair nutritions powder 100% organic",
      orderId: "32262222133",
      qty: 2,
      address: "32262222133",
      date: "May 18, 2024",
      price: "₹350.00",
      status: "Booked",
      img: single,
    },
    {
      id: 2,
      title: "Herba essential hair nutritions powder 100% organic",
      orderId: "32262222133",
      qty: 2,
      address: "32262222133",
      date: "May 18, 2024",
      price: "₹350.00",
      status: "Booked",
      img: single,
    },
  ];

  const handleContinuelogout = () => {
    handleLogout();
    navigate("/");
  };



  //  crud logic
  // const [addresses, setAddresses] = useState([
  //   {
  //     id: 1,
  //     name: "Huzefa Bagwala",
  //     phone: "9363XXXX10",
  //     email: "huzefa@example.com",
  //     street: "1131 Dusty Townline",
  //     zip: "40322",
  //     city: "Jacksonville",
  //     country: "United States",
  //   },
  // ]);

  // const [form, setForm] = useState({
  //   id: null,
  //   name: "",
  //   phone: "",
  //   email: "",
  //   street: "",
  //   zip: "",
  //   city: "",
  //   country: "",
  // });

  // const [isEditing, setIsEditing] = useState(false);

  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  // const handleSave = () => {
  //   if (
  //     !form.name ||
  //     !form.phone ||
  //     !form.email ||
  //     !form.street ||
  //     !form.zip ||
  //     !form.city ||
  //     !form.country
  //   )
  //     if (isEditing) {
  //       setAddresses(
  //         addresses.map((addr) => (addr.id === form.id ? { ...form } : addr))
  //       );
  //       setIsEditing(false);
  //     } else {
  //       setAddresses([...addresses, { ...form, id: Date.now() }]);
  //     }

  //   setForm({
  //     id: null,
  //     name: "",
  //     phone: "",
  //     email: "",
  //     street: "",
  //     zip: "",
  //     city: "",
  //     country: "",
  //   });
  //   console.log("data save suffecfd");
  // };

  // const handleEdit = (addr) => {
  //   setForm(addr);
  //   setIsEditing(true);
  // };

  // const handleRemove = (id) => {
  //   setAddresses(addresses.filter((addr) => addr.id !== id));
  // };






// manage address page validation 
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Huzefa Bagwala",
      phone: "9363XXXX10",
      email: "huzefa@example.com",
      street: "1131 Dusty Townline",
      zip: "40322",
      city: "Jacksonville",
      country: "United States",
    },
  ]);
  
  const [form, setForm] = useState({
    id: null,
    name: "",
    phone: "",
    email: "",
    street: "",
    zip: "",
    city: "",
    country: "",
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({}); // ✅ errors ka state
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  // ✅ validation function
  const validateForm = () => {
    let newErrors = {};
  
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^[0-9]{10}$/.test(form.phone)) newErrors.phone = "Mobile number must be 10 digits.";
  
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Enter a valid email.";
  
    if (!form.street.trim()) newErrors.street = "Street address is required.";
    if (!form.zip.trim()) newErrors.zip = "Pin code is required.";
    else if (!/^[0-9]{5,6}$/.test(form.zip)) newErrors.zip = "Enter a valid pin code.";
  
    if (!form.city.trim()) newErrors.city = "City is required.";
    if (!form.country.trim()) newErrors.country = "Country is required.";
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSave = () => {
    if (!validateForm()) return; 
  
    if (isEditing) {
      setAddresses(
        addresses.map((addr) => (addr.id === form.id ? { ...form } : addr))
      );
      setIsEditing(false);
    } else {
      setAddresses([...addresses, { ...form, id: Date.now() }]);
    }
  
    setForm({
      id: null,
      name: "",
      phone: "",
      email: "",
      street: "",
      zip: "",
      city: "",
      country: "",
    });
    setErrors({});
    console.log("Data saved successfully");
  };
  
  const handleEdit = (addr) => {
    setForm(addr);
    setIsEditing(true);
  };
  
  const handleRemove = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };


  // profile page validations
  const [newform, setNewform] = useState({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    pinCode: "",
    state: "",
    city: "",
  });

  const [err, setErrs] = useState({});

  const handleFirstChange = (e) => {
    setNewform({ ...newform, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let currentErrors = {};

    if (!newform.fullName.trim()) {
      currentErrors.fullName = "Full name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(newform.fullName)) {
      currentErrors.fullName = "Only letters and spaces allowed";
    }

    if (!newform.email.trim()) {
      currentErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(newform.email)) {
      currentErrors.email = "Invalid email format";
    }

    if (!newform.phone.trim()) {
      currentErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(newform.phone)) {
      currentErrors.phone = "Phone must be 10 digits";
    }

    if (!newform.street.trim()) {
      currentErrors.street = "Street address is required";
    }

    if (!newform.pinCode.trim()) {
      currentErrors.pinCode = "Pin code is required";
    } else if (!/^\d{6}$/.test(newform.pinCode)) {
      currentErrors.pinCode = "Pin code must be 6 digits";
    }

    if (!newform.state.trim()) {
      currentErrors.state = "State is required";
    }

    if (!newform.city.trim()) {
      currentErrors.city = "City is required";
    }

    setErrs(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", form);
      alert("Changes saved successfully!");
    }
  };




  

  return (
    <div>
      <div className="mt-24">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-6">
          <div className="col-span-1 border rounded-md shadow-sm">
            <div className="p-4 border-b font-semibold text-lg">Setting</div>
            <ul className="text-sm">
              <li
                onClick={() => setActiveTab("profile")}
                className={`px-4 py-3 cursor-pointer flex items-center gap-3 ${
                  activeTab === "profile"
                    ? "border-l-4 border-green-600 bg-gray-50 font-medium"
                    : "hover:bg-gray-100"
                }`}
              >
                <span className="text-green-600"></span>
                <AiFillProfile className="text-[1.5rem]"/>
                 Profile
              </li>
              <li
                onClick={() => setActiveTab("orders")}
                className={`px-4 py-3 cursor-pointer flex items-center gap-3 ${
                  activeTab === "orders"
                    ? "border-l-4 border-green-600 bg-gray-50 font-medium"
                    : "hover:bg-gray-100"
                }`}
              >
                <span className="text-gray-600"></span>
                <PiArrowsClockwiseBold className="text-[1.4rem]"/>
                Order History
              </li>
              <li
                onClick={() => setActiveTab("address")}
                className={`px-4 py-3 cursor-pointer flex items-center gap-3 ${
                  activeTab === "address"
                    ? "border-l-4 border-green-600 bg-gray-50 font-medium"
                    : "hover:bg-gray-100"
                }`}
              >
                <span className="text-gray-600"></span>
                <LuMapPin  className="text-[1.4rem]"/>
                Manage Address
              </li>
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center gap-3">
                <span className="text-gray-600"></span>
                <button onClick={handleContinuelogout} >
                <IoLogOutOutline className="inline mr-3 text-[1.4rem]"/>
                  Log-out</button>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3">
            {activeTab === "profile" && (



              // <div className="border rounded-md shadow-sm p-6">
              //   <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
              //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              //     <input
              //       type="text"
              //       placeholder="Full name"
              //       className="border rounded px-4 py-2"
              //     />
              //     <input
              //       type="email"
              //       placeholder="abc@gmail.com"
              //       className="border rounded px-4 py-2"
              //     />
              //     <input
              //       type="tel"
              //       placeholder="9896XXXX69"
              //       maxLength={10}
              //       className="border rounded px-4 py-2"
              //     />
              //     <input
              //       type="text"
              //       placeholder="Street Address"
              //       className="border rounded px-4 py-2"
              //     />
              //     <input
              //       type="text"
              //       placeholder="Pin Code"
              //       className="border rounded px-4 py-2"
              //     />
              //     <input
              //       type="text"
              //       placeholder="States"
              //       className="border rounded px-4 py-2"
              //     />
              //     <input
              //       type="text"
              //       placeholder="City"
              //       className="border rounded px-4 py-2"
              //     />
              //   </div>

              //   <button className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              //     Save Changes
              //   </button>

              // </div>



              <div className="border rounded-md shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                  <h1 className="pb-1"> Full Name </h1>

                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full name"
                      value={newform.fullName}
                      onChange={handleFirstChange}
                      className="border rounded px-4 py-2 w-full"
                    />
                    {err.fullName && (
                      <p className="text-red-500 text-sm">{err.fullName}</p>
                    )}
                  </div>
                  <div>
                  <h1 className="pb-1"> Email </h1>

                    <input
                      type="email"
                      name="email"
                      placeholder="abc@gmail.com"
                      value={newform.email}
                      onChange={handleFirstChange}
                      className="border rounded px-4 py-2 w-full"
                    />
                    {err.email && (
                      <p className="text-red-500 text-sm">{err.email}</p>
                    )}
                  </div>
                  <div>
                  <h1 className="pb-1"> Mobile Number </h1>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="9896XXXX69"
                      value={newform.phone}
                      onChange={handleFirstChange}
                      maxLength={10}
                      className="border rounded px-4 py-2 w-full"
                    />
                    {err.phone && (
                      <p className="text-red-500 text-sm">{err.phone}</p>
                    )}
                  </div>
                  <div>
                  <h1 className="pb-1"> Street Address </h1>

                    <input
                      type="text"
                      name="street"
                      placeholder="Street Address"
                      value={newform.street}
                      onChange={handleFirstChange}
                      className="border rounded px-4 py-2 w-full"
                    />
                    {err.street && (
                      <p className="text-red-500 text-sm">{err.street}</p>
                    )}
                  </div>
                  <div>
                  <h1 className="pb-1"> Pin Code </h1>

                    <input
                      type="text"
                      name="pinCode"
                      placeholder="Pin Code"
                      value={newform.pinCode}
                      onChange={handleFirstChange}
                      className="border rounded px-4 py-2 w-full"
                    />
                    {err.pinCode && (
                      <p className="text-red-500 text-sm">{err.pinCode}</p>
                    )}
                  </div>
                  <div>
                  <h1 className="pb-1"> State  </h1>

                    <input
                      type="text"
                      name="state"
                      placeholder="States"
                      value={newform.state}
                      onChange={handleFirstChange}
                      className="border rounded px-4 py-2 w-full"
                    />
                    {err.state && (
                      <p className="text-red-500 text-sm">{err.state}</p>
                    )}
                  </div>
                  <div>
                  <h1 className="pb-1"> City  </h1>

                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={newform.city}
                      onChange={handleFirstChange}
                      className="border rounded px-4 py-2 w-full"
                    />
                    {err.city && (
                      <p className="text-red-500 text-sm">{err.city}</p>
                    )}
                  </div>
                </div>
        
                <button
                  type="submit"
                  className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-700 transition"
                >
                  Save Changes
                </button>
              </form>
              </div>




            )}

            {activeTab === "address" && (
              //  this is old
              // <>
              //   <div className="flex justify-between items-center mb-4">
              //     <h2 className="text-xl font-semibold">Manage Address</h2>
              //     <button
              //     className="bg-green-900 text-white text-sm px-4 py-2 rounded-md hover:bg-green-800">
              //       Add Address
              //     </button>
              //   </div>
              //   <div className="flex ">
              //     <div className="border border-green-400 shadow-lg rounded-md p-2 mb-4 w-[100%] ">
              //       <div className="flex flex-row justify-between                ">
              //         <div>
              //           <p className="font-semibold">Huzefa Bagwala</p>
              //         </div>
              //         <div className="mt-2 flex gap-4 text-sm my-auto items-center ">
              //           <button

              //            className="bg-green-900 text-white px-5 py-2 text-md rounded-md">
              //             Edit
              //           </button>
              //           <button

              //            className=" bg-red-500 text-white px-4 py-2 text-md rounded-md ">
              //             Remove
              //           </button>
              //         </div>
              //       </div>

              //       <p>1131 Dusty Townline, Jacksonville, TX 40322</p>
              //       <p>
              //         <strong>Contact - </strong> (936) 361-0310
              //       </p>
              //     </div>

              //   </div>

              //   <div className="border rounded-md p-6">
              //     <h3 className="text-lg font-semibold mb-4">Add Address</h3>
              //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              //       <input
              //         type="text"
              //         placeholder='Dianne'
              //         className="border rounded px-4 py-2"
              //       />
              //       <div className='flex'>
              //        <span className="px-3 flex items-center bg-orange-100 border border-r-0 rounded-l">
              //         +91
              //         </span>
              //       <input
              //         type="text"
              //         placeholder='9632XXXX56'
              //         maxLength={10}
              //         className="border rounded px-4 py-2 w-full"
              //       />
              //       </div>
              //       <input
              //         type="email"
              //         placeholder='dianne.russell@gmail.com'
              //         className="border rounded px-4 py-2"
              //       />
              //       <input
              //         type="text"
              //         placeholder='4140 Parl'
              //         className="border rounded px-4 py-2"
              //       />
              //       <input
              //         type="text"
              //         placeholder='20033'
              //         className="border rounded px-4 py-2"
              //       />
              //       <input
              //         type="text"
              //         placeholder='Washington DC'
              //         className="border rounded px-4 py-2"
              //       />
              //       <input
              //         type="text"
              //         placeholder='United States'
              //         className="border rounded px-4 py-2"
              //       />
              //     </div>
              //     <div className="flex justify-end">
              //       <button
              //        className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-800">
              //         Save Address
              //       </button>
              //     </div>
              //   </div>
              // </>

              //  this is new code
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Manage Address</h2>
                  <button
                    className="bg-green-900 text-white text-sm px-4 py-2 rounded-md hover:bg-green-800"
                    onClick={() => {
                      setForm({
                        id: null,
                        name: "",
                        phone: "",
                        email: "",
                        street: "",
                        zip: "",
                        city: "",
                        country: "",
                      });
                      setIsEditing(false);
                    }}
                  >
                    Add Address
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  {addresses.map((addr) => (
                    <div
                      key={addr.id}
                      className="border  shadow-lg rounded-md p-2 mb-4 w-[100%]"
                    >
                      <div className="flex flex-row justify-between">
                        <div>
                          <p className="font-semibold">
                            {" "}
                            <strong>Name - </strong> {addr.name}
                          </p>
                        </div>
                        <div className="mt-2 flex gap-4 text-sm my-auto items-center">
                          <button
                            className="bg-green-700 text-white px-5 py-2 text-md rounded-md"
                            onClick={() => handleEdit(addr)}
                          >
                            Edit
                          </button>
                          <button
                            className="bg-red-500 text-white px-4 py-2 text-md rounded-md"
                            onClick={() => handleRemove(addr.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <p>
                        <strong>Address - </strong> {addr.street}, {addr.city},{" "}
                        {addr.zip}
                      </p>
                      <p>
                        <strong>Contact - </strong> ({addr.phone})
                      </p>
                      <p>
                        <strong>Email - </strong> {addr.email}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border rounded-md p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    {isEditing ? "Edit Address" : "Add Address"}
                  </h3>


                {/* my code  */}
                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="border rounded px-4 py-2"
                    />
                    <div className="flex">
                      <span className="px-3 flex items-center bg-orange-100 border border-r-0 rounded-l">
                        +91
                      </span>
                      <input
                        type="text"
                        name="phone"
                        placeholder="9632XXXX56"
                        maxLength={10}
                        value={form.phone}
                        onChange={handleChange}
                        className="border rounded px-4 py-2 w-full"
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="abc@gmail.com"
                      value={form.email}
                      onChange={handleChange}
                      className="border rounded px-4 py-2"
                    />
                    <input
                      type="text"
                      name="street"
                      placeholder="Street Address"
                      value={form.street}
                      onChange={handleChange}
                      className="border rounded px-4 py-2"
                    />
                    <input
                      type="text"
                      name="zip"
                      placeholder="pin code"
                      value={form.zip}
                      onChange={handleChange}
                      className="border rounded px-4 py-2"
                    />
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={form.city}
                      onChange={handleChange}
                      className="border rounded px-4 py-2"
                    />
                    <input
                      type="text"
                      name="country"
                      placeholder="country"
                      value={form.country}
                      onChange={handleChange}
                      className="border rounded px-4 py-2"
                    />
                  </div> */}

                  {/* <div className="flex justify-end">
                    <button
                      onClick={handleSave}
                      className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-800"
                    >
                      Save Address
                    </button>
                  </div> */}





{/* chatgpt code  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
  <div>
    <h1 className="pb-1"> Full Name </h1>
    <input
      type="text"
      name="name"
      placeholder="Full Name"
      value={form.name}
      onChange={handleChange}
      // className="border rounded px-4 py-2 w-full"
      className={`border rounded px-4 py-2 w-full ${errors.name ? "border-red-500" : "border-gray-300"}`}

    />
    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
  </div>

  <div>
  <h1 className="pb-1" > Mobile Number </h1>

    <div className="flex">
      <span className="px-3 flex items-center bg-orange-100 border border-r-0 rounded-l">
        +91
      </span>
      <input
        type="text"
        name="phone"
        placeholder="9632XXXX56"
        maxLength={10}
        value={form.phone}
        onChange={handleChange}
        // className="border rounded px-4 py-2 w-full"
        className={`border rounded px-4 py-2 w-full ${errors.phone ? "border-red-500" : "border-gray-300"}`}

      />
    </div>
    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
  </div>

  <div>
  <h1 className="pb-1"> Email </h1>

    <input
      type="email"
      name="email"
      placeholder="abc@gmail.com"
      value={form.email}
      onChange={handleChange}
      // className="border rounded px-4 py-2 w-full"
      className={`border rounded px-4 py-2 w-full ${errors.email ? "border-red-500" : "border-gray-300"}`}

    />
    {errors.email && <p className="text-red-500  text-sm">{errors.email}</p>}
  </div>

  <div>
  <h1 className="pb-1" > Street Address </h1>

    <input
      type="text"
      name="street"
      placeholder="Street Address"
      value={form.street}
      onChange={handleChange}
      // className="border rounded px-4 py-2 w-full"
      className={`border rounded px-4 py-2 w-full ${errors.street ? "border-red-500" : "border-gray-300"}`}

    />
    {errors.street && <p className="text-red-500 text-sm">{errors.street}</p>}
  </div>

  <div>
  <h1 className="pb-1"> Zip Code </h1>

    <input
      type="text"
      name="zip"
      placeholder="Pin code"
      value={form.zip}
      onChange={handleChange}
      // className="border rounded px-4 py-2 w-full"
      className={`border rounded px-4 py-2 w-full ${errors.zip ? "border-red-500" : "border-gray-300"}`}

    />
    {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
  </div>

  <div>
  <h1 className="pb-1"> City </h1>

    <input
      type="text"
      name="city"
      placeholder="City"
      value={form.city}
      onChange={handleChange}
      // className="border rounded px-4 py-2 w-full"
      className={`border rounded px-4 py-2 w-full ${errors.city ? "border-red-500" : "border-gray-300"}`}

    />
    {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
  </div>

  <div>
  <h1 className="pb-1"> Country </h1>
       
    <input
      type="text"
      name="country"
      placeholder="Country"
      value={form.country}
      onChange={handleChange}
      // className="border rounded px-4 py-2 w-full"
      className={`border rounded px-4 py-2 w-full ${errors.country ? "border-red-500" : "border-gray-300"}`}

    />
    {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
  </div>
</div>

<div className="flex justify-end">
  <button
    onClick={handleSave}
    className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-800"
  >
    Save Address
  </button>
</div>








                </div>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">Order History</h2>
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="border p-4 rounded-md shadow-sm grid grid-cols-1 md:grid-cols-5 gap-4 items-center"
                  >
                    <div className="flex justify-center md:justify-start">
                      <img
                        src={order.img}
                        alt="Product"
                        className="h-24 w-24 object-contain"
                      />
                    </div>
                    <div className="md:col-span-3 space-y-1">
                      <h3 className="text-md font-semibold text-green-900">
                        {order.title}
                      </h3>
                      <p className="text-sm text-gray-700">
                        Order ID - {order.orderId}
                      </p>
                      <p className="text-sm text-gray-700">Qty - {order.qty}</p>
                      <p className="text-sm text-gray-700">
                        Address - {order.address}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-green-700 mt-1">
                        <span>
                          {" "}
                          <img
                            width={"25px"}
                            height={"25px"}
                            // src="https://www.bing.com/th/id/OIP.F6yACt1no9JI9DEhc1aWygHaHa?w=199&h=211&c=8&rs=1&qlt=90&o=6&cb=thwsc4&dpr=1.6&pid=3.1&rm=2"
                            alt="img"
                          />
                        </span>
                        <span>
                          Booked On <strong>{order.date}</strong>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between h-full">
                      <div className="text-lg font-bold text-green-900">
                        {order.price}
                      </div>
                      <button className="bg-green-900 text-white text-sm px-4 py-1 rounded-md mt-4">
                        {order.status}
                      </button>
                    </div>
                  </div>
                ))}{" "}
                {orders.length == 0 && (
                  <div className="flex justify-center  rounded-md border-2 border-black">
                    <div className="text-3xl text-center  py-10">
                      No order available here
                      <img
                        className=" text-center mx-auto py-10"
                        src={orders}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;








//  otp verification

// const [otp, setOtp] = useState('');
//   const [timer, setTimer] = useState(60);

//   useEffect(() => {
//     const countdown = setInterval(() => {
//       setTimer((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);

//     return () => clearInterval(countdown);
//   }, []);

{
  /* 
  
  <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7] px-4">
    <div className="bg-white p-6 rounded-xl shadow-md max-w-md w-full">
      <h2 className="text-2xl font-semibold text-center mb-6">OTP Verification</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-green-900 mb-1">OTP</label>
        <input
          type="password"
          placeholder=""
          className="w-full px-4 py-2 rounded-md bg-[#FFEACC] focus:outline-none text-green-900"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      </div>

      <p className="text-sm text-center text-gray-500 mb-6">
        Didn’t receive OTP?{' '}
        <button className="text-green-800 font-medium" disabled>
          Click hare
        </button>{' '}
        <span className="text-green-800 font-semibold">
          00:{timer < 10 ? 0${timer} : timer}
        </span>
      </p>

      <button className="w-full bg-green-800 text-white py-2 rounded-md font-semibold hover:bg-green-900 transition">
        CONTINUE
      </button>
    </div>
  </div>


 */
}

// number verify

// const [mobile, setMobile] = useState('');
//   const [fetchAddress, setFetchAddress] = useState(false);

// <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7] px-4">
//       <div className="bg-white p-6 rounded-xl shadow-md max-w-md w-full">
//         <h2 className="text-2xl font-semibold text-center mb-6">Verify your mobile number</h2>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
//           <div className="flex border rounded-md overflow-hidden">
//             <select className="bg-[#FFEACC] px-3 py-2 text-sm focus:outline-none">
//               <option value="+91">+91</option>
//               <option value="+1">+1</option>
//               <option value="+44">+44</option>
//               {/* Add more if needed */}
//             </select>
//             <input
//               type="tel"
//               placeholder="6260XXXX54"
//               className="w-full px-3 py-2 text-sm focus:outline-none"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="flex items-center mb-6">
//           <input
//             type="checkbox"
//             id="fetchAddress"
//             className="mr-2"
//             checked={fetchAddress}
//             onChange={() => setFetchAddress(!fetchAddress)}
//           />
//           <label htmlFor="fetchAddress" className="text-sm text-gray-700">
//             Fetch my <span className="font-medium">shipping address</span> based on past order!
//           </label>
//         </div>

//         <button className="w-full bg-green-800 text-white py-2 rounded-md font-semibold hover:bg-green-900 transition">
//           SEND OTP
//         </button>

//         <p className="text-xs text-center mt-4 text-gray-600">
//           Entering the OTP, I Agree to the{' '}
//           <span className="font-semibold text-green-800">Terms of use</span> &{' '}
//           <span className="font-semibold text-green-800">Privacy policy</span>
//         </p>
//       </div>
//     </div>
