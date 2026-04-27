import React, { useState } from "react";
import single from "../assets/single.png";
import right from "../assets/right.png";

import visa from "../assets/visa.png";
import cards from "../assets/cards.png";
import cash from "../assets/cash.png";

import { IoIosArrowBack } from "react-icons/io";
import shape from "../assets/shape.png";

import truck from "../assets/truck.png";
import packages from "../assets/packages.png";
import headphone from "../assets/headphone.png";
import Group6 from "../assets/Group6.png";

// import { PiShoppingCartSimple } from "react-icons/pi";
import { FaCartShopping } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Toggle = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const nextStep = () => {
    if (step < 3) {
      console.log("set is ", step);
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 1 page like data logics
  const [quantity, setQuantity] = useState(2);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  //  2page like data logics  my code
  // const [items, setItems] = useState([]);
  // const [editIndex, setEditIndex] = useState(null);
  // const [showForm, setShowForm] = useState(true);
  // const [dataForm, setDataForm] = useState({
  //   fullName: "",
  //   mobile: "",
  //   email: "",
  //   address: "",
  //   landmark: "",
  //   pincode: "",
  //   city: "",
  //   state: "",
  //   country: "India",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setDataForm((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSave = () => {
  //   console.log("Data Saved:", dataForm);

  //   if (editIndex !== null) {
  //     // Update existing item
  //     const updated = [...items];
  //     updated[editIndex] = dataForm;
  //     setItems(updated);
  //     setEditIndex(null);
  //   } else {
  //     // Add new item
  //     setItems((prevItems) => [...prevItems, dataForm]);
  //   }

  //   // Reset form
  //   setDataForm({
  //     fullName: "",
  //     mobile: "",
  //     email: "",
  //     address: "",
  //     landmark: "",
  //     pincode: "",
  //     city: "",
  //     state: "",
  //     country: "India",
  //   });

  //   setShowForm(false); // Hide form after saving
  // };

  // const handleRemove = (indexToRemove) => {
  //   setItems((prevItems) =>
  //     prevItems.filter((_, index) => index !== indexToRemove)
  //   );
  //   console.log("current indx", indexToRemove);

  //   // If we're editing the item being removed, reset the form
  //   if (editIndex === indexToRemove) {
  //     setEditIndex(null);
  //     setDataForm({
  //       fullName: "",
  //       mobile: "",
  //       email: "",
  //       address: "",
  //       landmark: "",
  //       pincode: "",
  //       city: "",
  //       state: "",
  //       country: "India",
  //     });
  //     setShowForm(false);
  //   }
  // };

  // const handleEdit = (index) => {
  //   // Populate form with the item's data
  //   setDataForm(items[index]);
  //   setEditIndex(index);
  //   setShowForm(true); // Show form for editing
  // };

  // const handleAddNew = () => {
  //   setDataForm({
  //     fullName: "",
  //     mobile: "",
  //     email: "",
  //     address: "",
  //     landmark: "",
  //     pincode: "",
  //     city: "",
  //     state: "",
  //     country: "India",
  //   });
  //   setEditIndex(null);
  //   setShowForm(true); // Show form for adding new address
  // };

  // chatgpt code
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [showForm, setShowForm] = useState(true);
  const [errors, setErrors] = useState({});
  const [dataForm, setDataForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    landmark: "",
    pincode: "",
    city: "",
    state: "",
    country: "India",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error on change
  };

  const validateForm = () => {
    let newErrors = {};

    // Full Name
    // if (!dataForm.fullName.trim()) {
    //   newErrors.fullName = "Full name is required.";
    // } else if (!/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(dataForm.fullName.trim())) {
    //   newErrors.fullName = "Only letters and single spaces allowed.";
    // } else if (dataForm.fullName.trim().split(" ").length < 2) {
    //   newErrors.fullName = "Enter both first and last name.";
    // }

    // Mobile
    // if (!dataForm.mobile.trim()) {
    //   newErrors.mobile = "Mobile number is required.";
    // } else if (!/^[6-9]\d{9}$/.test(dataForm.mobile.trim())) {
    //   newErrors.mobile = "Enter a valid 10-digit Indian mobile number.";
    // }

    // Email
    // if (!dataForm.email.trim()) {
    //   newErrors.email = "Email is required.";
    // } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dataForm.email.trim())) {
    //   newErrors.email = "Enter a valid email address.";
    // }

    // Address
    // if (!dataForm.address.trim()) {
    //   newErrors.address = "Address is required.";
    // } else if (dataForm.address.trim().length < 5) {
    //   newErrors.address = "Address must be at least 5 characters.";
    // }

    //landmark
    // if( !dataForm.landmark.trim()){
    //   newErrors.landmark = 'Landmark is required.';
    // }

    // Pincode
    // if (!dataForm.pincode.trim()) {
    //   newErrors.pincode = "Pincode is required.";
    // } else if (!/^\d{6}$/.test(dataForm.pincode.trim())) {
    //   newErrors.pincode = "Enter a valid 6-digit pincode.";
    // }

    // City
    // if (!dataForm.city.trim()) {
    //   newErrors.city = "City is required.";
    // }

    // State
    // if (!dataForm.state.trim()) {
    //   newErrors.state = "State is required.";
    // }

    // Country
    // if (!dataForm.country.trim()) {
    //   newErrors.country = "Country is required.";
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) return; // stop if invalid

    console.log("Data Saved:", dataForm);

    if (editIndex !== null) {
      // Update existing item
      const updated = [...items];
      updated[editIndex] = dataForm;
      setItems(updated);
      setEditIndex(null);
    } else {
      // Add new item
      setItems((prevItems) => [...prevItems, dataForm]);
    }

    // Reset form
    setDataForm({
      fullName: "",
      mobile: "",
      email: "",
      address: "",
      landmark: "",
      pincode: "",
      city: "",
      state: "",
      country: "India",
    });

    setShowForm(false);
  };

  const handleRemove = (indexToRemove) => {
    setItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );
    console.log("current indx", indexToRemove);

    if (editIndex === indexToRemove) {
      setEditIndex(null);
      setDataForm({
        fullName: "",
        mobile: "",
        email: "",
        address: "",
        landmark: "",
        pincode: "",
        city: "",
        state: "",
        country: "India",
      });
      setShowForm(false);
    }
  };

  const handleEdit = (index) => {
    setDataForm(items[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleAddNew = () => {
    setDataForm({
      fullName: "",
      mobile: "",
      email: "",
      address: "",
      landmark: "",
      pincode: "",
      city: "",
      state: "",
      country: "India",
    });
    setEditIndex(null);
    setShowForm(true);
  };

  const defaultAddress = {
    name: "Huzeifa Bagwala",
    type: "HOME",
    address: "1131 Dusty Townline, Jacksonville, TX 40322",
    contact: "(936) 361-0310",
    email: "dummyherba@gmail.com",
  };

  // 3 page data logic
  const [paymentMethod, setPaymentMethod] = useState("razorpay");
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };

  const Continuehandle = () => {
    setIsOrderConfirmed(true);
    alert(`Selected Payment Method: ${paymentMethod}`);
  };

  const arr = [
    { icon: <FaCartShopping />, label: "Cart", no: 1 },
    { icon: <MdLocationOn />, label: "Address", no: 2 },
    { icon: <FaMoneyCheckAlt />, label: "Payment", no: 3 },
  ];

  function ContinueShopping() {
    navigate("/");
    console.log("continue shopping");
  }

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <div className="animate-fade-in ">
            <div className="bg-white sm:min-h-[90vh] p-2 md:p-8 mt-3">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-6 lg:gap-8 max-w-6xl 0 mx-auto  ">
                <div className="lg:col-span-2 bg-white rounded shadow-sm   lg:p-6">
                  <div className="flex flex-row md:flex-row gap-1 md:gap-3 xl:gap-6 ">
                    <img
                      src={single}
                      alt="Product"
                      className="w-16 h-20  lg:w-20 lg:h-28 object-contain"
                    />
                    <div className="flex-1 pt-1">
                      <h2 className="text-xl font-semibold">
                        <span className="text-orange-400 text-[1.2rem]">
                          Herba Essential
                        </span>{" "}
                        – Hair Nutrition | 250g | Take 1 sachet daily after
                        meals
                      </h2>
                      <ul className=" text-[0.6rem] sm:text-sm text-gray-700 mt-2 space-y-1">
                        <li>✅ Supports Stronger, Thicker Hair Growth</li>
                        <li>
                          ✅ Helps Control Hairfall & Reverse Premature Greying
                        </li>
                      </ul>
                      <div className="mt-4 flex items-center justify-between">
                        <div>
                          <div className="flex sm:flex-row">
                            <p className="text-gray-500  pr-1 text-sm">MRP:</p>
                            <p className="text-xl pl-1 font-semibold">₹599</p>
                          </div>
                          <p className="text-orange-500 text-sm">
                            Your save ₹200
                          </p>
                        </div>
                        <div className="flex items-center border rounded px-2 py-1 space-x-3">
                          <button
                            onClick={handleDecrease}
                            className="text-lg font-bold"
                          >
                            −
                          </button>
                          <span>{quantity} </span>
                          <button
                            onClick={handleIncrease}
                            className="text-lg font-bold bg-orange-400 text-white px-2 rounded"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 border-t pt-1 border-2 rounded h-1/2 bg-[#FBF7E9]">
                    <h3 className="font-semibold p-1 ">Short Description:</h3>
                    <hr />
                    <p className="text-sm text-gray-600 mt-1 p-1">
                      Herba Essential is a 100% organic hair nutrition
                      supplement designed to reduce hair fall, promote growth,
                      and reverse premature greying — naturally and effectively.
                    </p>
                  </div>
                </div>

                <div className="space-y-2 lg:space-y-6">
                  <div className="border-2 rounded p-2 lg:p-4 shadow-sm bg-[#FBF7E9]">
                    <h3 className="font-semibold mb-1 lg:mb-2">Offers</h3>
                    <div className="text-[0.85rem] lg:text-sm text-gray-700 space-y-1">
                      <p>
                        🟠 ₹200 saved with product price drop!{" "}
                        <span className="text-green-600  font-normal lg:font-medium ml-2">
                          Applied
                        </span>
                      </p>
                      <p>
                        🟠 ₹200 saved with product price drop!{" "}
                        <span className="text-green-600 font-normal lg:font-medium ml-2">
                          Applied
                        </span>
                      </p>
                    </div>
                    <div className="mt-3 lg:mt-4 flex">
                      <input
                        type="text"
                        placeholder="Enter coupon code"
                        className="border flex-1 p-2 rounded-l text-sm"
                      />
                      <button className="bg-orange-400 text-white px-2 lg:px-4 rounded-r">
                        Apply
                      </button>
                    </div>
                  </div>

                  {/* <div className="border rounded p-2 lg:p-4 shadow-sm">
                    <h3 className="font-semibold mb-2">Price Details</h3>
                    <div className="text-sm space-y-1 text-gray-800">
                      <div className="flex justify-between">
                        <span>Total MRP</span>
                        <span>₹599</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Discount on MRP</span>
                        <span>₹599</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery Charges</span>
                        <span className="line-through text-gray-500">
                          ₹49
                        </span>{" "}
                        <span className="text-green-600">Free</span>
                      </div>

                      <div className="flex justify-between font-semibold border-t pt-2">
                        <span>Total</span>
                        <span>₹599</span>
                      </div>

                    </div>
                  </div>

                  <button
                    onClick={nextStep}
                    disabled={step === 3}
                    className="w-full  bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded"
                  >
                    Enter Address
                  </button> */}

                  <div className="">
                    <div className="border rounded p-2 lg:p-4 shadow-sm mb-4 bg-[#FBF7E9]">
                      <h3 className="font-semibold mb-2">Price Details</h3>
                      <div className="text-sm space-y-1 text-gray-800">
                        <div className="flex justify-between">
                          <span>Total MRP</span>
                          <span>₹{quantity * 599}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Discount on MRP</span>
                          <span>₹0</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Delivery Charges</span>
                          <div>
                            <span className="line-through text-gray-500">
                              ₹49
                            </span>{" "}
                            <span className="text-green-600">Free</span>
                          </div>
                        </div>
                        <div className="flex justify-between font-semibold border-t pt-2">
                          <span>Total</span>
                          <span>₹{quantity * 599}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={nextStep}
                      disabled={step === 3}
                      className="hidden sm:block  w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded shadow-green-200 shadow-lg"
                    >
                      Enter Address
                    </button>
                  </div>

                  <div className="block sm:hidden fixed bottom-0 inset-x-2  rounded bg-orange-400 flex justify-between items-center px-4 py-3 text-white text-sm z-50">
                    <span className="font-semibold">
                      Total MRP: <span className="line-through"></span> ₹
                      {quantity * 599}
                    </span>
                    <button
                      onClick={nextStep}
                      disabled={step === 3}
                      className="bg-orange-400 hover:bg-orange-600 border-2 text-white font-semibold px-4 py-2 rounded"
                    >
                      Enter Address
                    </button>
                  </div>
                </div>
              </div>

              {/* <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700 mt-10 max-w-5xl mx-auto border-t pt-6">
                <div className="flex items-center gap-2">
                  <span>🚚</span>
                  <div>
                    <strong>Free Shipping</strong>
                    <br />
                    Free shipping on all your order
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <img
                      //  src='file:///C:/Users/amanb/Downloads/headphones%201.svg'
                      alt="sng"
                    />
                  </span>
                  <div>
                    <strong>Customer Support 24/7</strong>
                    <br />
                    Instant access to Support
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span>✅</span>
                  <div>
                    <strong>100% Secure Payment</strong>
                    <br />
                    We ensure your money is safe
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span>💰</span>
                  <div>
                    <strong>Money-Back Guarantee</strong>
                    <br />
                    30 Days Money-Back Guarantee
                  </div>
                </div>
              </div> */}

              <div className="hidden sm:grid grid-cols-2 md:grid-cols-4  gap-4 text-sm text-gray-700 mt-12 max-w-7xl mx-auto  py-10 px-10  shadow-lg shadow-slate-200  ">
                <div className="flex items-center gap-2  ">
                  <span>
                    <img src={truck} />
                  </span>
                  <div>
                    <strong>Free Shipping</strong>
                    <br />
                    Free shipping on all your order
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span>
                    <img src={headphone} alt="Support" />
                  </span>
                  <div>
                    <strong>Customer Support 24/7</strong>
                    <br />
                    Instant access to Support
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span>
                    {" "}
                    <img src={Group6} alt="Support" />
                  </span>
                  <div>
                    <strong>100% Secure Payment</strong>
                    <br />
                    We ensure your money is safe
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span>
                    {" "}
                    <img src={packages} alt="Support" />
                  </span>
                  <div>
                    <strong>Money-Back Guarantee</strong>
                    <br />
                    30 Days Money-Back Guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          // 2 nd page data
          <div className="animate-fade-in">
            <div className="mt-2">
              <div className="container mx-auto p-2 lg:p-3 bg-white  ">
                {items.length === 0 || showForm ? (
                  <>
                    <div className="flex flex-col lg:flex-row gap-3 lg:gap-14  md:ml-28  mx-auto">
                      <div className="w-full lg:w-1/2 border   rounded p-3 lg:p-6 ">
                        <h2 className="text-lg font-semibold mb-2 lg:mb-4">
                          {editIndex !== null
                            ? "Edit Address"
                            : "Contact Information"}
                        </h2>

                        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3 border-2 border-red-400 ">
                          <div>
                            <label className="block mb-1 text-sm">
                              Full Name
                            </label>
                            <input
                              type="text"
                              name="fullName"
                              placeholder="Full Name"
                              value={dataForm.fullName}
                              onChange={handleChange}
                              className="w-full p-2 border rounded"
                            />
                          </div>
                          <div>
                            <label className="block mb-1 text-sm">
                              Mobile Number
                            </label>
                            <div className="flex">
                              <span className="px-3 flex items-center bg-orange-100 border border-r-0 rounded-l">
                                +91
                              </span>
                              <input
                                type="text"
                                name="mobile"
                                placeholder="6260XXXX54"
                                value={dataForm.mobile}
                                maxLength={10}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-r"
                              />
                            </div>
                          </div>
                          <div className="md:col-span-2">
                            <label className="block mb-1 text-sm">Email</label>
                            <input
                              type="email"
                              name="email"
                              placeholder="abc@gmail.com"
                              value={dataForm.email}
                              onChange={handleChange}
                              className="w-full p-2 border rounded"
                            />
                          </div>
                        </div> */}

                        {/* <h2 className="text-lg font-semibold mt-4 lg:mt-6 mb-2 lg:mb-4">
                          Shipping Address
                        </h2>
                        <hr /> */}

                        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 border-2 border-red-400">
                          <div>
                            <label className="block mb-1 mt-1  lg:mt-2 text-sm">
                              Address( House No ,Building, Street, Area )*
                            </label>
                            <input
                              type="text"
                              name="address"
                              placeholder="Enter Address"
                              value={dataForm.address}
                              onChange={handleChange}
                              className="w-full p-2 border rounded"
                            />
                          </div>
                          <div>
                            <label className="block mb-1 text-sm">
                              Landmark (Optional)
                            </label>
                            <input
                              type="text"
                              name="landmark"
                              placeholder="Enter landmark"
                              value={dataForm.landmark}
                              onChange={handleChange}
                              className="w-full p-2 border rounded"
                            />
                          </div>
                          <div>
                            <label className="block mb-1 text-sm">
                              Pincode
                            </label>
                            <input
                              type="text"
                              name="pincode"
                              placeholder="Enter pincode"
                              value={dataForm.pincode}
                              onChange={handleChange}
                              className="w-full p-2 border rounded"
                            />
                          </div>
                          <div>
                            <label className="block mb-1 text-sm">City</label>
                            <input
                              type="text"
                              name="city"
                              placeholder="Enter your city"
                              value={dataForm.city}
                              onChange={handleChange}
                              className="w-full p-2 border rounded"
                            />
                          </div>
                          <div>
                            <label className="block mb-1 text-sm">State</label>
                            <input
                              type="text"
                              name="state"
                              placeholder="Select state"
                              value={dataForm.state}
                              onChange={handleChange}
                              className="w-full p-2 border rounded"
                            />
                          </div>
                          <div>
                            <label className="block mb-1 text-sm">
                              Country
                            </label>
                            <select
                              name="country"
                              value={dataForm.country}
                              onChange={handleChange}
                              className="w-full p-2 border rounded"
                            >
                              <option>India</option>
                            </select>
                          </div>
                        </div> */}

                        <form onSubmit={handleSave} className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3">
                            <div>
                              <label className="block mb-1 text-sm">
                                Full Name
                              </label>
                              <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={dataForm.fullName}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                              />
                              {errors.fullName && (
                                <p className="text-red-500 text-xs">
                                  {errors.fullName}
                                </p>
                              )}
                            </div>
                            <div>
                              <label className="block mb-1 text-sm">
                                Mobile Number
                              </label>
                              <div className="flex">
                                <span className="px-3 flex items-center bg-orange-100 border border-r-0 rounded-l">
                                  +91
                                </span>
                                <input
                                  type="text"
                                  name="mobile"
                                  placeholder="6260XXXX54"
                                  value={dataForm.mobile}
                                  maxLength={10}
                                  onChange={handleChange}
                                  className="w-full p-2 border rounded-r"
                                />
                              </div>
                              {errors.mobile && (
                                <p className="text-red-500 text-xs">
                                  {errors.mobile}
                                </p>
                              )}
                            </div>
                            <div className="md:col-span-2">
                              <label className="block mb-1 text-sm">
                                Email
                              </label>
                              <input
                                type="email"
                                name="email"
                                placeholder="abc@gmail.com"
                                value={dataForm.email}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                              />
                              {errors.email && (
                                <p className="text-red-500 text-xs">
                                  {errors.email}
                                </p>
                              )}
                            </div>
                          </div>

                          <h2 className="text-lg font-semibold mt-4 lg:mt-6 mb-2 lg:mb-4">
                            Shipping Address
                          </h2>
                          <hr />

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 ">
                            <div>
                              <label className="block mb-1 mt-1 lg:mt-2 text-sm">
                                Address( House No ,Building, Street, Area )*
                              </label>
                              <input
                                type="text"
                                name="address"
                                placeholder="Enter Address"
                                value={dataForm.address}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                              />
                              {errors.address && (
                                <p className="text-red-500 text-xs">
                                  {errors.address}
                                </p>
                              )}
                            </div>
                            <div>
                              <label className="block mb-1 text-sm">
                                Landmark (Optional)
                              </label>
                              <input
                                type="text"
                                name="landmark"
                                placeholder="Enter landmark"
                                value={dataForm.landmark}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                              />
                              {errors.landmark && (
                                <p className="text-red-500 text-xs">
                                  {errors.landmark}
                                </p>
                              )}
                            </div>
                            <div>
                              <label className="block mb-1 text-sm">
                                Pincode
                              </label>
                              <input
                                type="text"
                                name="pincode"
                                placeholder="Enter pincode"
                                value={dataForm.pincode}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                              />
                              {errors.pincode && (
                                <p className="text-red-500 text-xs">
                                  {errors.pincode}
                                </p>
                              )}
                            </div>
                            <div>
                              <label className="block mb-1 text-sm">City</label>
                              <input
                                type="text"
                                name="city"
                                placeholder="Enter your city"
                                value={dataForm.city}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                              />
                              {errors.city && (
                                <p className="text-red-500 text-xs">
                                  {errors.city}
                                </p>
                              )}
                            </div>
                            <div>
                              <label className="block mb-1 text-sm">
                                State
                              </label>
                              <input
                                type="text"
                                name="state"
                                placeholder="Select state"
                                value={dataForm.state}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                              />
                              {errors.state && (
                                <p className="text-red-500 text-xs">
                                  {errors.state}
                                </p>
                              )}
                            </div>
                            <div>
                              <label className="block mb-1 text-sm">
                                Country
                              </label>
                              <select
                                name="country"
                                value={dataForm.country}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                              >
                                <option>India</option>
                              </select>
                              {errors.country && (
                                <p className="text-red-500 text-xs">
                                  {errors.country}
                                </p>
                              )}
                            </div>
                          </div>
                        </form>

                        {items.length > 0 && (
                          <div className="flex gap-2 mt-4">
                            <button
                              onClick={() => {
                                setShowForm(false);
                                setEditIndex(null);
                                setDataForm({
                                  fullName: "",
                                  mobile: "",
                                  email: "",
                                  address: "",
                                  landmark: "",
                                  pincode: "",
                                  city: "",
                                  state: "",
                                  country: "India",
                                });
                              }}
                              className="w-full bg-gray-500 text-white py-2 rounded font-semibold"
                            >
                              CANCEL
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="w-full lg:w-1/3 rounded p-2 lg:p-6 ">
                        <div className="mb-2 lg:mb-4  flex">
                          <img
                            src={single}
                            alt="single"
                            className="w-24 h-32 object-contain"
                          />
                          <div className="ml-4">
                            <h3 className="font-bold text-sm lg:text-md mb-1">
                              Herba Essential – Hair Nutrition | 250g
                            </h3>
                            <p className="text-sm">
                              Take 1 sachet daily after meals
                            </p>
                            <ul className="text-[0.7rem] lg:text-sm text-gray-700 list-disc ml-5 mt-2">
                              <li>Supports Stronger, Thicker Hair Growth</li>
                              <li>
                                Helps Control Hairfall & Reverse Premature
                                Greying
                              </li>
                            </ul>
                            <p className="mt-2">MRP: ₹599</p>

                            <div className="flex items-center mt-2">
                              <span className="text-black font-bold">
                                Your price: ₹200
                              </span>
                              <button
                                onClick={handleDecrease}
                                className="ml-2 px-2 bg-gray-200 rounded"
                              >
                                -
                              </button>
                              <span className="mx-2">{quantity}</span>
                              <button
                                onClick={handleIncrease}
                                className="px-2 bg-orange-500 text-white rounded"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="border rounded p-2 lg:p-4 shadow-sm mb-4 bg-[#FBF7E9]">
                          <h3 className="font-semibold mb-2">Price Details</h3>
                          <div className="text-sm space-y-1 text-gray-800">
                            <div className="flex justify-between">
                              <span>Total MRP</span>
                              <span>₹{quantity * 599}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Discount on MRP</span>
                              <span>₹0</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Delivery Charges</span>
                              <div>
                                <span className="line-through text-gray-500">
                                  ₹49
                                </span>{" "}
                                <span className="text-green-600">Free</span>
                              </div>
                            </div>
                            <div className="flex justify-between font-semibold border-t pt-2">
                              <span>Total</span>
                              <span>₹{quantity * 599}</span>
                            </div>
                          </div>
                        </div>

                        {/* <button
                          onClick={handleSave}
                          className="w-full bg-orange-500 text-white py-2 rounded font-semibold"
                        >
                          {editIndex !== null ? "UPDATE" : "SAVE"}
                        </button> */}

                        <div className="hidden sm:block">
                          <button
                            onClick={handleSave}
                            className="w-full bg-orange-500 text-white py-2 rounded font-semibold"
                          >
                            {editIndex !== null ? "UPDATE" : "SAVE"}
                          </button>
                        </div>

                        <div className="block sm:hidden fixed bottom-0 inset-x-2 rounded-lg  bg-orange-500 z-50">
                          <button
                            onClick={handleSave}
                            className="w-full text-white text-center py-3 font-semibold text-lg"
                          >
                            {editIndex !== null ? "UPDATE" : "SAVE"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="container mx-auto p-2 lg:p-2 my-1 lg:my-2 ">
                      <div className="flex lg:space-x-3 flex-col md:flex-row ">
                        <div className="w-full bg-white p-2 lg:p-4 rounded shadow ">
                          <h2 className="font-bold mb-4">Saved Address</h2>

                          <div className="mb-4 p-1  rounded">
                            {items.length > 0 ? (
                              items.map((item, index) => (
                                <div
                                  key={index}
                                  className=" rounded-md mb-1 lg:mb-3 p-1 lg:p-2"
                                >
                                  <p>{item.fullName || defaultAddress.name} </p>
                                  <span className="text-red-500">{"Home"}</span>
                                  <p>
                                    Address-{" "}
                                    {item.address || defaultAddress.address}
                                  </p>
                                  <p>
                                    Contact -{" "}
                                    {item.mobile || defaultAddress.contact}
                                  </p>
                                  <p>
                                    Email - {item.email || defaultAddress.email}
                                  </p>

                                  <div className="mt-1 md:mt-2">
                                    <button
                                      onClick={() => handleEdit(index)}
                                      className="text-blue-600 mr-2"
                                    >
                                      Edit
                                    </button>
                                    |
                                    <button
                                      className="text-red-500 ml-2"
                                      onClick={() => handleRemove(index)}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <div className="bg-pink-50 rounded-md mb-3 p-4">
                                <span className="text-red-500">
                                  {defaultAddress.type}
                                </span>
                                <p>{defaultAddress.address}</p>
                                <p>Contact - {defaultAddress.contact}</p>
                                <p>Email - {defaultAddress.email}</p>
                              </div>
                            )}
                          </div>

                          <button
                            className="block mt-2 bg-green-800 text-white p-2 rounded w-full"
                            onClick={handleAddNew}
                          >
                            Add New Address
                          </button>
                        </div>

                        <div className=" flex  flex-col  w-full md:w-1/2  bg-white p-4 rounded shadow  ">
                          <div className="flex gap-3 lg:gap-4 mb-4">
                            <div className="flex  w-fit h-fit ">
                              <img
                                src={single}
                                alt="Product"
                                className=" mb-1 lg:mb-2 w-16 h-20  lg:w-20 lg:h-28  object-contain"
                              />
                            </div>

                            <div className=" w-full p-2 ">
                              <h3 className="font-bold text-[1rem] md:text-[1.3rem] ">
                                Herba Essential - Hair Nutrition | 250g
                              </h3>
                              <p className="text-sm">
                                Take 1 sachet daily after meals
                              </p>
                              <ul className="text-black text-[0.7rem] sm:text-sm list-disc pl-5 mb-3">
                                <li>Supports Stronger, Thicker Hair Growth</li>
                                <li>
                                  Helps Control Hairfall & Reverse Premature
                                  Greying
                                </li>
                              </ul>
                              <p className="text-sm">MRP: ₹599</p>
                              <div className="flex items-center mt-2">
                                <span className="text-black font-bold">
                                  Your save ₹200
                                </span>
                                <button
                                  onClick={handleDecrease}
                                  className="ml-2 p-1 bg-gray-200 rounded"
                                >
                                  -
                                </button>
                                <span className="mx-2">{quantity}</span>
                                <button
                                  onClick={handleIncrease}
                                  className="p-1 bg-orange-500 text-white rounded"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className=" bg-[#FBF7E9] p-2 ">
                            {/* <div className=" rounded p-2 lg:p-4 shadow-sm mb-4 bg-[#FBF7E9]">
                      <h3 className="font-semibold mb-2">Price Details</h3>
                      <div className="text-sm space-y-1 text-gray-800">
                        <div className="flex justify-between">
                          <span>Total MRP</span>
                          <span>₹599</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Discount on MRP</span>
                          <span>₹599</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Delivery Charges</span>
                          <div>
                            <span className="line-through text-gray-500">
                              ₹49
                            </span>{" "}
                            <span className="text-green-600">Free</span>
                          </div>
                        </div>
                        <div className="flex justify-between font-semibold border-t pt-2">
                          <span>Total</span>
                          <span>₹599</span>
                        </div>
                      </div>
                    </div> */}

                            <div className="border rounded p-2 lg:p-4 shadow-sm mb-4 bg-[#FBF7E9]">
                              <h3 className="font-semibold mb-2">
                                Price Details
                              </h3>
                              <div className="text-sm space-y-1 text-gray-800">
                                <div className="flex justify-between">
                                  <span>Total MRP</span>
                                  <span>₹{quantity * 599}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Discount on MRP</span>
                                  <span>₹0</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Delivery Charges</span>
                                  <div>
                                    <span className="line-through text-gray-500">
                                      ₹49
                                    </span>{" "}
                                    <span className="text-green-600">Free</span>
                                  </div>
                                </div>
                                <div className="flex justify-between font-semibold border-t pt-2">
                                  <span>Total</span>
                                  <span>₹{quantity * 599}</span>
                                </div>
                              </div>
                            </div>

                            <div className="hidden sm:block ">
                              <button
                                onClick={nextStep}
                                disabled={step === 3}
                                className="w-full bg-orange-500 text-white py-2 rounded mt-4 font-semibold"
                              >
                                CONTINUE PAYMENT
                              </button>
                            </div>

                            <div className="block sm:hidden  fixed bottom-0 inset-x-2 rounded-lg  bg-orange-500 z-50">
                              <button
                                onClick={nextStep}
                                disabled={step === 3}
                                className="w-full text-white text-center py-3 font-semibold text-lg"
                              >
                                CONTINUE PAYMENT
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700 mt-10 max-w-7xl mx-auto  py-10 px-10  shadow-lg ">
                <div className="flex items-center gap-2">
                  <span>
                    <img src={truck} />
                  </span>
                  <div>
                    <strong>Free Shipping</strong>
                    <br />
                    Free shipping on all your order
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span>
                    <img src={headphone} alt="Support" />
                  </span>
                  <div>
                    <strong>Customer Support 24/7</strong>
                    <br />
                    Instant access to Support
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span>
                    {" "}
                    <img src={Group6} alt="Support" />
                  </span>
                  <div>
                    <strong>100% Secure Payment</strong>
                    <br />
                    We ensure your money is safe
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span>
                    {" "}
                    <img src={packages} alt="Support" />
                  </span>
                  <div>
                    <strong>Money-Back Guarantee</strong>
                    <br />
                    30 Days Money-Back Guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        if (isOrderConfirmed) {
          return (
            <div className="flex items-center justify-center h-1/2   ">
              <div className="bg-white p-10 rounded-lg  text-center border">
                <div className="relative inline-block mb-6">
                  <img src={right} alt="right" className="" />
                </div>

                <h2 className="text-xl font-bold text-green-800 mb-2">
                  Order Confirm !!
                </h2>
                <p className="text-gray-500 mb-6 text-sm">
                  Mirum est notare quam littera gothica, quam nunc putamus
                  parum.
                </p>
                <div className="flex justify-center gap-4">
                  <button className="px-6 py-2 rounded border border-gray-300 text-sm font-medium">
                    View Order
                  </button>
                  <button
                    onClick={ContinueShopping}
                    className="px-6 py-2 rounded bg-green-800 text-white text-sm font-medium"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          );
        }

        return (
          // 3 rd page data
          <div className="animate-fade-in">
            <div className="container mx-auto p-4 my-10">
              <div className="flex justify-center mb-8">
                <div className="w-full max-w-4xl">
                  <div className="flex flex-col lg:flex-row gap-6 ">
                    <div className="w-full lg:w-3/3 lg:h-fit bg-white p-6 rounded-lg border-2">
                      <h2 className="font-normal mb-4 text-lg">
                        Payment method
                      </h2>

                      <div className="flex flex-col gap-4">
                        <div className=" flex">
                          <input
                            type="radio"
                            name="payment"
                            checked={paymentMethod === "razorpay"}
                            onChange={() => handlePaymentChange("razorpay")}
                            className="mr-3"
                          />

                          <div
                            className={`flex items-center border p-4 w-full rounded cursor-pointer ${
                              paymentMethod === "razorpay"
                                ? " bg-[#F4F5F6]"
                                : "border-gray-300 bg-[#F4F5F6]"
                            }`}
                            onClick={() => handlePaymentChange("razorpay")}
                          >
                            <span className="text-[0.65rem] sm:text-sm">
                              Razorpay Secure (UPI, Cards, Wallets, NetBanking)
                            </span>
                            <img
                              src={visa}
                              alt="Visa"
                              className="w-8  ml-3 pr-1"
                            />
                            <img
                              src={cards}
                              alt="card"
                              className="w-8 ml-auto mr-2 "
                            />
                          </div>
                        </div>

                        <div className="  flex">
                          <input
                            type="radio"
                            name="payment"
                            checked={paymentMethod === "cod"}
                            onChange={() => handlePaymentChange("cod")}
                            className="mr-3"
                          />

                          <div
                            className={`flex items-center border p-4 w-full rounded cursor-pointer ${
                              paymentMethod === "cod"
                                ? " bg-[#F4F5F6]"
                                : "border-gray-300 bg-[#F4F5F6]"
                            }`}
                            onClick={() => handlePaymentChange("cod")}
                          >
                            <span className="text-[0.65rem] sm:text-sm">
                              Cash On Delivery
                            </span>
                            <img src={cash} alt="Cash" className="w-8 ml-3 " />
                          </div>
                        </div>
                      </div>

                      {/* <button
                        onClick={Continuehandle}
                        className="w-full mt-6 bg-orange-500 text-white py-2 rounded text-sm font-semibold shadow-md hover:bg-orange-600"
                      >
                        CONTINUE
                      </button> */}

                      <div className="hidden sm:block mt-3">
                        <button
                          onClick={Continuehandle}
                          className="w-full mt-2 bg-orange-500 text-white py-3 rounded text-sm font-semibold shadow-md hover:bg-orange-600"
                        >
                          CONTINUE
                        </button>
                      </div>

                      <div className="block sm:hidden  fixed bottom-0 inset-x-2 rounded-lg  bg-orange-500 z-50 ">
                        <button
                          onClick={Continuehandle}
                          className="w-full mt-1 bg-orange-500 text-white py-2 rounded text-sm font-semibold shadow-md hover:bg-orange-600"
                        >
                          CONTINUE
                        </button>
                      </div>
                    </div>

                    <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg border">
                      <div className="mb-6 flex gap-4">
                        <img
                          src={single}
                          alt="Product"
                          className="w-24 h-28 object-cover rounded"
                        />
                        <div className=" ">
                          <h3 className="font-bold text-sm mb-2">
                            Herba Essential – Hair Nutrition | 250g
                          </h3>
                          <p className="text-xs mb-2">
                            Take 1 sachet daily after meals
                          </p>
                          <ul className="text-xs list-disc pl-5 text-gray-700 mb-2">
                            <li>Supports Stronger, Thicker Hair Growth</li>
                            <li>
                              Helps Control Hairfall & Reverse Premature Greying
                            </li>
                          </ul>

                          <div className="flex justify-between mt-5">
                            <p className="text-sm md:text-[1.3rem] font-medium text-gray-400">
                              MRP:{" "}
                              <span className="font-semibold text-black">
                                {" "}
                                ₹599{" "}
                              </span>
                            </p>
                            <div className="flex items-center ml-4 border rounded">
                              <button
                                onClick={handleDecrease}
                                className="px-2 py-1"
                              >
                                {" "}
                                -{" "}
                              </button>
                              <span className="px-3">{quantity}</span>
                              <button
                                onClick={handleIncrease}
                                className="px-2 py-1 bg-orange-500 text-white"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center mt-1">
                            <span className="text-orange-400 font-bold text-[0.7rem] lg:text-[0.9rem]">
                              You save ₹200
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className=" rounded p-2 lg:p-4 shadow-sm mb-4 bg-[#FBF7E9]">
                        <h3 className="font-semibold mb-2">Price Details</h3>
                        <div className="text-sm space-y-1 text-gray-800">
                          <div className="flex justify-between">
                            <span>Total MRP</span>
                            <span>₹{quantity * 599}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Discount on MRP</span>
                            <span>₹0</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Delivery Charges</span>
                            <div>
                              <span className="line-through text-gray-500">
                                ₹49
                              </span>{" "}
                              <span className="text-green-600">Free</span>
                            </div>
                          </div>
                          <div className="flex justify-between font-semibold border-t pt-2">
                            <span>Total</span>
                            <span>₹{quantity * 599}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700 mt-10 max-w-7xl mx-auto  py-7 px-10  shadow-lg ">
                <div className="flex items-center gap-2">
                  <span>
                    <img src={truck} />
                  </span>
                  <div>
                    <strong>Free Shipping</strong>
                    <br />
                    Free shipping on all your order
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span>
                    <img src={headphone} alt="Support" />
                  </span>
                  <div>
                    <strong>Customer Support 24/7</strong>
                    <br />
                    Instant access to Support
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span>
                    {" "}
                    <img src={Group6} alt="Support" />
                  </span>
                  <div>
                    <strong>100% Secure Payment</strong>
                    <br />
                    We ensure your money is safe
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span>
                    {" "}
                    <img src={packages} alt="Support" />
                  </span>
                  <div>
                    <strong>Money-Back Guarantee</strong>
                    <br />
                    30 Days Money-Back Guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    // currect code acurate
    <div className="mt-24">
      {/* <div className="min-h-screen flex items-center justify-center">
  
    <div className="bg-white/95  rounded-3xl p-5 md:p-8 w-full">
        <h2 className="text-green-700 font-semibold text-center mb-5 sm:hidden">
        Checkout
        <div className="relative flex justify-between -top-7 right-2 gap-2">
          <button
            type="button"
            className="
              px-3 py-3 rounded-full font-semibold shadow-sm
              bg-orange-500 text-white text-[1rem]
              transition disabled:opacity-80 disabled:cursor-not-allowed
            "
            onClick={prevStep}
            disabled={step === 1}
          >  
           <IoIosArrowBack />
          </button>
        </div>
      </h2>
      
      <div className="w-full flex justify-center">
        
        <div className="flex items-center justify-between mb-8 px-2 select-none w-fit">
          {arr.map((num, idx) => (
            <div key={idx} className="flex items-center group">
              <div className="flex flex-col items-center pt-1 gap-1">
                <div
                  className={`
                    flex items-center justify-center w-12 h-12 rounded-full
                    font-bold transition-all duration-300 text-2xl
                    ${
                      step  > num.no  
                        ? "bg-green-500 text-white"      
                        : step === num.no
                          ? "bg-white text-gray-400 border-2"          
                          : "bg-white text-gray-400 border-2"   
                    }
                    group-hover:scale-105
                  `}
                >
                  {num.icon}
                </div>
                <span className={`text-sm font-medium ${
                  step  > num.no 
                    ? "text-green-600"          
                    : step === num.no 
                      ? "text-gray-600"        
                      : "text-gray-500"          
                }`}>
                  {num.label}
                </span>
              </div>
               
              {idx !== arr.length - 1 && (
                <div
                  className={`
                    h-1 w-16 md:w-48 lg:w-72 xl:w-96 rounded
                    ${step > num.no ? "bg-green-500" : "bg-gray-300"}
                    transition-all duration-300
                  `}
                > </div>
              )}
            </div>
          ))}
        </div>
        
      </div>

     <div className="w-full text-center mb-4">  

        <span className="text-green-500 mr-2 ">
           <img src={shape} alt="shape" className="inline"/>
             Your save ₹200 
        </span>
        on this order today!
      
      </div>
      <div class="absolute w-full left-0 right-0 h-2 bg-gradient-to-t from-white to-orange-100 "></div>



      <div className="bg-white rounded-2xl p-1 lg:p-2 transition-all duration-300">
        {renderForm()}
      </div>
    
      
    </div>
  </div> */}

      {/* <div className="min-h-screen flex items-center justify-center">
    <div className="bg-white/95 rounded-3xl p-5 md:p-8 w-full">
      
      <h2 className="text-green-700 font-semibold text-center mb-5 sm:hidden">
        Checkout
        <div className="relative flex justify-between -top-7 right-2 gap-2">
          <button
            type="button"
            className="px-3 py-3 rounded-full font-semibold shadow-sm
                       bg-orange-500 text-white text-[1rem]
                       transition disabled:opacity-80 disabled:cursor-not-allowed"
            onClick={prevStep}
            disabled={step === 1}
          >  
            <IoIosArrowBack />
          </button>
        </div>
      </h2>
      
      <div className="w-full flex justify-center">
        <div className="flex items-center justify-between mb-8 px-2 select-none w-fit">



      { 
        <div
      className={`
        h-1 w-14 sm:w-24 md:w-34   rounded
        ${step > 0 ? "bg-green-600" : "bg-gray-300"}
        transition-all duration-300
      `}
      ></div>
      }


          {arr.map((num, idx) => (
            <div key={idx} className="flex items-center group">
              <div className="flex flex-col items-center pt-1 gap-1">

             
                <div
                  className={`
                    flex items-center justify-center w-10 h-10 rounded-full
                    transition-all duration-300 text-lg
                    ${
                      step > num.no
                        ? "bg-green-600 text-white"
                        : step === num.no
                          ? "bg-green-600 text-white"
                          : "bg-white border-2 border-gray-300 text-gray-400"
                    }
                  `}
                > 
                  {num.icon}
                </div>
                
               
                <span
                  className={`text-sm font-medium ${
                    step > num.no 
                      ? "text-green-600"
                      : step === num.no
                        ? "text-green-600"
                        : "text-gray-500"
                  }`}
                >
                  {num.label}
                </span>

              </div>

              {idx !== arr.length - 1 && (
                <div
                  className={`
                    h-1 w-16 sm:w-36 md:w-48 lg:w-72 xl:w-96 rounded
                    ${step > num.no ? "bg-green-600" : "bg-gray-300"}
                    transition-all duration-300
                  `}
                ></div>
              )}

            

            </div>
          ))}






    {
       <div
      className={`
        h-1 w-14 sm:w-24 md:w-34   rounded
        ${step > arr.length ? "bg-green-600" : "bg-gray-300"}
        transition-all duration-300
      `}
    ></div>
    }

        </div>
        
      </div>

      <div className="w-full text-center mb-4">  
        <span className="text-green-600 font-medium mr-2">
          <img src={shape} alt="shape" className="inline w-4 h-4 mr-1" />
          You save ₹200
        </span>
        on this order today!
      </div>

      <div className="absolute w-full left-0 right-0 h-2 bg-gradient-to-t from-white to-orange-100"></div>

      <div className="bg-white rounded-2xl p-1 lg:p-2 transition-all duration-300">
        {renderForm()}
      </div>
    </div>
  </div> */}

      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white/95 rounded-3xl p-5 md:p-8 w-full">
          <h2 className=" relative text-green-700 font-semibold text-center  sm:hidden  top-5">
            Checkout
            <div className="relative flex justify-between -top-7 left-1 ">
              <button
                type="button"
                className="px-3 py-3 rounded-full font-semibold shadow-sm
                     bg-orange-500 text-white text-[1rem]
                     transition disabled:opacity-80 disabled:cursor-not-allowed"
                onClick={prevStep}
                disabled={step === 1}
              >
                <IoIosArrowBack />
              </button>
            </div>
          </h2>

          <div className="w-full flex justify-center">
            <div className="flex items-center justify-between mb-2 px-2 select-none w-fit">
              {/* left side line */}
              <div className="relative h-1 w-14 sm:w-24 md:w-34 rounded bg-gray-300 overflow-hidden">
                {step > 0 && (
                  <div className="absolute left-0 top-0 h-full w-full bg-green-600 transition-all duration-300"></div>
                )}
                {step === 1 && (
                  <div className="absolute left-0 top-0 h-full w-1/2 bg-green-600 transition-all duration-300"></div>
                )}
              </div>

              {arr.map((num, idx) => (
                <div key={idx} className="flex items-center group">
                  <div className="flex flex-col items-center pt-1 gap-1">
                    {/* step circle */}
                    <div
                      className={`
                  flex items-center justify-center w-10 h-10 rounded-full
                  transition-all duration-300 text-lg
                  ${
                    step > num.no
                      ? "bg-green-600 text-white"
                      : step === num.no
                      ? "bg-green-600 text-white"
                      : "bg-white border-2 border-gray-300 text-gray-400"
                  }
                `}
                    >
                      {num.icon}
                    </div>

                    <span
                      className={`text-sm font-medium ${
                        step > num.no
                          ? "text-green-600"
                          : step === num.no
                          ? "text-green-600"
                          : "text-gray-500"
                      }`}
                    >
                      {num.label}
                    </span>
                  </div>

                  {/* connecting line */}
                  {idx !== arr.length - 1 && (
                    <div className="relative h-1 w-16 sm:w-36 md:w-48 lg:w-72 xl:w-96 rounded bg-gray-300 overflow-hidden">
                      {step > num.no && (
                        <div className="absolute left-0 top-0 h-full w-full bg-green-600 transition-all duration-300"></div>
                      )}
                      {step === num.no && (
                        <div className="absolute left-0 top-0 h-full w-1/2 bg-green-600 transition-all duration-300"></div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* right side line */}
              <div className="relative h-1 w-14 sm:w-24 md:w-34 rounded bg-gray-300 overflow-hidden">
                {step > arr.length && (
                  <div className="absolute left-0 top-0 h-full w-full bg-green-600 transition-all duration-300"></div>
                )}
                {step === arr.length && (
                  <div className="absolute left-0 top-0 h-full w-full bg-green-600 transition-all duration-300"></div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full text-center mb-4">
            <span className="text-green-600 font-medium mr-2">
              <img src={shape} alt="shape" className="inline w-4 h-4 mr-1" />
              You save ₹200
            </span>
            on this order today!
          </div>

          <div className="absolute w-full left-0 right-0 h-2 bg-gradient-to-t from-white to-orange-100"></div>

          <div className="bg-white rounded-2xl p-1 lg:p-2 transition-all duration-300">
            {renderForm()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
