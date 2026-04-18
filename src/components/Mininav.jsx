import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import toast from "react-hot-toast";



const Mininav = () => {

  const [codecpy , setCodeCpy] = useState("HERBA200");
  const [copied , setCopied ] = useState(false);


  const handleCopy = async( ) => {

    try{
      await navigator.clipboard.writeText(codecpy);
      setCopied(true);
      console.log("code cpy");
      toast.success("Copied code!");

      setTimeout(() => {
        setCopied(false);
      }, 3000);

    }
    catch(error){
      console.log("failed to copy:" , error );
    }
  }

  return (
    <div className="h-10 w-full bg-[#C8C45B] flex justify-center  ">

      <p className="pt-1"> 🎉 FLAT ₹100 Use code:  {codecpy}    🚀 </p>

      <p className="m-2 ml-3 cursor-pointer w-4 h-5"> 
         <FaRegCopy onClick={handleCopy} className="bg-[#C8C45B] w-7 h-5 text-gray-700" />
      </p>

    </div>
  );
};

export default Mininav;
