import React, { useState } from 'react';
import single from '../assets/single.png'

const Cart = () => {
  const [quantity, setQuantity] = useState(2);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="bg-white min-h-screen p-4 md:p-8">

      <div className="flex justify-between items-center max-w-4xl mx-auto mb-8">
        <div className="flex-1 text-center">
          <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto">🛒</div>
          <p className="mt-2 font-medium">Cart</p>
        </div>
        <div className="w-full h-1 bg-green-500 mx-2"></div>
        <div className="flex-1 text-center">
          <div className="w-8 h-8 rounded-full border-2 border-gray-400 text-gray-500 flex items-center justify-center mx-auto">📍</div>
          <p className="mt-2">Address</p>
        </div>
        <div className="w-full h-1 bg-gray-300 mx-2"></div>
        <div className="flex-1 text-center">
          <div className="w-8 h-8 rounded-full border-2 border-gray-400 text-gray-500 flex items-center justify-center mx-auto">💳</div>
          <p className="mt-2">Payment</p>
        </div>
      </div>

      <div className="text-center text-green-600 font-medium mb-6">
        ✅ Your save ₹200 on this order today!
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div className="lg:col-span-2 bg-white border rounded shadow-sm p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <img src={single} alt="Product" className="w-24 h-32 object-contain" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">
                <span className="text-orange-600">Herba Essential</span> – Hair Nutrition | 250g | Take 1 sachet daily after meals
              </h2>
              <ul className="text-sm text-gray-700 mt-2 space-y-1">
                <li>✅ Supports Stronger, Thicker Hair Growth</li>
                <li>✅ Helps Control Hairfall & Reverse Premature Greying</li>
              </ul>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">MRP:</p>
                  <p className="text-xl font-semibold">₹599</p>
                  <p className="text-green-600 text-sm">Your save ₹200</p>
                </div>
                <div className="flex items-center border rounded px-2 py-1 space-x-3">
                  <button onClick={handleDecrease} className="text-lg font-bold">−</button>
                  <span>{quantity}</span>
                  <button onClick={handleIncrease} className="text-lg font-bold text-orange-600">+</button>
                </div>
              </div>
            </div>
          </div>

        
          <div className="mt-6 border-t pt-4">
            <h3 className="font-semibold">Short Description:</h3>
            <p className="text-sm text-gray-600 mt-1">
              Herba Essential is a 100% organic hair nutrition supplement designed to reduce hair fall, promote growth, and reverse premature greying — naturally and effectively.
            </p>
          </div>
        </div>

        <div className="space-y-6">

          <div className="border rounded p-4 shadow-sm">
            <h3 className="font-semibold mb-2">Offers</h3>
            <div className="text-sm text-gray-700 space-y-1">
              <p>🟠 ₹200 saved with product price drop! <span className="text-green-600 font-medium ml-2">Applied</span></p>
              <p>🟠 ₹200 saved with product price drop! <span className="text-green-600 font-medium ml-2">Applied</span></p>
            </div>
            <div className="mt-4 flex">
              <input type="text" placeholder="Enter coupon code" className="border flex-1 p-2 rounded-l text-sm" />
              <button className="bg-orange-400 text-white px-4 rounded-r">Apply</button>
            </div>
          </div>

          <div className="border rounded p-4 shadow-sm">
            <h3 className="font-semibold mb-2">Price Details</h3>
            <div className="text-sm space-y-1 text-gray-800">
              <div className="flex justify-between"><span>Total MRP</span><span>₹599</span></div>
              <div className="flex justify-between"><span>Discount on MRP</span><span>₹599</span></div>
              <div className="flex justify-between"><span>Delivery Charges</span><span className="line-through text-gray-500">₹49</span> <span className="text-green-600">Free</span></div>
              <div className="flex justify-between font-semibold border-t pt-2"><span>Total</span><span>₹599</span></div>
            </div>
          </div>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded">
            Enter Address
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700 mt-10 max-w-5xl mx-auto border-t pt-6">
        <div className="flex items-center gap-2">
          <span>🚚</span>
          <div><strong>Free Shipping</strong><br />Free shipping on all your order</div>
        </div>
        <div className="flex items-center gap-2">
          <span>
             <img 
             alt='sng'/></span>
          <div><strong>Customer Support 24/7</strong><br />Instant access to Support</div>
        </div>
        <div className="flex items-center gap-2">
          <span>✅</span>
          <div><strong>100% Secure Payment</strong><br />We ensure your money is safe</div>
        </div>
        <div className="flex items-center gap-2">
          <span>💰</span>
          <div><strong>Money-Back Guarantee</strong><br />30 Days Money-Back Guarantee</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
