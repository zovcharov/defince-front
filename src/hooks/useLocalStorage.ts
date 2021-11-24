import React, {useEffect, useState} from 'react';

const useLocalStorage = <T>(key: string, initial: any) => {
  const [value, setValue] = useState<T>(() => {
    const saved = window.localStorage.getItem(key);

    if (saved !== null) {
      return JSON.parse(saved);
    }

    return initial;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const saved = window.localStorage.getItem(key);

      if (saved !== null) {
        setValue(JSON.parse(saved));
      } else {
        setValue(initial);
      }
    }
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    };
  }, []);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
