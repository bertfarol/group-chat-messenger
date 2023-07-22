import React from "react";
import { Icon } from "@iconify/react";

const UserNavbar = () => {

  return (
    <nav className="flex items-center px-4 mb-4 border-b select-none">
      <div className="flex items-center gap-2 font-bold min-h-[65px]">
        <Icon
          icon="fluent:chat-mail-20-filled"
          className="h-7 w-7 text-[#0e53e4]"
        />
        <div className="text-[#0e53e4]">Messenger ni Bert</div>
      </div>
    </nav>
  );
};

export default UserNavbar;
