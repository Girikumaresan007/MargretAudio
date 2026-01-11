import { useEffect, useRef, useState } from "react";

const useCountUpOnView = (target, speed = 20) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        let current = 0;
        const interval = setInterval(() => {
          current += Math.ceil(target / 50);
          if (current >= target) {
            setCount(target);
            clearInterval(interval);
          } else {
            setCount(current);
          }
        }, speed);

        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target, speed]);

  return { ref, count };
};

export default useCountUpOnView;
