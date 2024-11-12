import { useEffect } from 'react';
import { useStoredState } from './saveState';
import { useHistory, useLocation } from 'react-router-dom';

function useLastPage() {
  const [lastPage, setLastPage] = useStoredState<string>('lastPage', '/');
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setLastPage(location.pathname);
  }, [location.pathname, setLastPage]);

  useEffect(() => {
    if (lastPage && lastPage !== location.pathname) {
      history.push(lastPage);
    }
  }, [lastPage, history, location.pathname]);

  return setLastPage;
}

export default useLastPage;