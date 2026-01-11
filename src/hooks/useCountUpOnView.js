import { useEffect, useRef, useState } from "react";

const useCountUpOnView = (target, duration = 3000) => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);

          let start = 0;
          const increment = Math.ceil(target / (duration / 16));

          const counter = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(counter);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target, duration, hasStarted]);

  return { count, ref };
};

export default useCountUpOnView;
