import React from "react";
import Avatar from "react-avatar";

const UserItem = ({ data }) => {
  const { displayName, isTyping, avatarColor } = data;

   return (
    <div className="flex items-center w-full gap-2 px-6 py-3 select-none ">
      <Avatar color={avatarColor} name={displayName} size="40" round="40px" />
      <div className="flex flex-col font-medium grow text-[15px] capitalize">
        {displayName}
        <span className="text-xs text-black/70">Online</span>
      </div>
      <div className="text-xs text-black/70 animate-pulse">
        {isTyping ? "Typing..." : ""}
      </div>
    </div>
  );
};

export default UserItem;
