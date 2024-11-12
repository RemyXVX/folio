// import { useEffect } from 'react';
// import useStoredState from './saveState';

// function useLastPage(): () => void {
//   const [lastPage, setLastPage] = useStoredState<string>('lastPage', '/');

//   const updateLastPage = (newPage: string) => {
//     setLastPage(newPage);
//   };

//   useEffect(() => {
//     updateLastPage(window.location.pathname);
//   }, []);

//   useEffect(() => {
//     if (lastPage && lastPage !== window.location.pathname) {
//       window.history.pushState({}, '', lastPage);
//     }
//   }, [lastPage]);

//   return () => setLastPage('/');
// }

// export default useLastPage;