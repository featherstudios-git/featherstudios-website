import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroBg3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  // Expose mouse target for parent to drive
  const mouseTarget = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 18);

    const isMobile = window.innerWidth < 768;
    const renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mount.appendChild(renderer.domElement);

    // Cinematic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(8, 8, 10);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x38bdf8, 2);
    fillLight.position.set(-6, -4, 8);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x60a5fa, 1.5);
    rimLight.position.set(0, 10, -5);
    scene.add(rimLight);

    // Glass Material
    const glassMaterial = isMobile
      ? new THREE.MeshStandardMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.5,
          roughness: 0.15,
          metalness: 0.9,
          emissive: new THREE.Color('#38bdf8'),
          emissiveIntensity: 0.15,
          side: THREE.DoubleSide,
        })
      : new THREE.MeshPhysicalMaterial({
          color: 0xffffff,
          transmission: 0.92,
          opacity: 1,
          metalness: 0.05,
          roughness: 0.05,
          ior: 1.5,
          thickness: 0.5,
          specularIntensity: 1,
          clearcoat: 1,
          emissive: new THREE.Color('#38bdf8'),
          emissiveIntensity: 0.08,
          side: THREE.DoubleSide,
        });

    // Feather
    const featherGroup = new THREE.Group();
    const quillGeo = new THREE.CylinderGeometry(0.05, 0.15, 10, 8);
    const quill = new THREE.Mesh(quillGeo, glassMaterial);
    featherGroup.add(quill);

    const numBarbs = isMobile ? 80 : 150;
    const barbGeo = new THREE.PlaneGeometry(1, 0.05);
    barbGeo.translate(0.5, 0, 0);
    const instancedBarbs = new THREE.InstancedMesh(barbGeo, glassMaterial, numBarbs * 2);
    const dummy = new THREE.Object3D();
    let instanceIdx = 0;
    for (let i = 0; i < numBarbs; i++) {
      const t = i / numBarbs;
      const y = (t * 9) - 4.5;
      const widthScale = Math.sin(t * Math.PI) * (1.5 - t * 0.5) * 2;
      const angleUp = 0.3 + (t * 0.2);

      dummy.position.set(0, y, 0);
      dummy.rotation.set(0, 0, Math.PI - angleUp);
      dummy.rotation.x = (Math.random() - 0.5) * 0.2;
      dummy.scale.set(widthScale * (0.8 + Math.random() * 0.4), 1, 1);
      dummy.updateMatrix();
      instancedBarbs.setMatrixAt(instanceIdx++, dummy.matrix);

      dummy.position.set(0, y, 0);
      dummy.rotation.set(0, 0, angleUp);
      dummy.rotation.x = (Math.random() - 0.5) * 0.2;
      dummy.scale.set(widthScale * (0.8 + Math.random() * 0.4), 1, 1);
      dummy.updateMatrix();
      instancedBarbs.setMatrixAt(instanceIdx++, dummy.matrix);
    }
    featherGroup.add(instancedBarbs);
    featherGroup.position.set(4, 0, 0);
    featherGroup.rotation.z = -0.3;
    featherGroup.rotation.x = 0.4;
    scene.add(featherGroup);

    // Mouse tracking
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseTarget.current = { x: mouse.x, y: mouse.y };
    };
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Animation
    let animId: number;
    const startTime = performance.now();
    const currentMouse = { x: 0, y: 0 };

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = (performance.now() - startTime) / 1000;

      // Smooth mouse lerp
      currentMouse.x += (mouse.x - currentMouse.x) * 0.03;
      currentMouse.y += (mouse.y - currentMouse.y) * 0.03;

      // Floating motion
      featherGroup.position.y = Math.sin(t * 0.4) * 1.5;
      featherGroup.position.x = 4 + Math.sin(t * 0.3) * 0.5;

      // Mouse-driven rotation
      featherGroup.rotation.y = t * 0.15 + currentMouse.x * 0.5;
      featherGroup.rotation.z = -0.3 + Math.sin(t * 0.5) * 0.1 + currentMouse.y * 0.15;
      featherGroup.rotation.x = 0.4 + currentMouse.y * 0.3;

      // Camera subtle drift with mouse
      camera.position.x = currentMouse.x * 1.5;
      camera.position.y = currentMouse.y * 0.8;
      camera.lookAt(featherGroup.position);

      if (isMobile) {
        featherGroup.position.x = 3;
        featherGroup.rotation.y = t * 0.15;
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
      quillGeo.dispose();
      barbGeo.dispose();
      glassMaterial.dispose();
    };
  }, []);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        filter: isMobile ? 'none' : 'blur(0.5px) drop-shadow(0 0 30px rgba(56,189,248,0.2))',
        opacity: isMobile ? 0.35 : 1,
        pointerEvents: 'none',
      }}
    />
  );
}
