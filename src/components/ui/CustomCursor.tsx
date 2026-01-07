"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.getAttribute("role") === "button" ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovering(isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible]);

  // Animate circle to follow cursor with delay
  useEffect(() => {
    const animate = () => {
      setCirclePosition((prev) => ({
        x: prev.x + (cursorPosition.x - prev.x) * 0.15,
        y: prev.y + (cursorPosition.y - prev.y) * 0.15,
      }));
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [cursorPosition]);

  // Hide on mobile/touch devices
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <>
      {/* Connecting Arm (Line from circle center to cursor) */}
      <svg
        className="fixed pointer-events-none z-[9998] hidden md:block"
        style={{
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <line
          x1={circlePosition.x}
          y1={circlePosition.y}
          x2={cursorPosition.x}
          y2={cursorPosition.y}
          stroke="rgba(0, 0, 0, 0.2)"
          strokeWidth="1"
        />
      </svg>

      {/* Circle */}
      <div
        className="custom-cursor hidden md:flex"
        style={{
          left: circlePosition.x - 60,
          top: circlePosition.y - 60,
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Cursor Pointer at actual mouse position */}
      <div
        className="fixed pointer-events-none z-[10000] hidden md:block"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          opacity: isVisible ? 1 : 0,
          transform: "translate(-50%, -50%)",
        }}
      >
        {isHovering ? (
          // Hand pointer when hovering over clickable elements
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M7.5 12.5V10.5C7.5 9.4 8.4 8.5 9.5 8.5C10.6 8.5 11.5 9.4 11.5 10.5V4C11.5 2.9 12.4 2 13.5 2C14.6 2 15.5 2.9 15.5 4V10.5C15.5 9.4 16.4 8.5 17.5 8.5C18.6 8.5 19.5 9.4 19.5 10.5V13.5C19.5 13.5 19.5 9.5 21.5 9.5C22.6 9.5 23.5 10.4 23.5 11.5V16C23.5 19.87 20.37 23 16.5 23H14C10.13 23 7 19.87 7 16V14.5"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="white"
            />
            <path
              d="M11.5 10.5V4C11.5 2.9 12.4 2 13.5 2C14.6 2 15.5 2.9 15.5 4V10.5"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="white"
            />
          </svg>
        ) : (
          // Arrow pointer for normal cursor
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M2 2L18 10L9 11L6 18L2 2Z"
              fill="rgba(0, 0, 0, 0.6)"
              stroke="white"
              strokeWidth="1"
            />
          </svg>
        )}
      </div>
    </>
  );
}
