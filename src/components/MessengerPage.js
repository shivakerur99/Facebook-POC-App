import React from "react";
import SideBar from "./SideBar";
import Conversation from "./Conversation";
// import MessengerBox from "./MessengerBox";
import ProfileBox from "./ProfileBox";
import UserCard from "./UserCard";
import MessengerBox from "./MessengerBox";

const MessengerPage = () => {
  return (
    <div className="bg-white backdrop-opacity-8 w-auto h-screen">
      <div className="flex flex-col gap-4">
        <div className="flex">
          <SideBar />
          <Conversation />
          <MessengerBox name="Elon" />
          <div className="w-96">
            <ProfileBox name="Elon" onlineStatus="Online" />
            <UserCard
              firstname="Elon"
              email="Elon@richpanel.com"
              lastname="shivakerur"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessengerPage;
