'use client';

import { useEffect, useState, useMemo } from 'react';
import Particles from '@tsparticles/react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

const ParticlesAnimation = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initEngine = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };

    initEngine();
  }, []);

  const options = useMemo<ISourceOptions>(() => ({
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: 'repulse' },
        onHover: { enable: true, mode: 'grab' },
      },
      modes: {
        repulse: { distance: 100 },
        grab: { distance: 150 },
      },
    },
    particles: {
      color: { value: '#ffffff' },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        outModes: { default: 'bounce' },
      },
      number: {
        value: 100,
        density: { enable: true, area: 800 },
      },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), []);

  return (
    init && (
      <div className="absolute inset-0 -z-10">
        <Particles id="tsparticles" options={options} />
      </div>
    )
  );
};

export default ParticlesAnimation;
