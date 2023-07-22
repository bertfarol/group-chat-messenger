import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthenticationContextProvider';
import Avatar from "react-avatar";
import { Icon } from '@iconify/react';

const Navbar = () => {
  const { displayName, handleSignOut } = useContext(AuthContext);

  return (
    <nav className="flex items-center justify-between px-4 border-b select-none">
      <div className="font-bold flex items-center gap-2">
        <Icon
          icon="fluent:chat-mail-20-regular"
          className="h-7 w-7 text-[#0e53e4]"
        />
        <div className="text-[#0e53e4]">Messenger ni Bert</div>
      </div>

      <div className="relative flex items-center gap-4 py-3 cursor-pointer group">
        <div className="font-bold group-hover:text-black/60">{displayName}</div>
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
        <div className="absolute top-1 right-0 w-[170px] hidden group-hover:inline-block">
          <div className="p-4 mt-12 bg-white rounded shadow-standard ">
            <button
              onClick={handleSignOut}
              className="w-full px-4 py-2 text-sm font-medium text-center rounded bg-[#0e53e4] text-white hover:opacity-80 flex gap-2 items-center"
            >
              <Icon icon="ic:round-logout" className='w-5 h-5' />
              Log Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar