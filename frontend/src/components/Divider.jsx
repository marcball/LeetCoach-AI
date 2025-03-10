import React, { useRef, useEffect, useCallback } from "react";

const DraggableDivider = ({ onDrag }) => {
  const isDragging = useRef(false);
  const lastX = useRef(null);
  
  const handleMouseDown = (e) => {
    isDragging.current = true;
    lastX.current = e.clientX;
  };
  
  const handleMouseMove = useCallback((e) => {
    if (!isDragging.current) return;
    
    if (lastX.current === e.clientX) return; // Prevents unnecessary updates
    
    requestAnimationFrame(() => {
      onDrag(e.clientX);
    });
  }, [onDrag]);
  
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
  }, [handleMouseMove]);

  return (
    <div
      onMouseDown={handleMouseDown}
      className="cursor-col-resize bg-neutral-600 hover:bg-neutral-400"
      style={{
        width: "5px",
        height: "100%",
        cursor: "col-resize",
        position: "absolute",
        left: "calc(50% - 2.5px)",
      }}
    />
  );
};

export default DraggableDivider;
