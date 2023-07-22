import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthenticationContextProvider';
import Avatar from "react-avatar";

const Navbar = () => {
  const { displayName, handleSignOut } = useContext(AuthContext);

  return (
    <nav className="flex items-center justify-between px-4 border-b select-none">
      <div className="font-bold ">Messenger ni Bert</div>

      <div className="relative flex items-center gap-4 py-3 cursor-pointer group">
        <div className="font-bold group-hover:text-black/60">
          {displayName}
        </div>
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
        {/* <div className="overflow-hidden bg-white rounded-full h-7 w-7">
          <img src={profilePic} alt={displayName} className="w-full h-full" />
        </div> */}
        {/* hover menu */}
        <div className="absolute top-1 right-0 w-[170px] hidden group-hover:inline-block">
          <div className="p-4 mt-12 bg-white rounded shadow-standard ">
            <button
              onClick={handleSignOut}
              className="w-full px-4 py-2 text-sm font-medium text-center rounded bg-zinc-200 hover:bg-zinc-300 "
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar