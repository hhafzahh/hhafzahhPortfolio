import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
          }}
          options={{
            autoPlay: true,
            background: {
              color: { value: "transparent" },
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
              opacity: 1,
            },
            clear: true,
            fullScreen: {
              enable: true,
              zIndex: -1, //make it background
            },
            detectRetina: true,
            fpsLimit: 120,
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              color: { value: "#ffffff" },
              links: {
                enable: true,
                color: "#ffffff",
                distance: 150,
                opacity: 1,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                outModes: {
                  default: "out",
                },
              },
              opacity: {
                value: 1,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 4 },
              },
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
          }}
        />
      )}
    </>
  );
}
