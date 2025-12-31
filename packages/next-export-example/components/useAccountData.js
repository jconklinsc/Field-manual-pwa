import { useCallback, useEffect, useState } from 'react';
import { fetchAccountData, mutateAccountData } from './accountData';

export function useAccountData() {
  const [state, setState] = useState({
    status: 'loading',
    data: null,
    error: null
  });

  const loadAccountData = useCallback(() => {
    setState((prev) => ({ ...prev, status: 'loading', error: null }));

    return fetchAccountData()
      .then((data) => {
        setState({ status: 'success', data, error: null });
        return data;
      })
      .catch((error) => {
        setState({ status: 'error', data: null, error });
        return null;
      });
  }, []);

  useEffect(() => {
    let isMounted = true;

    fetchAccountData()
      .then((data) => {
        if (!isMounted) return;
        setState({ status: 'success', data, error: null });
      })
      .catch((error) => {
        if (!isMounted) return;
        setState({ status: 'error', data: null, error });
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' && state.status === 'success' && !state.data) {
      // eslint-disable-next-line no-console
      console.warn('Account data is undefined while rendering the account area.');
    }
  }, [state.data, state.status]);

  const mutate = useCallback((updater) => {
    try {
      const updated = mutateAccountData(updater);
      setState({ status: 'success', data: updated, error: null });
      return { ok: true, data: updated };
    } catch (error) {
      setState((prev) => ({ ...prev, status: 'error', error }));
      return { ok: false, error };
    }
  }, []);

  return {
    ...state,
    refresh: loadAccountData,
    mutate
  };
}
