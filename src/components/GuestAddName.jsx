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
    <div className="fixed top-0 left-0 z-40 flex justify-center items-center w-full h-full bg-[#062462]/30">
      <form
        onSubmit={handleAddName}
        className="flex flex-col w-full max-w-lg gap-2 p-6 bg-white border rounded -mt-36"
      >
        <label htmlFor="name" className="font-medium">
          Set your name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-3 py-2 border rounded outline-none"
          placeholder="your name or nickname"
        />
        <button
          type="submit"
          className="px-2 py-2 text-white bg-[#0e53e4] rounded hover:opacity-80"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default GuestAddName