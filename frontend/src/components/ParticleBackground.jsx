import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", onMouseMove);

    const COUNT = 90;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * (canvas.width || window.innerWidth),
      y: Math.random() * (canvas.height || window.innerHeight),
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 1.8 + 1.2,
      baseO: Math.random() * 0.4 + 0.2,
    }));

    // Brighter at edges, dimmer at horizontal center
    const getEdgeFactor = (px) => {
      const cx = px / canvas.width;
      return 0.1 + 0.9 * Math.abs(cx - 0.5) * 2;
    };

    // Fade to 0 inside the text exclusion ellipse, ramp back up outside it
    const getExclFactor = (px, py) => {
      const cx = canvas.width / 2;
      const cy = 325; // approximate center of hero text in canvas-space
      const rx = canvas.width * 0.3;
      const ry = 200;
      const nx = (px - cx) / rx;
      const ny = (py - cy) / ry;
      const ellipseDist = Math.sqrt(nx * nx + ny * ny);
      if (ellipseDist <= 1) return 0;
      const distPx = (ellipseDist - 1) * Math.min(rx, ry);
      return Math.min(1, distPx / 80);
    };

    const MOUSE_RADIUS = 110;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        // Mouse repulsion
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < MOUSE_RADIUS && mdist > 0) {
          const force = ((MOUSE_RADIUS - mdist) / MOUSE_RADIUS) * 0.08;
          p.vx += (mdx / mdist) * force;
          p.vy += (mdy / mdist) * force;
        }

        // Damp + gentle drift to restore natural motion after push
        p.vx = p.vx * 0.97 + (Math.random() - 0.5) * 0.02;
        p.vy = p.vy * 0.97 + (Math.random() - 0.5) * 0.02;

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 1.5) {
          p.vx = (p.vx / speed) * 1.5;
          p.vy = (p.vy / speed) * 1.5;
        }

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const opacity = p.baseO * getEdgeFactor(p.x) * getExclFactor(p.x, p.y);
        if (opacity < 0.005) continue;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${opacity})`;
        ctx.fill();
      }

      // Connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const exclMin = Math.min(
              getExclFactor(particles[i].x, particles[i].y),
              getExclFactor(particles[j].x, particles[j].y)
            );
            const edgeAvg = (getEdgeFactor(particles[i].x) + getEdgeFactor(particles[j].x)) / 2;
            const lineO = 0.1 * (1 - dist / 120) * exclMin * edgeAvg;
            if (lineO < 0.005) continue;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,255,255,${lineO})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
