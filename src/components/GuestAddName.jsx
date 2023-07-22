import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthenticationContextProvider';

const GuestAddName = () => {
  const [name, setName] = useState("");
  const { addGuestName } = useContext(AuthContext);

  const handleAddName = (e) => {
    e.preventDefault();
    addGuestName(name);
  }

  return (
    <div className="fixed top-0 left-0 z-40 flex items-center justify-center w-full h-full px-4 bg-white/50">
      <form
        onSubmit={handleAddName}
        className="flex flex-col w-full max-w-lg gap-2 p-6 bg-white rounded-lg shadow-standard -mt-36"
      >
        <div className="font-semibold">
          Set your name
        </div>
        <div className="flex items-center gap-2">
          <div className="grow">
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded outline-none"
              placeholder="Your name or nickname"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-[#0e53e4] rounded hover:opacity-80"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default GuestAddName