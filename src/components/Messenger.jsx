import React, { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../context/AuthenticationContextProvider";
import UserList from "./UserList";
import ChatContainer from "./ChatContainer";
import GuestAddName from "./GuestAddName";

const Messenger = () => {
  const { displayName } = useContext(AuthContext);

  return (
    <div className="mx-auto max-w-7xl mt-14 px-4">
      <div className="border lg:shadow-standard rounded-lg overflow-hidden">
        <Navbar />
        <div className="flex">
          <UserList />
          <div className="grow">
            <ChatContainer />
          </div>
        </div>
        {!displayName && <GuestAddName />}
      </div>
    </div>
  );
};

export default Messenger;
