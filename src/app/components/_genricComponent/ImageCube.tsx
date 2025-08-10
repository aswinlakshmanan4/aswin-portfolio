"use client";

import React, { JSX, useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function AttractiveThreeCube(): JSX.Element {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const width = mount.clientWidth;
    const height = mount.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(2.5, 2.0, 4);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.45));
    const dir = new THREE.DirectionalLight(0xffffff, 0.8);
    dir.position.set(5, 10, 7.5);
    dir.castShadow = true;
    scene.add(dir);

    // Cube geometry & materials
    const geometry = new THREE.BoxGeometry(1.6, 1.6, 1.6);
    const materials: THREE.MeshPhysicalMaterial[] = [];
    const baseColor = new THREE.Color(0x799EFF);

    for (let i = 0; i < 6; i++) {
      const mat = new THREE.MeshPhysicalMaterial({
        color: baseColor.clone().offsetHSL(0, 0, (i - 2.5) * 0.03),
        metalness: 0.35 + i * 0.02,
        roughness: 0.15 + i * 0.02,
        clearcoat: 0.6,
        clearcoatRoughness: 0.1,
        reflectivity: 0.5,
        emissive: baseColor.clone().multiplyScalar(0.25),
        emissiveIntensity: 0.5,
      });
      materials.push(mat);
    }

    const cube = new THREE.Mesh(geometry, materials);
    cube.castShadow = true;
    scene.add(cube);

    // Wireframe glow
    const wireGeo = new THREE.EdgesGeometry(geometry);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      opacity: 0.06,
      transparent: true,
    });
    cube.add(new THREE.LineSegments(wireGeo, wireMat));

    // Ground shadow plane
    const planeGeo = new THREE.PlaneGeometry(10, 10);
    const planeMat = new THREE.ShadowMaterial({ opacity: 0.06 });
    const plane = new THREE.Mesh(planeGeo, planeMat);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -1.1;
    plane.receiveShadow = true;
    scene.add(plane);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.minDistance = 2.5;
    controls.maxDistance = 8;
    controls.enableZoom = false;
    controls.enableRotate = false

    // Hover interaction
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2(-1, -1);
    let hovered = false;

    const onPointerMove = (e: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    window.addEventListener("pointermove", onPointerMove);

    // Get top position in world space
    const getWorldTopY = () => {
      const frustumHeight =
        2.5 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
      return frustumHeight / 2;
    };
    let worldTopY = getWorldTopY();

    // Animation loop
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      const baseY = worldTopY - 1.5; // move cube to top edge
      cube.position.y = baseY + Math.sin(t * 2) * 0.2; // wave up/down
      cube.position.x = Math.sin(t * 1.5) * 0.05; // side sway
      cube.position.z = -0.5; // bring slightly forward
      // Gentle rotation
      cube.rotation.x = 0.35 * Math.sin(t * 0.6);
      cube.rotation.y += 0.005;

      // Glow pulse
      const pulse = 0.5 + Math.sin(t * 2) * 0.25;
      materials.forEach((mat) => {
        mat.emissiveIntensity = pulse;
      });

      // Hover effect
      raycaster.setFromCamera(pointer, camera);
      hovered = raycaster.intersectObject(cube, true).length > 0;
      const targetScale = hovered ? 1.08 : 1.0;
      cube.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.08
      );

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      worldTopY = getWorldTopY();
    };
    // window.addEventListener("resize", onResize);z

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      // window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      controls.dispose();
      geometry.dispose();
      materials.forEach((m) => m.dispose());
      wireGeo.dispose();
      wireMat.dispose();
      renderer.dispose();
      if (mount?.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      className="absolute inset-0 z-0 w-full h-full flex justify-center"
      ref={mountRef}
    />
  );
}
