import { useEffect, useRef } from "react";
import "./particleText.css";

const ParticleText = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let animationStarted = false;

    const mouse = {
      x: undefined,
      y: undefined,
      radius: 100,
    };

    // ✅ Proper canvas sizing (NO nested function bug)
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;

      if (window.innerWidth < 768) {
        canvas.height = 160;  // tighter mobile
      } else {
        canvas.height = 250;  // enough space for desktop FU
      }
    };

    setCanvasSize();

    const text = "FU";
    const fontSize = window.innerWidth < 768 ? 130 : 190;

    // Draw text to extract pixels
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#A0D800";
    ctx.font = `700 ${fontSize}px Poppins`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // 👇 slight vertical adjustment to avoid top cut
    ctx.fillText(text, canvas.width / 2, canvas.height / 2 + 10);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles = [];

    for (let y = 0; y < imageData.height; y += 3) {
      for (let x = 0; x < imageData.width; x += 3) {
        const index = (y * imageData.width + x) * 4;
        if (imageData.data[index + 3] > 150) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            baseX: x,
            baseY: y,
            size: 2,
            density: Math.random() * 20 + 5,
          });
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        if (mouse.x !== undefined && mouse.y !== undefined) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            p.x -= Math.cos(angle) * force * p.density;
            p.y -= Math.sin(angle) * force * p.density;
          } else {
            p.x += (p.baseX - p.x) * 0.05;
            p.y += (p.baseY - p.y) * 0.05;
          }
        } else {
          p.x += (p.baseX - p.x) * 0.05;
          p.y += (p.baseY - p.y) * 0.05;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "#A0D800";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationStarted) {
          animationStarted = true;
          animate();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(sectionRef.current);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", setCanvasSize);

    return () => {
      observer.disconnect();
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="particle-section">
      <canvas ref={canvasRef} />
    </section>
  );
};

export default ParticleText;
