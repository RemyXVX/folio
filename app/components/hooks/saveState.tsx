import { useState, useEffect } from 'react';

function useStoredState<T>(key: string, initialState: T) {
  const [state, setState] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState] as [T, React.Dispatch<React.SetStateAction<T>>];
}

export default  useStoredState