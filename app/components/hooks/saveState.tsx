// import React, { useState, useEffect } from 'react';

// function useStoredState<T>(key: string, initialState: T) {
//   const [state, setState] = useState<T>(() => {
//     try {
//       const storedValue = localStorage.getItem(key);
//       return storedValue ? JSON.parse(storedValue) : initialState;
//     } catch (error) {
//       console.error(`Error reading localStorage key '${key}":`, error);
//       return initialState;
//     }
//   });

//   useEffect(() => {
//     try {
//     localStorage.setItem(key, JSON.stringify(state));
//   } catch (error) {
//     console.error(`Error writing localStorage key '${key}":`, error);
//   }
// }, [key, state]);

//   return [state, setState] as [T, React.Dispatch<React.SetStateAction<T>>];
// }

// export default useStoredState;