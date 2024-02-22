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
          <MessengerBox name="Harika" />
          <div className="w-96">
            <ProfileBox name="Harika" onlineStatus="Online" />
            <UserCard
              firstname="Harika"
              email="harika@richpanel.com"
              lastname="Reddy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessengerPage;
