import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add("active");
        });
      },
      { threshold: 0.15 }
    );

    items.forEach(item => observer.observe(item));
  }, []);
}
