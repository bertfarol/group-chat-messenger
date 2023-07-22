import React, { useContext } from "react";
import UserItem from "./UserItem";
import { UserContext } from "../../context/UsersContextProvider";
import { AuthContext } from "../../context/AuthenticationContextProvider";
import UserNavbar from "../User/UserNavbar";

const UserList = () => {
  const { newAccountUsers } = useContext(UserContext);
  const { user } = useContext(AuthContext);

  return (
    <div className="w-[240px] border-r hidden md:inline-block">
      <UserNavbar />
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
