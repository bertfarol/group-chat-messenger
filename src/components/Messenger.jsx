import React, { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../context/AuthenticationContextProvider";
import UserList from "./UserList";
import ChatContainer from "./ChatContainer";
import GuestAddName from "./GuestAddName";

const Messenger = () => {
  const { displayName } = useContext(AuthContext);

  return (
    <div className="mx-auto overflow-hidden border max-w-7xl lg:shadow-standard lg:rounded-lg lg:mt-14">
      <Navbar />
      <div className="flex">
        <UserList />
        <div className="grow">
          <ChatContainer />
        </div>
      </div>
      {!displayName && <GuestAddName />}
    </div>
  );
};

export default Messenger;
