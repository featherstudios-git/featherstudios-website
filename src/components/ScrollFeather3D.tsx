import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ScrollFeather3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup - tightly focused on the feather
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 10);

    const isMobileInit = window.innerWidth < 768;
    const initialSize = isMobileInit ? 80 : 150;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(initialSize, initialSize);
    renderer.setPixelRatio(isMobileInit ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xBCFF4F, 4); // Lime green pop
    dirLight2.position.set(-5, -5, 5);
    scene.add(dirLight2);

    // Premium Glass Material (Optimized on Mobile)
    const glassMaterial = isMobileInit
      ? new THREE.MeshStandardMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.6,
          roughness: 0.2,
          metalness: 0.8,
          emissive: new THREE.Color('#BCFF4F'),
          emissiveIntensity: 0.3,
          side: THREE.DoubleSide,
        })
      : new THREE.MeshPhysicalMaterial({
          color: 0xffffff,
          transmission: 0.9,
          opacity: 1,
          metalness: 0.2,
          roughness: 0.1,
          ior: 1.5,
          thickness: 0.5,
          specularIntensity: 1,
          clearcoat: 1,
          emissive: new THREE.Color('#BCFF4F'),
          emissiveIntensity: 0.2,
          side: THREE.DoubleSide,
        });

    // Create Procedural Feather Group
    const featherGroup = new THREE.Group();

    // 1. Central Quill
    const quillGeo = new THREE.CylinderGeometry(0.05, 0.15, 6, 8);
    const quill = new THREE.Mesh(quillGeo, glassMaterial);
    featherGroup.add(quill);

    // 2. Barbs
    const numBarbs = 100;
    const barbGeo = new THREE.PlaneGeometry(1, 0.05);
    barbGeo.translate(0.5, 0, 0);

    const instancedBarbs = new THREE.InstancedMesh(barbGeo, glassMaterial, numBarbs * 2);
    const dummy = new THREE.Object3D();

    let instanceIdx = 0;
    for (let i = 0; i < numBarbs; i++) {
      const t = i / numBarbs;
      const y = (t * 5.4) - 2.7;
      
      const widthScale = Math.sin(t * Math.PI) * (1.2 - t * 0.4) * 2.5;
      const angleUp = 0.3 + (t * 0.2); 

      // Left Barb
      dummy.position.set(0, y, 0);
      dummy.rotation.set(0, 0, Math.PI - angleUp);
      dummy.rotation.x = (Math.random() - 0.5) * 0.2;
      dummy.scale.set(widthScale * (0.8 + Math.random()*0.4), 1, 1);
      dummy.updateMatrix();
      instancedBarbs.setMatrixAt(instanceIdx++, dummy.matrix);

      // Right Barb
      dummy.position.set(0, y, 0);
      dummy.rotation.set(0, 0, angleUp);
      dummy.rotation.x = (Math.random() - 0.5) * 0.2;
      dummy.scale.set(widthScale * (0.8 + Math.random()*0.4), 1, 1);
      dummy.updateMatrix();
      instancedBarbs.setMatrixAt(instanceIdx++, dummy.matrix);
    }
    
    featherGroup.add(instancedBarbs);
    
    // Scale it down slightly to fit the 150x150 box perfectly
    featherGroup.scale.set(0.8, 0.8, 0.8);
    scene.add(featherGroup);

    // Scroll tracking animation
    let animId: number;
    let targetRotationY = 0;
    let targetRotationZ = 0.2;
    let currentRotationY = 0;
    let currentRotationZ = 0.2;

    let isLocked = false;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - windowH);
      const isMobile = window.innerWidth < 768;
      const featherSize = isMobile ? 80 : 150;

      targetRotationY = scrollY * 0.003;
      targetRotationZ = 0.2 + Math.sin(scrollY * 0.001) * 0.3;

      if (mount && mount.parentElement) {
        // If we reach the bottom, lock the feather forever (until refresh)
        if (scrollY >= maxScroll - 10) {
          isLocked = true;
        }

        if (isLocked) {
          // Locked at the bottom right corner
          mount.parentElement.style.opacity = '1';
          
          // Determine the pixel offset for the bottom right
          // To put it at right: 2rem, bottom: 2rem instead of sweeping
          const padding = isMobile ? 16 : 32;
          const maxY = windowH - featherSize - padding;
          const maxX = (window.innerWidth / 2) - (featherSize / 2) - padding;
          
          mount.parentElement.style.transform = `translateY(${maxY}px) translateX(calc(-50% + ${maxX}px))`;
          return;
        }

        // Start dropping in after scrolling past half the hero
        const startScroll = windowH * 0.5;
        if (scrollY < startScroll) {
          mount.parentElement.style.opacity = '0';
          mount.parentElement.style.transform = `translateY(-150px) translateX(-50%)`;
        } else {
          mount.parentElement.style.opacity = '1';
          
          // Progress from end of hero to absolute bottom of page
          const progress = Math.min(1, Math.max(0, (scrollY - startScroll) / (maxScroll - startScroll)));
          
          // Fall distance: from top (0) to bottom (windowH - feather height - padding)
          const padding = isMobile ? 16 : 32;
          const maxY = windowH - featherSize - padding;
          const yOffset = progress * maxY;

          // Sway left and right across the entire screen
          // Decrease sway width on mobile so it doesn't cause horizontal scrolling overflow
          const maxSway = isMobile ? window.innerWidth * 0.35 : window.innerWidth * 0.4;
          const swayX = Math.sin(progress * Math.PI * 8) * maxSway;

          mount.parentElement.style.transform = `translateY(${yOffset}px) translateX(calc(-50% + ${swayX}px))`;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Initialize position immediately
    onScroll();
    
    const startTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = (performance.now() - startTime) / 1000;

      // Smooth interpolation (lerp) towards the target scroll rotation
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;
      currentRotationZ += (targetRotationZ - currentRotationZ) * 0.05;

      // Apply base scroll rotation + a subtle continuous idle floating animation
      featherGroup.rotation.y = currentRotationY + Math.sin(t * 0.5) * 0.2;
      featherGroup.rotation.z = currentRotationZ + Math.cos(t * 0.4) * 0.1;
      featherGroup.rotation.x = 0.2 + Math.sin(t * 0.7) * 0.15;
      
      // Gentle bobbing up and down
      featherGroup.position.y = Math.sin(t * 1.2) * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', onScroll);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
      quillGeo.dispose();
      barbGeo.dispose();
      glassMaterial.dispose();
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)', // Center based on its own width instead of fixed margin
        zIndex: 50,
        pointerEvents: 'none', // Don't block clicks on the actual site
        filter: 'drop-shadow(0 0 15px rgba(188,255,79,0.4))',
      }}
    >
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
