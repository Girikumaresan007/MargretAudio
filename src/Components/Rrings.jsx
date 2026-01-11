// import React, { useEffect, useRef, useState } from "react";

// const CursorRings = () => {
//   const numRings = 8;
//   const ringRefs = useRef([]);
//   const positions = useRef(Array(numRings).fill(null).map(() => ({ x: 0, y: 0 })));
//   const velocities = useRef(Array(numRings).fill(null).map(() => ({ x: 0, y: 0 })));
//   const [mouseDown, setMouseDown] = useState(false);
//   const [trails, setTrails] = useState([]);

//   const cursor = useRef({
//     x: window.innerWidth / 2,
//     y: window.innerHeight / 2,
//   });

//   const lastCursor = useRef({ x: 0, y: 0 });
//   const cursorVelocity = useRef({ x: 0, y: 0 });

//   const baseSpring = 0.08;
//   const baseFriction = 0.85;
//   const magneticStrength = 0.02;
//   const turbulence = 0.3;

//   const getRingConfig = (index) => {
//     const progress = index / (numRings - 1);
//     return {
//       size: 40 - progress * 35,
//       thickness: 3 - progress * 1.8,
//       spring: baseSpring * (1 + progress * 0.5),
//       friction: baseFriction - progress * 0.05,
//       mass: 1 + progress * 2,
//       opacity: 0.9 - progress * 0.4,
//       blur: progress * 2,
//     };
//   };

//   const noise = useRef(Math.random() * 1000);

//   const perlin = (x) => {
//     const X = Math.floor(x) & 255;
//     x -= Math.floor(x);
//     const u = x * x * x * (x * (x * 6 - 15) + 10);
//     return Math.sin(X * 12.9898 + 78.233) * u;
//   };

//   const addTrail = () => {
//     const speed = Math.sqrt(
//       cursorVelocity.current.x ** 2 + cursorVelocity.current.y ** 2
//     );
//     if (speed > 2 && Math.random() > 0.7) {
//       const id = Date.now() + Math.random();
//       setTrails((prev) => [
//         ...prev.slice(-20),
//         {
//           id,
//           x: cursor.current.x,
//           y: cursor.current.y,
//           size: Math.random() * 4 + 2,
//           life: 1,
//         },
//       ]);
//     }
//   };

//   useEffect(() => {
//     const trailTimer = setInterval(() => {
//       setTrails((prev) =>
//         prev
//           .map((t) => ({ ...t, life: t.life - 0.05 }))
//           .filter((t) => t.life > 0)
//       );
//     }, 50);
//     return () => clearInterval(trailTimer);
//   }, []);

//   useEffect(() => {
//     const handleMouseDown = () => setMouseDown(true);
//     const handleMouseUp = () => setMouseDown(false);

//     const handleMouseMove = (e) => {
//       lastCursor.current = { ...cursor.current };
//       cursor.current.x = e.clientX;
//       cursor.current.y = e.clientY;

//       cursorVelocity.current.x =
//         cursor.current.x - lastCursor.current.x;
//       cursorVelocity.current.y =
//         cursor.current.y - lastCursor.current.y;

//       addTrail();
//     };

//     const animate = () => {
//       noise.current += 0.005;

//       positions.current.forEach((pos, i) => {
//         const config = getRingConfig(i);
//         let targetX, targetY;

//         if (i === 0) {
//           targetX = cursor.current.x;
//           targetY = cursor.current.y;
//         } else {
//           const prev = positions.current[i - 1];
//           targetX = prev.x;
//           targetY = prev.y;
//         }

//         velocities.current[i].x +=
//           (targetX - pos.x) * config.spring;
//         velocities.current[i].y +=
//           (targetY - pos.y) * config.spring;

//         velocities.current[i].x *= config.friction;
//         velocities.current[i].y *= config.friction;

//         pos.x += velocities.current[i].x;
//         pos.y += velocities.current[i].y;
//       });

//       ringRefs.current.forEach((ring, i) => {
//         if (!ring) return;
//         const pos = positions.current[i];
//         const config = getRingConfig(i);

//         ring.style.transform = `translate3d(
//           ${pos.x - config.size / 2}px,
//           ${pos.y - config.size / 2}px,
//           0
//         )`;
//       });

//       requestAnimationFrame(animate);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mousedown", handleMouseDown);
//     window.addEventListener("mouseup", handleMouseUp);

//     animate();

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   return (
//     <>
//       {trails.map((trail) => (
//         <div
//           key={trail.id}
//           style={{
//             position: "fixed",
//             left: trail.x,
//             top: trail.y,
//             width: trail.size,
//             height: trail.size,
//             background: "cyan",
//             borderRadius: "50%",
//             pointerEvents: "none",
//             opacity: trail.life,
//             zIndex: 9998,
//             transform: "translate(-50%, -50%)",
//           }}
//         />
//       ))}

//       {Array(numRings)
//         .fill(null)
//         .map((_, i) => {
//           const config = getRingConfig(i);
//           return (
//             <div
//               key={i}
//               ref={(el) => (ringRefs.current[i] = el)}
//               style={{
//                 position: "fixed",
//                 width: config.size,
//                 height: config.size,
//                 border: `${config.thickness}px solid cyan`,
//                 borderRadius: "50%",
//                 pointerEvents: "none",
//                 zIndex: 9999,
//               }}
//             />
//           );
//         })}
//     </>
//   );
// };

// export default CursorRings;
