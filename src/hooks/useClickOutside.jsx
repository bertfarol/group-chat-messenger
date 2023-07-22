import { useEffect } from "react";

const useClickOutside = ( ref, triggerFunction ) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      triggerFunction();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    }
  });
};

export default useClickOutside;



