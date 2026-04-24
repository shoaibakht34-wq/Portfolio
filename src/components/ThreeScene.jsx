import { Canvas } from "@react-three/fiber";

export default function ThreeScene() {
  return (
    <Canvas className="!w-full !h-full">
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 3]} />

      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={1.5}
          wireframe
        />
      </mesh>
    </Canvas>
  );
}