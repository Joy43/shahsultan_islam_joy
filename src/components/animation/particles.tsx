'use client';

import { useEffect, useMemo, useState } from 'react';
import Particles from '@tsparticles/react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

interface ParticlesAnimationProps {
  id?: string;
}

const ParticlesAnimation: React.FC<ParticlesAnimationProps> = ({ id = 'tsparticles' }) => {
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

  const options: ISourceOptions = useMemo(() => ({
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: 'repulse' },
        onHover: { enable: true, mode: 'grab' },
      },
      modes: {
        push: { distance: 200, duration: 15 },
        grab: { distance: 150 },
      },
    },
    particles: {
      color: { value: '#FFFFFF' },
      links: {
        color: '#FFFFFF',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'bounce' },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 150,
      },
      opacity: { value: 1.0 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), []);

  if (!init) return null;

  return (
    <Particles
      id={id}
      options={options}
      style={{
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default ParticlesAnimation;
