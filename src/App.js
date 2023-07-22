import "./App.css";
import { useContext} from "react";
import { AuthContext } from "./context/AuthenticationContextProvider";
import { Icon } from "@iconify/react";
import Messenger from "./components/Message/Messenger";
import Login from "./pages/Login";

function App() {
  const {
    user,
    authChecked,
  } = useContext(AuthContext);

  if (!authChecked) {
    return (
      <div className="absolute z-20 grid place-items-center w-24 h-24 bg-[#0e53e4] rounded shadow-standard place-content-center top-2/4 translate-y-[-80%] left-2/4 -translate-x-2/4 text-white">
        <Icon icon="tabler:loader-2" className="w-8 h-8 animate-spin" />
        <span className="mt-2 text-sm">Loading...</span>
      </div>
    );
  }

  if (user) {
    return <Messenger />;
  }

  return (
    <Login />
  );
}

export default App;
