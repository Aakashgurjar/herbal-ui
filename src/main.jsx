// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App.jsx";
// import { ChakraProvider } from "@chakra-ui/react";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <ChakraProvider>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </ChakraProvider>
//   </StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
// import { store } from "./redux/redux-store/store";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { PopupProvider } from "./context/PopupContext";

import App from "./App.jsx";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
 
 <React.StrictMode>
    <ChakraProvider  theme={theme}>
      <BrowserRouter>

      <PopupProvider>
       <App />
    </PopupProvider>
    
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
