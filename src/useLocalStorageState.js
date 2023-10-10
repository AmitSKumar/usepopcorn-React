import { useState, useEffect } from "react";
export function useLocalStorageState(initialState, key) {
  // we can pass the callback function to intial value of state
  const [value, setValue] = useState(function () {
    // we need to parse because we will get string value
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
