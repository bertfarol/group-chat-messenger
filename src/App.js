import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./context/AuthenticationContextProvider";
import ChatBox from "./components/ChatBox";
import { Icon } from "@iconify/react";

function App() {
  const {
    signInWithFacebook,
    user,
    authChecked,
  } = useContext(AuthContext);

  if (!authChecked) {
    return <div>Loading...</div>;
  }

  if (user) {
    return (
      <>
        <ChatBox />
      </>
    );
  }

  return (
    <div className="App grid place-items-center h-screen">
      <button onClick={signInWithFacebook} className="px-4 py-2 border rounded flex items-center gap-2 font-medium hover:bg-zinc-100">
        <Icon icon="devicon:facebook" className="w-5 h-5"/>
        Login with Facebook
      </button>
    </div>
  );
}

export default App;
