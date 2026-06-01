'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ParticleField from './ParticleField';
import NeuralNetwork from './NeuralNetwork';

export default function BackgroundCanvas() {
  return (
    <Canvas
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      camera={{ position: [0, 0, 20], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={['#000308']} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} color="#00d4ff" intensity={2} />
      <pointLight position={[-10, -10, -5]} color="#7b2fff" intensity={1} />
      <ParticleField />
      <NeuralNetwork />
      <OrbitControls
        enabled={false}
        autoRotate={true}
        autoRotateSpeed={0.2}
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}
