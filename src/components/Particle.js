import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 150, // Higher particle count for richness
            density: {
              enable: true,
              value_area: 1200, // Well-spaced particles
            },
          },
          color: {
            value: ["#f39c12", "#8e44ad", "#3498db", "#e74c3c"], // Vibrant colors
          },
          shape: {
            type: ["circle", "triangle", "polygon"], // Variety of shapes
            stroke: {
              width: 0,
              color: "#000",
            },
            polygon: {
              nb_sides: 5, // Polygons with 5 sides
            },
          },
          line_linked: {
            enable: true,
            distance: 180, // Links between particles
            color: "#ffffff",
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            direction: "none", // Random movement
            speed: 0.8, // Smooth particle flow
            random: false,
            straight: false,
            out_mode: "out", // Particles leave the canvas instead of bouncing
          },
          size: {
            value: 4,
            random: true, // Adds variety in particle sizes
            anim: {
              enable: true,
              speed: 3,
              size_min: 0.3, // Creates a dynamic shrinking effect
            },
          },
          opacity: {
            value: 0.7,
            random: true, // Random opacity for a natural look
            anim: {
              enable: true,
              speed: 1.5,
              opacity_min: 0.1,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: ["grab", "bubble"], // Combines grab and bubble effects
            },
            onclick: {
              enable: true,
              mode: "repulse", // Repulse effect on click
            },
          },
          modes: {
            grab: {
              distance: 200, // Creates connections when the mouse hovers
              line_linked: {
                opacity: 0.5,
              },
            },
            bubble: {
              distance: 250,
              size: 8, // Larger particles during bubble effect
              duration: 2,
              opacity: 0.8,
            },
            repulse: {
              distance: 200, // Particles scatter away on click
              duration: 0.4,
            },
          },
        },
        retina_detect: true, // Enhances clarity on high-DPI devices
        fps_limit: 60, // Limits FPS for smoother performance
      }}
    />
  );
}

export default Particle;
