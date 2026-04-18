import { createContext, useState } from "react";

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  
  const [otpWindow, setOtpWindow] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);
  
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
  
    const handleLogin = () => {
      console.log("loggedin successfully");
      setIsLoggedIn(true);
      setShowProfileDropdown(false);
    };
  
    const handleLogout = () => {
      console.log("logout successfully");
      setIsLoggedIn(false);
      setUser(null);
    };
  
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  return (
    <PopupContext.Provider value={{ showProfileDropdown, setShowProfileDropdown , showPopup, setShowPopup, user , isLoggedIn ,  handlePopup, closePopup , handleLogin , handleLogout , 
      setOtpWindow , otpWindow  }}>
      {children}
    </PopupContext.Provider>
  );
};
