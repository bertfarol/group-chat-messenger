import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthenticationContextProvider'
const Navbar = () => {
  const { displayName, profilePic, handleSignOut } = useContext(AuthContext);

  return (
    <nav className="flex items-center justify-between px-4 bg-black">
      <div className="font-bold text-white">Group Chat</div>

      <div className="flex gap-4 items-center py-3 hover:bg-white/10 cursor-pointer relative group">
        <div className="text-white font-bold">{displayName}</div>
        <div className="h-7 w-7 rounded-full overflow-hidden">
          <img src={profilePic} alt={displayName} className="w-full h-full" />
        </div>
        {/* hover menu */}
        <div className="absolute top-1 right-0 w-[170px] hidden group-hover:inline-block">
          <div className="shadow-standard p-4 bg-white mt-12  rounded ">
            <button
              onClick={handleSignOut}
              className="text-sm bg-zinc-200 px-4 py-2 rounded text-center hover:bg-zinc-300 font-medium w-full"
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