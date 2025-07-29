

import React, { useState } from "react";
import single from "../assets/single.png";

const CheckoutPages = () => {
  
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

  const handleContinue = () => {
    alert("Continuing to payment...");
  };

  const defaultAddress = {
    name: "Huzeifa Bagwala",
    type: "HOME",
    address: "1131 Dusty Townline, Jacksonville, TX 40322",
    contact: "(936) 361-0310",
    email: "dummyherba@gmail.com",
  };

  return (
    <div>
      <div className="container mx-auto p-6 bg-white">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-10 text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center">
                ✓
              </div>
              <span>Cart</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full border-2 border-green-600 text-green-600 flex items-center justify-center">
                ✓
              </div>
              <span className="font-bold text-black">Address</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full border-2 border-gray-400 text-gray-400 flex items-center justify-center">
                ➜
              </div>
              <span className="text-gray-500">Payment</span>
            </div>
          </div>
          <span className="text-green-600 font-semibold">
            Your save ₹200 on this order today!
          </span>
        </div>

        {(items.length === 0 || showForm) ? (
          <>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2 border rounded p-6">
                <h2 className="text-lg font-semibold mb-4">
                  {editIndex !== null ? "Edit Address" : "Contact Information"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-sm">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={dataForm.fullName}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm">Mobile Number</label>
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
                    <label className="block mb-1 text-sm">Address</label>
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
                    <label className="block mb-1 text-sm">Pincode</label>
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
                    <p className="text-sm">Take 1 sachet daily after meals</p>
                    <ul className="text-sm text-gray-700 list-disc ml-5 mt-2">
                      <li>Supports Stronger, Thicker Hair Growth</li>
                      <li>Helps Control Hairfall & Reverse Premature Greying</li>
                    </ul>
                    <p className="mt-2">MRP: ₹599</p>
                    <div className="flex items-center mt-2">
                      <span className="text-black font-bold">Your price: ₹200</span>
                      <button className="ml-2 px-2 bg-gray-200 rounded">-</button>
                      <span className="mx-2">2</span>
                      <button className="px-2 bg-orange-500 text-white rounded">+</button>
                    </div>
                  </div>
                </div>

                <div className="mb-4 border-t pt-4">
                  <h3 className="font-bold text-md mb-2">Price Details</h3>
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
            <div className="container mx-auto p-4 my-10">
              <div className="flex justify-between mb-4">
                <div className="flex space-x-4">
                  <button className="text-black">Cart</button>
                  <div className="relative">
                    <div className="w-2 h-2 bg-green-500 rounded-full absolute -top-2 -left-2"></div>
                    <button className="text-black font-bold">Address</button>
                  </div>
                  <button className="text-gray-400">Payment</button>
                </div>
                <span className="text-black">
                  Your save ₹200 on this order today!
                </span>
              </div>

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
                          <span className="text-red-500">{item.type || "Home"}</span>
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
                        <span className="text-red-500">{defaultAddress.type}</span>
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
                  <p className="text-sm">Take 1 sachet daily after meals</p>
                  <ul className="text-black text-sm list-disc pl-5">
                    <li>Supports Stronger, Thicker Hair Growth</li>
                    <li>Helps Control Hairfall & Reverse Premature Greying</li>
                  </ul>
                  <p className="text-sm">MRP: ₹599</p>
                  <div className="flex items-center mt-2">
                    <span className="text-black font-bold">Your save ₹200</span>
                    <button className="ml-2 p-1 bg-gray-200 rounded">-</button>
                    <span className="mx-2">2</span>
                    <button className="p-1 bg-orange-500 text-white rounded">+</button>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-bold">Price Details</h3>
                    <p>Total MRP: ₹599</p>
                    <p>Discount on MRP: ₹399</p>
                    <p>Delivery Charges: ₹49 Free</p>
                    <p className="font-bold">Total: ₹200</p>
                  </div>

                  <button
                    onClick={handleContinue}
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
  );
};

export default CheckoutPages;





































































