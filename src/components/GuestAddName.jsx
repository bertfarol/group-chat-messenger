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
    <div className="fixed top-0 left-0 z-40 grid w-full h-full bg-black/20 place-items-center">
      <form
        onSubmit={handleAddName}
        className="flex flex-col w-full max-w-lg gap-2 p-6 bg-white border rounded"
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
          type='submit'
          className="px-2 py-2 text-white bg-black rounded hover:bg-black/80"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default GuestAddName