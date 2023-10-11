import { useEffect } from "react";

export default function useKey(key, action) {
  useEffect(() => {
    function callback(e) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
        console.log("closing");
      }
    }
    document.addEventListener("keydown", callback);
    //cleanup function
    return function () {
      document.removeEventListener("keydown", callback);
    };
  }, [action, key]);
}
