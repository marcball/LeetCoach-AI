import React, { useRef, useEffect } from "react";

const ProblemDivider = ({ onDrag }) => {
  const isDragging = useRef(false);
  const lastX = useRef(null);
  

  const handleMouseDown = () => {
    isDragging.current = true;
    lastX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    if (lastX.current === e.clientX) return; // Prevents unnecessary updates
    
    requestAnimationFrame(() => {
      onDrag(e.clientX);
    });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      onMouseDown={handleMouseDown}
      className="cursor-col-resize bg-neutral-600 hover:bg-neutral-400"
      style={{
        width: "5px",
        height: "100%",
        cursor: "col-resize",
      }}
    />
  );
};

export default ProblemDivider;
