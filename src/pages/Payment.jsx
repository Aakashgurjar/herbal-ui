import React, { useState } from "react";
import single from '../assets/single.png'


const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("razorpay");
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);


  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };

  const Continuehandle = () => {
    setIsOrderConfirmed(true);
    alert(`Selected Payment Method: ${paymentMethod}`);
  };


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

          <h2 className="text-xl font-bold text-green-800 mb-2">Order Confirm !!</h2>
          <p className="text-gray-500 mb-6 text-sm">
            Mirum est notare quam littera gothica, quam nunc putamus parum.
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
    <div className="container mx-auto p-4 my-10">
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-4xl">

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-10 w-full justify-center">
              <div className="flex flex-col items-center">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center">✓</div>
                <p className="mt-2 text-sm font-medium">Cart</p>
              </div>
              <div className="w-1/5 border-t-2 border-green-600"></div>
              <div className="flex flex-col items-center">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center">✓</div>
                <p className="mt-2 text-sm font-medium">Address</p>
              </div>
              <div className="w-1/5 border-t-2 border-gray-300"></div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-300 text-white rounded-full w-10 h-10 flex items-center justify-center">3</div>
                <p className="mt-2 text-sm font-medium text-gray-400">Payment</p>
              </div>
            </div>
          </div>

          <div className="text-green-700 text-center text-sm font-medium mb-4">
            🏷️ You save ₹200 on this order today!
          </div>

          <div className="flex flex-col lg:flex-row gap-6">

            <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg border">
              <h2 className="font-bold mb-4 text-lg">Payment method</h2>
              <div className="flex flex-col gap-4">
                <div
                  className={`flex items-center border p-4 rounded cursor-pointer ${paymentMethod === "razorpay" ? "border-green-600 bg-green-50" : "border-gray-300"}`}
                  onClick={() => handlePaymentChange("razorpay")}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "razorpay"}
                    onChange={() => handlePaymentChange("razorpay")}
                    className="mr-3"
                  />
                  <span className="text-sm">Razorpay Secure (UPI, Cards, Wallets, NetBanking)</span>
                  <img
                    src="https://img.icons8.com/color/48/000000/visa.png"
                    alt="Visa"
                    className="w-8 ml-auto"
                  />
                </div>

                <div
                  className={`flex items-center border p-4 rounded cursor-pointer ${paymentMethod === "cod" ? "border-green-600 bg-green-50" : "border-gray-300"}`}
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
                  <h3 className="font-bold text-sm">Herba Essential – Hair Nutrition | 250g</h3>
                  <p className="text-xs mb-2">Take 1 sachet daily after meals</p>
                  <ul className="text-xs list-disc pl-5 text-gray-700 mb-2">
                    <li>Supports Stronger, Thicker Hair Growth</li>
                    <li>Helps Control Hairfall & Reverse Premature Greying</li>
                  </ul>
                  <p className="text-sm font-medium">MRP: ₹599</p>
                  <div className="flex items-center mt-2">
                    <span className="text-green-600 font-bold text-sm">You save ₹200</span>
                    <div className="flex items-center ml-4 border rounded">
                      <button className="px-2 py-1">-</button>
                      <span className="px-3">2</span>
                      <button className="px-2 py-1 bg-orange-500 text-white">+</button>
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
  );
};

export default Payment;