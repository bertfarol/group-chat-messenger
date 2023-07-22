import React, { useContext } from "react";
import UserItem from "./UserItem";
import { UserContext } from "../context/UsersContextProvider";
import { AuthContext } from "../context/AuthenticationContextProvider";

const UserList = () => {
  const { newAccountUsers } = useContext(UserContext);
  const { user } = useContext(AuthContext);

  console.log("newAccountUsers: ", newAccountUsers);

  return (
    <div className="w-[240px] border-r py-4">
      {newAccountUsers.map((newUser) => {
        if (newUser.uid !== user) {
          return <UserItem key={newUser.uid} data={newUser} />;
        }
        return null;
      })}
    </div>
  );
};

export default UserList;
