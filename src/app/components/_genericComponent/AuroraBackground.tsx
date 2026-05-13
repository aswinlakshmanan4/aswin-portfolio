"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type ShapeProps = {
  geometry: THREE.BufferGeometry;
  color: string;
  opacity: number;
  position: [number, number, number];
  rotationSpeed: [number, number, number];
  bobSpeed: number;
  bobAmount?: number;
  bobAxis?: "x" | "y";
};

function Shape({
  geometry,
  color,
  opacity,
  position,
  rotationSpeed,
  bobSpeed,
  bobAmount = 0.25,
  bobAxis = "y",
}: ShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const basePos = useRef(position);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const m = meshRef.current;
    if (!m) return;
    m.rotation.x = t * rotationSpeed[0];
    m.rotation.y = t * rotationSpeed[1];
    m.rotation.z = t * rotationSpeed[2];
    if (bobAxis === "y") {
      m.position.y = basePos.current[1] + Math.sin(t * bobSpeed) * bobAmount;
    } else {
      m.position.x = basePos.current[0] + Math.sin(t * bobSpeed) * bobAmount;
    }
  });

  return (
    <mesh ref={meshRef} position={position} geometry={geometry}>
      <meshBasicMaterial color={color} wireframe transparent opacity={opacity} />
    </mesh>
  );
}

function CameraParallax() {
  const { camera } = useThree();
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(() => {
    current.current.x += (target.current.x - current.current.x) * 0.04;
    current.current.y += (target.current.y - current.current.y) * 0.04;
    camera.position.x = current.current.x * 0.9;
    camera.position.y = -current.current.y * 0.6;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function Scene() {
  const knotGeo = useRef(new THREE.TorusKnotGeometry(1.2, 0.35, 120, 16)).current;
  const icoGeo = useRef(new THREE.IcosahedronGeometry(1.1, 0)).current;
  const octaGeo = useRef(new THREE.OctahedronGeometry(0.95, 0)).current;

  return (
    <>
      <Shape
        geometry={knotGeo}
        color="#A78BFA"
        opacity={0.38}
        position={[-3.0, 1.3, -1]}
        rotationSpeed={[0.15, 0.2, 0]}
        bobSpeed={0.5}
        bobAmount={0.25}
      />
      <Shape
        geometry={icoGeo}
        color="#F472B6"
        opacity={0.42}
        position={[3.0, -0.8, 0]}
        rotationSpeed={[-0.18, 0, 0.12]}
        bobSpeed={0.4}
        bobAmount={0.3}
      />
      <Shape
        geometry={octaGeo}
        color="#5EEAD4"
        opacity={0.42}
        position={[0.2, 2.4, -1.5]}
        rotationSpeed={[0.1, 0.25, 0]}
        bobSpeed={0.3}
        bobAmount={0.35}
        bobAxis="x"
      />
      <CameraParallax />
    </>
  );
}

export default function AuroraBackground() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    >
      {/* Drift blobs (CSS-only aurora layer) */}
      <div className="absolute -top-[150px] -left-[100px] w-[600px] h-[600px] rounded-full blur-[90px] opacity-60 animate-drift1 bg-aurora-violet" />
      <div className="absolute top-[12%] -right-[220px] w-[700px] h-[700px] rounded-full blur-[90px] opacity-[0.50] animate-drift2 bg-aurora-pink" />
      <div className="absolute -bottom-[120px] left-[28%] w-[520px] h-[520px] rounded-full blur-[90px] opacity-[0.42] animate-drift3 bg-aurora-mint" />
      <div className="absolute top-[55%] left-[8%] w-[450px] h-[450px] rounded-full blur-[90px] opacity-40 animate-drift4 bg-aurora-sky" />

      {/* R3F 3D scene */}
      {!reduceMotion && (
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
          dpr={[1, 2]}
          className="!absolute inset-0"
        >
          <Scene />
        </Canvas>
      )}

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
