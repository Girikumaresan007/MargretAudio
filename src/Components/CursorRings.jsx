// src/components/CursorRings.jsx
import React, { useEffect, useRef } from "react";
import "./CursorRings.css";

const CursorRings = () => {
  const ringRefs = useRef([]);
  const positions = useRef([
    { x: 0, y: 0 }, // outer ring
    { x: 0, y: 0 }, // inner ring
  ]);

  // SPEED CONTROL
  const speeds = [0.03, 0.02];

  // SPACING CONTROL
  const spacing = 160;

  const ringSizes = [30, 6];

  const cursor = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const isMoving = useRef(false);
  const idleTimeout = useRef(null);

const colorPalette = [
  "rgba(138, 43, 226, 0.7)", // Blue Violet
  "rgba(186, 85, 211, 0.7)", // Medium Orchid
  "rgba(148, 0, 211, 0.7)",  // Dark Violet
  "rgba(221, 160, 221, 0.7)", // Plum
];


  const colorChangeInterval = 6000;

  /* 🔁 AUTO COLOR CHANGE */
 useEffect(() => {
  let colorIndex = 0;

  const changeColors = () => {
    colorIndex = (colorIndex + 1) % colorPalette.length;

    ringRefs.current.forEach((ring, i) => {
      if (!ring) return;
      const alpha = i === 0 ? 0.7 : 0.4;
      ring.style.borderColor = colorPalette[colorIndex].replace("0.7", alpha);
    });
  };

  const timer = setInterval(changeColors, colorChangeInterval);
  return () => clearInterval(timer);
}, [colorPalette]);


  /* 🖱️ MOUSE + ANIMATION */
  useEffect(() => {
    const handleMouseMove = (e) => {
      cursor.current.x = e.clientX;
      cursor.current.y = e.clientY;
      isMoving.current = true;

      clearTimeout(idleTimeout.current);
      idleTimeout.current = setTimeout(() => {
        isMoving.current = false;
      }, 100);
    };

    const animate = () => {
      // OUTER RING
      const dx0 = cursor.current.x - positions.current[0].x;
      const dy0 = cursor.current.y - positions.current[0].y;
      positions.current[0].x += dx0 * speeds[0];
      positions.current[0].y += dy0 * speeds[0];

      // INNER RING (TRAIL)
      const dx = positions.current[0].x - positions.current[1].x;
      const dy = positions.current[0].y - positions.current[1].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > spacing) {
        const angle = Math.atan2(dy, dx);
        positions.current[1].x +=
          (positions.current[0].x -
            Math.cos(angle) * spacing -
            positions.current[1].x) *
          speeds[1];
        positions.current[1].y +=
          (positions.current[0].y -
            Math.sin(angle) * spacing -
            positions.current[1].y) *
          speeds[1];
      } else {
        positions.current[1].x +=
          (cursor.current.x - positions.current[1].x) * speeds[1];
        positions.current[1].y +=
          (cursor.current.y - positions.current[1].y) * speeds[1];
      }

      // SLOW RETURN ON IDLE
      if (!isMoving.current) {
        positions.current.forEach((pos, i) => {
          const returnSpeed = speeds[i] * 0.6;
          pos.x += (cursor.current.x - pos.x) * returnSpeed;
          pos.y += (cursor.current.y - pos.y) * returnSpeed;
        });
      }

      // APPLY TRANSFORM
      ringRefs.current.forEach((ring, i) => {
        if (!ring) return;
        ring.style.transform = `translate3d(
          ${positions.current[i].x - ring.offsetWidth / 2}px,
          ${positions.current[i].y - ring.offsetHeight / 2}px,
          0
        )`;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [speeds, spacing]);

  return (
    <>
      {ringSizes.map((size, i) => (
        <div
          key={i}
          ref={(el) => (ringRefs.current[i] = el)}
          className={`cursor-ring ring-${i}`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            borderColor: colorPalette[i],
          }}
        />
      ))}
    </>
  );
};

export default CursorRings;
