'use client';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';

export const Shape = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="xl:2/12 hidden h-54 md:block md:w-5/12 lg:h-44 lg:w-3/12">
      <Canvas>
        <Sphere
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          args={[1, 50, 50]}
          scale={2}
        >
          <MeshDistortMaterial
            color={hover ? '#210eed' : '#FF8C00'}
            attach="material"
            distort={0.6}
            speed={hover ? 8 : 1}
          />
        </Sphere>
        <ambientLight intensity={2} />
        <directionalLight position={[1, 2, 3]} />
      </Canvas>
    </div>
  );
};
