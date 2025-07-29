




import React, { useState } from 'react'
import single from '../assets/single.png'


const Otp = () => {
    const [activeTab, setActiveTab] = useState("profile");

    
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

  return (

    <div>

{/*   profile  , manageaddress , order  */}

    <div className="mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-6">
        {/* Sidebar */}
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
              <span className="text-green-600">
                {/* <ImProfile /> */}
              </span>
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
              <span className="text-gray-600">
                {/* <TbReload /> */}
              </span>
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
              <span className="text-gray-600">
                {/* <FaLocationDot /> */}
              </span>
              Manage Address
            </li>
            <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center gap-3">
              <span className="text-gray-600">
                {/* <LuLogOut /> */}
              </span>
              Log-out
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-span-1 md:col-span-3">
          {activeTab === "profile" && (
            <div className="border rounded-md shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="border rounded px-4 py-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded px-4 py-2"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border rounded px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="Street Address"
                  className="border rounded px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="border rounded px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="States"
                  className="border rounded px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="border rounded px-4 py-2"
                />
              </div>
              <button className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-700 transition">
                Save Changes
              </button>
            </div>
          )}

          {activeTab === "address" && (
            <>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Manage Address</h2>
                <button className="bg-green-900 text-white text-sm px-4 py-2 rounded-md hover:bg-green-800">
                  Add Address
                </button>
              </div>
              <div className="flex ">
                <div className="border-2 border-black rounded-md p-2 mb-4 w-[100%] ">
                  <div className="flex flex-row justify-between                ">
                    <div>
                      <p className="font-semibold">Huzefa Bagwala</p>
                    </div>
                    <div className="mt-2 flex gap-4 text-sm my-auto items-center ">
                      <button className="bg-green-900 text-white px-5 py-2 text-md rounded-md">
                        Edit
                      </button>
                      <button className=" bg-red-500 text-white px-4 py-2 text-md rounded-md ">
                        Remove
                      </button>
                    </div>
                  </div>

                  <p>1131 Dusty Townline, Jacksonville, TX 40322</p>
                  <p>
                    <strong>Contact - </strong> (936) 361-0310
                  </p>
                </div>

              </div>

              <div className="border rounded-md p-6">
                <h3 className="text-lg font-semibold mb-4">Add Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    defaultValue="Dianne"
                    className="border rounded px-4 py-2"
                  />
                  <input
                    type="text"
                    defaultValue="(603) 555-0123"
                    className="border rounded px-4 py-2"
                  />
                  <input
                    type="email"
                    defaultValue="dianne.russell@gmail.com"
                    className="border rounded px-4 py-2"
                  />
                  <input
                    type="text"
                    defaultValue="4140 Parl"
                    className="border rounded px-4 py-2"
                  />
                  <input
                    type="text"
                    defaultValue="20033"
                    className="border rounded px-4 py-2"
                  />
                  <input
                    type="text"
                    defaultValue="Washington DC"
                    className="border rounded px-4 py-2"
                  />
                  <input
                    type="text"
                    defaultValue="United States"
                    className="border rounded px-4 py-2"
                  />
                </div>
                <div className="flex justify-end">
                  <button className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-800">
                    Save Address
                  </button>
                </div>
              </div>
            </>
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
                      <span> <img width={'25px'}  height={"25px"} src="https://www.bing.com/th/id/OIP.F6yACt1no9JI9DEhc1aWygHaHa?w=199&h=211&c=8&rs=1&qlt=90&o=6&cb=thwsc4&dpr=1.6&pid=3.1&rm=2"/></span>
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
                  
              ))}  {orders.length == 0 && <div className="flex justify-center  rounded-md border-2 border-black"> 
                   <div className="text-3xl text-center  py-10"> 
                    No order available here 
                      <img  className=' text-center mx-auto py-10' src={order} />
                 </div>
                   </div>} 
            </div>
          )}
        </div>
      </div>
    </div>


      
    </div>
  )
}

export default Otp







//  otp verification 

{/* <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7] px-4">
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


const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []); */}







  





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














