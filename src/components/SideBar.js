import React from "react";
import member from "../assets/images/member.png";
import trade from "../assets/images/trade.png";
import { useNavigate } from "react-router-dom";
import logout from "../assets/images/logout.png";
import richp from "../assets/images/richp.png";
import fd from "../assets/images/fd.jpg";
import dw from "../assets/images/dw.png";


const SideBar = () => {
 const navigate = useNavigate();
  const handleFacebookIntegration= ()=>{
    navigate("/end");
  }
  return (
    <div className="w-20 h-screen bg-[#004e96]">
      <div className="flex-col items-center justify-between">
        <div className="mx-4 flex-col">
          <img
            className="w-10 my-4 h-auto mx-auto md:mx-0"
            src={richp}
            alt="logo"
          />
          <img
            className="w-10 mt-8 bg-white my-2 h-auto mx-auto md:mx-0 transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300 hover:bg-slate-50 hover:bg-opacity-50 rounded-xl"
            src={dw}
            alt="logo"
          />
          <img
            className="w-10 mt-8 bg-white my-4 h-auto mx-auto md:mx-0 transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300 hover:bg-slate-50 hover:bg-opacity-50 rounded-xl"
            src={member}
            alt="logo"
          />
          <img
            className="w-10 mt-8 bg-blue-600 my-4 h-auto mx-auto md:mx-0 transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300 hover:bg-slate-50 hover:bg-opacity-50 rounded-xl"
            src={trade}
            alt="logo"
          />
          <button className="mt-4" onClick={handleFacebookIntegration}>
        <img
            className=" relative w-10 h-10 md:mx-0 bg-white border hover:border-green-600   rounded-full  transform motion-safe:hover:-translate-y-2 motion-safe:hover:scale-110 transition ease-in-out duration-400"
            src={logout}
            alt="logo"
          />
        </button>
        </div>
        <div className="mx-2 w-auto items-center mt-[286px] ml-4" >
          <>
          <div className="relative">

          <img
        className="w-10 h-10 md:mx-0  border hover:border-green-600   rounded-full  transform motion-safe:hover:-translate-y-2 motion-safe:hover:scale-110 transition ease-in-out duration-400"
        src={fd}
        alt="logo"
        />
      <span className="absolute block rounded-full bg-green-500 ring—2 ring-white h-2 w-2 md:h-3 md:w-3 top-[1px] right-[14px] m-0 custom-class">
</span>
        </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
