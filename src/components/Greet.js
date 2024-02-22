import React from "react";
import { useNavigate } from "react-router-dom";

const Greet = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    navigate("/");
  };

  return (
    <div className="absolute w-screen px-8 py-4 z-10 bg-gradient-to-b flex flex-col md:flex-row items-center md:justify-between ">
        <div className="flex justify-end items-center">
          <p className="hidden md:block m-2 text-white text-xl">
            Hi,
          </p>
          <button
            className="mx-2 mt-4 md:mt-0 md:p-2 bg-white hover:bg-gray-400 rounded-lg"
            onClick={handleSignOut}
          >
            Signout
          </button>
        </div>
      
    </div>
  );
};

export default Greet;

