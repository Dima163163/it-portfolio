import {useEffect} from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

export const Particle = () => {
  useEffect(() => {
      initParticlesEngine(async (engine) => {
          await loadSlim(engine);
      });
  }, []);

  return (
    <Particles
        id="tsparticles"
        options={{
            // background: {
            //     color: {
            //         value: "#0d47a1",
            //     },
            // },
            fpsLimit: 120,
            interactivity: {
                events: {
                    // onClick: {
                    //     enable: true,
                    //     mode: "push",
                    // },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 200,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 50,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 0.5 , max: 1 },
                },
            },
            detectRetina: true,
        }}
    />
  );
};
