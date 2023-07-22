import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthenticationContextProvider";
import UserList from "../User/UserList";
import ChatContainer from "../Chat/ChatContainer";
import GuestAddName from "../GuestAddName";

const Messenger = () => {
  const { displayName } = useContext(AuthContext);

  return (
    <>
      <div className="flex h-full">
        <UserList />
        <div className="grow">
          <ChatContainer />
        </div>
      </div>
      {!displayName && <GuestAddName />}
    </>
  );
};

export default Messenger;
