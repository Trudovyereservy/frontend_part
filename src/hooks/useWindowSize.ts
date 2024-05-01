import { useEffect, useState } from 'react';

function useWindowSize() {
  // const [width, setWidth] = useState(window.innerWidth);
  const [width, setWidth] = useState({undefined});

  useEffect(() => {
    if (typeof window !== 'undefined') {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }
  }, []);

  return width;
}

export default useWindowSize;
