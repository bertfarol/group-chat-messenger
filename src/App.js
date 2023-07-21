import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./context/AuthenticationContextProvider";
import ChatBox from "./components/ChatBox";
import { Icon } from "@iconify/react";

function App() {
  const {
    signInWithFacebook,
    signInAsGuest,
    user,
    authChecked,
  } = useContext(AuthContext);

  if (!authChecked) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <ChatBox />;
  }

  return (
    <div className="grid h-screen App place-items-center">
      <div className="flex flex-col gap-2">
        <button
          onClick={signInWithFacebook}
          className="flex items-center gap-2 px-4 py-2 text-white font-medium border rounded bg-[#3b5998]"
        >
          <Icon icon="uil:facebook" className="w-5 h-5 border-none" />
          Sign in with Facebook
        </button>
        <button
          onClick={signInAsGuest}
          className="flex items-center gap-2 px-4 py-2 font-medium border rounded bg-[#f4b400] text-white"
        >
          <Icon icon="mdi:user-outline" className="w-5 h-5" />
          Continue as guest
        </button>
      </div>
    </div>
  );
}

export default App;
