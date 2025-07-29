import React, { useState } from "react";
import single from "../assets/single.png";

const Toggle = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
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

  //  2page like data logics
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [showForm, setShowForm] = useState(true);
  const [dataForm, setDataForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    landmark: "",
    pincode: "",
    city: "",
    state: "India",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
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
      state: "India",
    });

    setShowForm(false); // Hide form after saving
  };

  const handleRemove = (indexToRemove) => {
    setItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );
    console.log("current indx", indexToRemove);

    // If we're editing the item being removed, reset the form
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
        state: "India",
      });
      setShowForm(false);
    }
  };

  const handleEdit = (index) => {
    // Populate form with the item's data
    setDataForm(items[index]);
    setEditIndex(index);
    setShowForm(true); // Show form for editing
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
      state: "India",
    });
    setEditIndex(null);
    setShowForm(true); // Show form for adding new address
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

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          //  1 page data
          <div className="animate-fade-in border-2 ">
            <div className="bg-white min-h-screen p-4 md:p-8 ">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="lg:col-span-2 bg-white border rounded shadow-sm p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src={single}
                      alt="Product"
                      className="w-24 h-32 object-contain"
                    />
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold">
                        <span className="text-orange-600">Herba Essential</span>{" "}
                        – Hair Nutrition | 250g | Take 1 sachet daily after
                        meals
                      </h2>
                      <ul className="text-sm text-gray-700 mt-2 space-y-1">
                        <li>✅ Supports Stronger, Thicker Hair Growth</li>
                        <li>
                          ✅ Helps Control Hairfall & Reverse Premature Greying
                        </li>
                      </ul>
                      <div className="mt-4 flex items-center justify-between">
                        <div>
                          <p className="text-gray-500 text-sm">MRP:</p>
                          <p className="text-xl font-semibold">₹599</p>
                          <p className="text-green-600 text-sm">
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
                          <span>{quantity}</span>
                          <button
                            onClick={handleIncrease}
                            className="text-lg font-bold text-orange-600"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t pt-4">
                    <h3 className="font-semibold">Short Description:</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Herba Essential is a 100% organic hair nutrition
                      supplement designed to reduce hair fall, promote growth,
                      and reverse premature greying — naturally and effectively.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="border rounded p-4 shadow-sm">
                    <h3 className="font-semibold mb-2">Offers</h3>
                    <div className="text-sm text-gray-700 space-y-1">
                      <p>
                        🟠 ₹200 saved with product price drop!{" "}
                        <span className="text-green-600 font-medium ml-2">
                          Applied
                        </span>
                      </p>
                      <p>
                        🟠 ₹200 saved with product price drop!{" "}
                        <span className="text-green-600 font-medium ml-2">
                          Applied
                        </span>
                      </p>
                    </div>
                    <div className="mt-4 flex">
                      <input
                        type="text"
                        placeholder="Enter coupon code"
                        className="border flex-1 p-2 rounded-l text-sm"
                      />
                      <button className="bg-orange-400 text-white px-4 rounded-r">
                        Apply
                      </button>
                    </div>
                  </div>

                  <div className="border rounded p-4 shadow-sm">
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
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded"
                  >
                    Enter Address
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700 mt-10 max-w-5xl mx-auto border-t pt-6">
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
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          // 2 nd page data
          <div className="animate-fade-in">
            <div>
              <div className="container mx-auto p-6 bg-white border-2 border-red-400">
                {items.length === 0 || showForm ? (
                  <>
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="w-full lg:w-1/2 border rounded p-6">
                        <h2 className="text-lg font-semibold mb-4">
                          {editIndex !== null
                            ? "Edit Address"
                            : "Contact Information"}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block mb-1 text-sm">
                              Full Name
                            </label>
                            <input
                              type="text"
                              name="fullName"
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
                              <span className="px-3 flex items-center bg-gray-100 border border-r-0 rounded-l">
                                +91
                              </span>
                              <input
                                type="text"
                                name="mobile"
                                value={dataForm.mobile}
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
                              value={dataForm.email}
                              onChange={handleChange}
                              className="w-full p-2 border rounded"
                            />
                          </div>
                        </div>

                        <h2 className="text-lg font-semibold mt-6 mb-4">
                          Shipping Address
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block mb-1 text-sm">
                              Address
                            </label>
                            <input
                              type="text"
                              name="address"
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
                              value={dataForm.city}
                              onChange={handleChange}
                              className="w-full p-2 border rounded"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block mb-1 text-sm">State</label>
                            <select
                              name="state"
                              value={dataForm.state}
                              onChange={handleChange}
                              className="w-full p-2 border rounded"
                            >
                              <option>India</option>
                            </select>
                          </div>
                        </div>

                        {/* Add Cancel button when editing */}
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
                                  state: "India",
                                });
                              }}
                              className="w-full bg-gray-500 text-white py-2 rounded font-semibold"
                            >
                              CANCEL
                            </button>
                          </div>
                        )}
                      </div>

                      {/* RIGHT SIDE: PRODUCT CARD */}
                      <div className="w-full lg:w-1/2 border rounded p-6">
                        <div className="mb-4 flex">
                          <img
                            src={single}
                            alt="single"
                            className="w-24 h-32 object-contain"
                          />
                          <div className="ml-4">
                            <h3 className="font-bold text-md mb-1">
                              Herba Essential – Hair Nutrition | 250g
                            </h3>
                            <p className="text-sm">
                              Take 1 sachet daily after meals
                            </p>
                            <ul className="text-sm text-gray-700 list-disc ml-5 mt-2">
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
                              <button className="ml-2 px-2 bg-gray-200 rounded">
                                -
                              </button>
                              <span className="mx-2">2</span>
                              <button className="px-2 bg-orange-500 text-white rounded">
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="mb-4 border-t pt-4">
                          <h3 className="font-bold text-md mb-2">
                            Price Details
                          </h3>
                          <p>Total MRP: ₹599</p>
                          <p>Discount on MRP: ₹399</p>
                          <p>
                            Delivery Charges: ₹49{" "}
                            <span className="line-through">₹49</span>{" "}
                            <span className="text-green-600">Free</span>
                          </p>
                          <p className="font-bold">Total: ₹200</p>
                        </div>

                        <button
                          onClick={handleSave}
                          className="w-full bg-orange-500 text-white py-2 rounded font-semibold"
                        >
                          {editIndex !== null ? "UPDATE" : "SAVE"}
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="container mx-auto p-4 my-10 ">
                      <div className="flex space-x-6">
                        <div className="w-1/2 bg-white p-4 rounded shadow">
                          <h2 className="font-bold mb-4">Saved Address</h2>

                          <div className="mb-4 p-4 border-2 border-pink-400 rounded">
                            {items.length > 0 ? (
                              items.map((item, index) => (
                                <div
                                  key={index}
                                  className="border-2 border-blue-500 rounded-md mb-3 p-4"
                                >
                                  <p>{item.fullName}</p>
                                  <span className="text-red-500">
                                    {item.type || "Home"}
                                  </span>
                                  <p>{item.address}</p>
                                  <p>Contact - {item.mobile}</p>
                                  <p>Email - {item.email}</p>

                                  <div className="mt-2">
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

                        <div className="w-1/2 bg-white p-4 rounded shadow">
                          <img
                            src={single}
                            alt="Product"
                            className="mb-2 w-24 h-32 object-contain"
                          />
                          <h3 className="font-bold">
                            Herba Essential - Hair Nutrition | 250g
                          </h3>
                          <p className="text-sm">
                            Take 1 sachet daily after meals
                          </p>
                          <ul className="text-black text-sm list-disc pl-5">
                            <li>Supports Stronger, Thicker Hair Growth</li>
                            <li>
                              Helps Control Hairfall & Reverse Premature Greying
                            </li>
                          </ul>
                          <p className="text-sm">MRP: ₹599</p>
                          <div className="flex items-center mt-2">
                            <span className="text-black font-bold">
                              Your save ₹200
                            </span>
                            <button className="ml-2 p-1 bg-gray-200 rounded">
                              -
                            </button>
                            <span className="mx-2">2</span>
                            <button className="p-1 bg-orange-500 text-white rounded">
                              +
                            </button>
                          </div>

                          <div className="mt-4">
                            <h3 className="font-bold">Price Details</h3>
                            <p>Total MRP: ₹599</p>
                            <p>Discount on MRP: ₹399</p>
                            <p>Delivery Charges: ₹49 Free</p>
                            <p className="font-bold">Total: ₹200</p>
                          </div>

                          <button
                            onClick={nextStep}
                            disabled={step === 3}
                            className="w-full bg-orange-500 text-white p-2 rounded mt-4"
                          >
                            CONTINUE PAYMENT
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      case 3:
        if (isOrderConfirmed) {
          return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
              <div className="bg-white p-10 rounded-lg shadow-md text-center border">
                <div className="relative inline-block mb-6">
                  <div className="bg-green-700 rounded-full w-20 h-20 flex items-center justify-center text-white text-3xl shadow-lg z-10 mx-auto">
                    ✓
                  </div>
                  <div className="absolute inset-0 flex flex-wrap justify-center items-center pointer-events-none animate-ping">
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 bg-green-700 rounded-full absolute"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                        }}
                      />
                    ))}
                  </div>
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
                  <button className="px-6 py-2 rounded bg-green-800 text-white text-sm font-medium">
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
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg border">
                      <h2 className="font-bold mb-4 text-lg">Payment method</h2>
                      <div className="flex flex-col gap-4">
                        <div
                          className={`flex items-center border p-4 rounded cursor-pointer ${
                            paymentMethod === "razorpay"
                              ? "border-green-600 bg-green-50"
                              : "border-gray-300"
                          }`}
                          onClick={() => handlePaymentChange("razorpay")}
                        >
                          <input
                            type="radio"
                            name="payment"
                            checked={paymentMethod === "razorpay"}
                            onChange={() => handlePaymentChange("razorpay")}
                            className="mr-3"
                          />
                          <span className="text-sm">
                            Razorpay Secure (UPI, Cards, Wallets, NetBanking)
                          </span>
                          <img
                            src="https://img.icons8.com/color/48/000000/visa.png"
                            alt="Visa"
                            className="w-8 ml-auto"
                          />
                        </div>

                        <div
                          className={`flex items-center border p-4 rounded cursor-pointer ${
                            paymentMethod === "cod"
                              ? "border-green-600 bg-green-50"
                              : "border-gray-300"
                          }`}
                          onClick={() => handlePaymentChange("cod")}
                        >
                          <input
                            type="radio"
                            name="payment"
                            checked={paymentMethod === "cod"}
                            onChange={() => handlePaymentChange("cod")}
                            className="mr-3"
                          />
                          <span className="text-sm">Cash On Delivery</span>
                          <img
                            src="https://img.icons8.com/color/48/000000/money.png"
                            alt="Cash"
                            className="w-8 ml-auto"
                          />
                        </div>
                      </div>
                      <button
                        onClick={Continuehandle}
                        className="w-full mt-6 bg-orange-500 text-white py-2 rounded text-sm font-semibold shadow-md hover:bg-orange-600"
                      >
                        CONTINUE
                      </button>
                    </div>

                    <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg border">
                      <div className="mb-6 flex gap-4">
                        <img
                          src={single}
                          alt="Product"
                          className="w-24 h-28 object-cover rounded"
                        />
                        <div>
                          <h3 className="font-bold text-sm">
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
                          <p className="text-sm font-medium">MRP: ₹599</p>
                          <div className="flex items-center mt-2">
                            <span className="text-green-600 font-bold text-sm">
                              You save ₹200
                            </span>
                            <div className="flex items-center ml-4 border rounded">
                              <button className="px-2 py-1">-</button>
                              <span className="px-3">2</span>
                              <button className="px-2 py-1 bg-orange-500 text-white">
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4 text-sm">
                        <h4 className="font-bold mb-2">Price Details</h4>
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
                            <span className="line-through mr-1">₹49</span>
                            <span className="text-green-700">Free</span>
                          </div>
                        </div>
                        <div className="flex justify-between font-bold border-t pt-2 mt-2">
                          <span>Total</span>
                          <span>₹599</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 text-sm text-gray-700">
                    <div className="text-center">
                      🚚 <p className="font-medium">Free Shipping</p>
                      <p className="text-xs">Free shipping on all your order</p>
                    </div>
                    <div className="text-center">
                      👤 <p className="font-medium">Customer Support 24/7</p>
                      <p className="text-xs">Instant access to Support</p>
                    </div>
                    <div className="text-center">
                      🔒 <p className="font-medium">100% Secure Payment</p>
                      <p className="text-xs">We ensure your money is safe</p>
                    </div>
                    <div className="text-center">
                      📦 <p className="font-medium">Money-Back Guarantee</p>
                      <p className="text-xs">30 Days Money-Back Guarantee</p>
                    </div>
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
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br  from-blue-100 via-white to-green-100 mt-16">
        <div className="  bg-white/95 shadow-xl rounded-3xl p-8 md:p-12 w-fit ">
          <div className="w-full flex justify-center">
            <div className="flex items-center justify-between mb-8 px-2 select-none w-fit">
              {[1, 2, 3].map((num, idx) => (
                <div key={num} className="flex items-center group">
                  <div
                    className={`
            flex items-center justify-center w-10 h-10 rounded-full
            font-bold border-4 transition-all duration-300 
            ${
              step > num
                ? "bg-green-500 border-green-500 text-white"
                : step === num
                ? "bg-blue-600 border-blue-400 shadow-lg text-white"
                : "bg-gray-200 border-gray-300 text-gray-500"
            }
            group-hover:scale-105
          `}
                  >
                    {step > num ? (
                      <svg
                        width="20"
                        height="20"
                        className="text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.397 10.293a1 1 0 011.416 0L10 12.48l4.187-4.188a1 1 0 111.415 1.415l-4.895 4.895a1 1 0 01-1.415 0l-2.188-2.187a1 1 0 010-1.415z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      num
                    )}
                  </div>
                  {idx !== 2 && (
                    <div
                      className={`
              h-1 w-10 mx-1 rounded 
              ${step > num ? "bg-green-500" : "bg-gray-300"}
              transition-all duration-300
            `}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 transition-all duration-300">
            {renderForm()}

            <div className="flex justify-between mt-8 gap-2">
              <button
                type="button"
                className="
                  px-6 py-3 rounded-xl font-semibold shadow-sm
                  bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800
                  transition disabled:opacity-50 disabled:cursor-not-allowed
                "
                onClick={prevStep}
                disabled={step === 1}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
