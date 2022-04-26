import { useState, useCallback, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../lib//util";

export default function useLocalStorageState<T>(
  key: string,
  defaultValue: T,
  noLocalStorage?: boolean
): [T, (newValue: T) => void] {
  const [value, setValue] = useState(defaultValue);
  const updateValue = useCallback(
    (newValue: T) => {
      if (!noLocalStorage) {
        try {
          setLocalStorage(key, newValue);
        } catch (error) {
          console.error(error);
        }
      }
      setValue(newValue);
    },
    [key, noLocalStorage]
  );

  // Avoid server rendering issue with 'localStorage' by checking after render
  useEffect(() => {
    if (!noLocalStorage) {
      setValue(getLocalStorage(key, defaultValue));
    }
  }, []);

  return [value, updateValue];
}
