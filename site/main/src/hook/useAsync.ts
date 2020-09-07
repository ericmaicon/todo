import { useEffect, useCallback, useState } from 'react';

const useAsync = (asyncFunction: any, immediate = true) => {
  const [pending, setPending] = useState(false);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(
    (parameters: any = null) => {
      setPending(true);
      setValue(null);
      setError(null);
      return asyncFunction(parameters)
        .then((response: any) => setValue(response))
        .catch((anotherError: Error) => setError(anotherError))
        .finally(() => setPending(false));
    },
    [asyncFunction],
  );

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [immediate]);

  return {
    execute, pending, value, error,
  };
};

export default useAsync;
