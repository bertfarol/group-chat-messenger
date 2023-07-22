import React, { useRef, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthenticationContextProvider";
import Avatar from "react-avatar";
import { Icon } from "@iconify/react";
import useClickOutside from "../../hooks/useClickOutside";

const ChatNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { displayName, handleSignOut } = useContext(AuthContext);

  const menuRef = useRef();

  useClickOutside(menuRef, () => {
   setShowMenu(false);
  });

  return (
    <nav className="flex items-center justify-end px-4 border-b select-none">
      <div ref={menuRef} className="relative cursor-pointer min-h-[65px] flex items-center">
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="flex items-center gap-4 px-2 py-1 rounded hover:bg-[#f8f8f8]"
        >
          <div className="font-bold">{displayName}</div>
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
        </div>
        {showMenu && (
          <div className="absolute right-0 w-[300px] top-full">
            <div className="relative py-1 bg-white rounded-lg shadow-standard">
              <div className="menu-arrow"></div>
              <div className="flex flex-col gap-2">
                <div
                  onClick={handleSignOut}
                  className="flex items-center  gap-3 p-2 min-h-[44px] mx-1 text-[15px] font-semibold text-center rounded hover:bg-[#f8f8f8]"
                >
                  <Icon
                    icon="uil:signout"
                    className="p-1.5 bg-[#f2f0f0] rounded-full w-7 h-7"
                  />
                  Log Out
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ChatNavbar;
