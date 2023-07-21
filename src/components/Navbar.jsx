import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthenticationContextProvider'
const Navbar = () => {
  const { displayName, profilePic, handleSignOut } = useContext(AuthContext);

  return (
    <nav className="flex items-center justify-between px-4 bg-black">
      <div className="font-bold text-white">Group Chat</div>

      <div className="relative flex items-center gap-4 py-3 cursor-pointer hover:bg-white/10 group">
        <div className="font-bold text-white">{!displayName ? "Guest" : displayName}</div>
        <div className="overflow-hidden bg-white rounded-full h-7 w-7">
          <img src={profilePic} alt={displayName} className="w-full h-full" />
        </div>
        {/* hover menu */}
        <div className="absolute top-1 right-0 w-[170px] hidden group-hover:inline-block">
          <div className="p-4 mt-12 bg-white rounded shadow-standard ">
            <button
              onClick={handleSignOut}
              className="w-full px-4 py-2 text-sm font-medium text-center rounded bg-zinc-200 hover:bg-zinc-300"
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