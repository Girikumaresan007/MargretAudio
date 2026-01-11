// src/components/Gallery.jsx
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Gallery.css";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  useEffect(() => {
    let iteration = 0;
    const spacing = 0.1;
    const snap = gsap.utils.snap(spacing);
    const cards = gsap.utils.toArray(".cards li");

    const seamlessLoop = buildSeamlessLoop(cards, spacing);

    const scrub = gsap.to(seamlessLoop, {
      totalTime: 0,
      duration: 0.5,
      ease: "power3",
      paused: true,
    });

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "+=3000",
      pin: ".gallery",
      onUpdate(self) {
        if (self.progress === 1 && self.direction > 0 && !self.wrapping) {
          wrapForward(self);
        } else if (self.progress < 0.00001 && self.direction < 0 && !self.wrapping) {
          wrapBackward(self);
        } else {
          scrub.vars.totalTime = snap(
            (iteration + self.progress) * seamlessLoop.duration()
          );
          scrub.invalidate().restart();
          self.wrapping = false;
        }
      },
    });

    function wrapForward(trigger) {
      iteration++;
      trigger.wrapping = true;
      trigger.scroll(trigger.start + 1);
    }

    function wrapBackward(trigger) {
      iteration--;
      if (iteration < 0) {
        iteration = 9;
        seamlessLoop.totalTime(
          seamlessLoop.totalTime() + seamlessLoop.duration() * 10
        );
        scrub.pause();
      }
      trigger.wrapping = true;
      trigger.scroll(trigger.end - 1);
    }

    function scrubTo(totalTime) {
      const progress =
        (totalTime - seamlessLoop.duration() * iteration) /
        seamlessLoop.duration();

      if (progress > 1) wrapForward(trigger);
      else if (progress < 0) wrapBackward(trigger);
      else trigger.scroll(trigger.start + progress * (trigger.end - trigger.start));
    }

    document.querySelector(".next").onclick = () =>
      scrubTo(scrub.vars.totalTime + spacing);
    document.querySelector(".prev").onclick = () =>
      scrubTo(scrub.vars.totalTime - spacing);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <div className="gallery">
        <ul className="cards">
          {Array.from({ length: 31 }).map((_, i) => (
            <li className="card" key={i}>{i}</li>
          ))}
        </ul>

        <div className="actions">
          <button className="prev">◀ Prev</button>
          <button className="next">Next ▶</button>
        </div>
      </div>


    </>
  );
};

export default Gallery;

/* ===== HELPERS (unchanged logic) ===== */

function buildSeamlessLoop(items, spacing) {
  const overlap = Math.ceil(1 / spacing);
  const startTime = items.length * spacing + 0.5;
  const loopTime = (items.length + overlap) * spacing + 1;

  const rawSequence = gsap.timeline({ paused: true });
  const seamlessLoop = gsap.timeline({ paused: true, repeat: -1 });

  gsap.set(items, { xPercent: 300, opacity: 0, scale: 0 });

  for (let i = 0; i < items.length + overlap * 2; i++) {
    const item = items[i % items.length];
    const time = i * spacing;

    rawSequence
      .fromTo(
        item,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          zIndex: 100,
          duration: 0.5,
          yoyo: true,
          repeat: 1,
          ease: "power1.in",
          immediateRender: false,
        },
        time
      )
      .fromTo(
        item,
        { xPercent: 300 },
        { xPercent: -300, duration: 1, ease: "none", immediateRender: false },
        time
      );
  }

  rawSequence.time(startTime);

  seamlessLoop
    .to(rawSequence, {
      time: loopTime,
      duration: loopTime - startTime,
      ease: "none",
    })
    .fromTo(
      rawSequence,
      { time: overlap * spacing + 1 },
      {
        time: startTime,
        duration: startTime - (overlap * spacing + 1),
        immediateRender: false,
        ease: "none",
      }
    );

  return seamlessLoop;
}

function refreshCards() {
  document.querySelectorAll(".card").forEach((card, index) => {
    card.style.background = `url('https://picsum.photos/800/600?random=${
      index + 1
    }&t=${Date.now()}') center/cover no-repeat`;
  });
}
