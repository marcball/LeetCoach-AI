import React, { useRef, useEffect } from "react";

const ProblemBorder = ({ onDrag }) => {
  const isDragging = useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    onDrag(e.clientX); // CHECKS <-- / --> MOVEMENT (x-axis)
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

export default ProblemBorder;
