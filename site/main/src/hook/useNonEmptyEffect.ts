import { useEffect } from 'react';

const useNonEmptyEffect = (func: any, data: ReadonlyArray<any> = []) => {
  useEffect(() => {
    if (data[0]) {
      func();
    }
  }, data);
};

export default useNonEmptyEffect;
