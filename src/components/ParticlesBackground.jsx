import { useEffect, useRef } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

let engineReady = false;

export function ParticlesBackground() {
  const idRef = useRef("tsparticles-" + Math.random().toString(36).slice(2));
  const id = idRef.current;

  useEffect(() => {
    async function init() {
      if (!engineReady) {
        await loadSlim(tsParticles);
        engineReady = true;
      }
      await tsParticles.load({
        id,
        options: {
          fpsLimit: 60,
          background: { color: "transparent" },
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: "#9b7f5e" },
            shape: { type: "circle" },
            opacity: { value: 0.35 },
            size: { value: { min: 1, max: 3 } },
            links: {
              enable: true,
              distance: 150,
              color: "#a28c64",
              opacity: 0.45,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              outModes: { default: "out" },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              repulse: { distance: 200, duration: 0.4 },
              push: { quantity: 4 },
            },
          },
          retina_detect: true,
        },
      });
    }
    init();
    return () => {
      tsParticles.dom().forEach((c) => {
        if (c.id === id) c.destroy();
      });
    };
  }, [id]);

  return (
    <div
      id={id}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    />
  );
}
