import React from "react";
import Avatar from "react-avatar";

const UserItem = ({ data }) => {
  const { displayName, isTyping } = data;

  return (
    <div className="flex items-center w-full gap-2 px-6 py-3 select-none ">
      <Avatar
        color={Avatar.getRandomColor("sitebase", [
          "#AF2D2D",
          "#1c3bec",
          "#ffa000",
          "#5500e1",
          "#52d7e7",
          "#ff598c",
          "#f4a261",
          "#762575",
        ])}
        name={displayName}
        size="40"
        round="40px"
      />
      <div className="flex flex-col font-medium grow ">
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
