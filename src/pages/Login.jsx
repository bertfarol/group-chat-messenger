import { Icon } from '@iconify/react';
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthenticationContextProvider';

const Login = () => {
  const { loading, signInWithFacebook, signInAsGuest } =
    useContext(AuthContext);
  
  return (
    <div className="flex h-screen">
      <div className="hidden grow login-overlay md:block">
        <img
          src="./login-bg.jpg"
          alt="Chatting people"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute z-40 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <Icon
            icon="fluent:chat-mail-20-filled"
            className="h-[200px] w-[200px] text-white"
          />
          <p className="text-4xl font-bold text-white">Messenger</p>
          <div className="flex flex-row items-start justify-end gap-2">
            <p className="text-base font-bold text-white">ni</p>
            <p className="text-4xl font-bold text-white">Bert</p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center w-full md:w-[500px] md:min-w-[400px] p-6 justify-center md:justify-start">
        {loading ? (
          <div className="absolute z-20 grid w-12 h-12 bg-white rounded shadow-lg place-content-center top-2/4 -translate-y-2/4">
            <Icon icon="tabler:loader-2" className="w-5 h-5 animate-spin" />
          </div>
        ) : (
          ""
        )}
        <Icon
          icon="fluent:chat-mail-20-filled"
          className="h-24 w-24 md:mt-40 text-[#0e53e4]"
        />
        <h1 className="mt-12 text-3xl font-bold text-center md:text-4xl">
          Chat with Friends
        </h1>
        <p className="mt-2 font-bold text-black/70">
          Sign in to join the group.
        </p>
        <div className="flex flex-col max-w-xs gap-4 mt-10 xs:px-6 ">
          <button
            onClick={signInWithFacebook}
            className="flex items-center gap-3 px-4 py-2 text-white font-medium rounded bg-[#3b5998] hover:opacity-80"
          >
            <Icon icon="uil:facebook" className="w-5 h-5 border-none" />
            Sign in with Facebook
          </button>
          <button
            onClick={signInAsGuest}
            className="flex items-center gap-3 px-4 py-2 font-medium rounded bg-[#f4b400] text-white hover:opacity-80"
          >
            <Icon icon="mdi:user-outline" className="w-5 h-5" />
            Continue as guest
          </button>
          <p className="text-xs leading-normal text-black/80">
            By signing in, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login