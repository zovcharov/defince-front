import React, { useEffect } from 'react';

export default (config: { [key: string]: (event?: KeyboardEvent) => void }): void => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (config[e.key]) {
      config[e.key]();
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyPress);

    return () => {
      document.removeEventListener('keyup', handleKeyPress);
    };
  }, [config]);
};
