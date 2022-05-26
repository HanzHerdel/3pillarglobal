import { useState, useEffect } from "react";
export const useIntersection = (ref: any) => {
console.log('ref: ', ref);
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) =>{
    return setIntersecting(entry.isIntersecting)}
  );

  useEffect(() => {
    ref.current && observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref.current]);

  return isIntersecting;
};
