import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroBg3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup - shifted slightly left so object appears on the right
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 15);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Lighting for glass effect
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xBCFF4F, 3); // Lime green light
    dirLight2.position.set(-5, -5, 5);
    scene.add(dirLight2);

    // Premium Glass Material
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.9,
      opacity: 1,
      metalness: 0.1,
      roughness: 0.1,
      ior: 1.5,
      thickness: 0.5,
      specularIntensity: 1,
      clearcoat: 1,
      emissive: new THREE.Color('#BCFF4F'),
      emissiveIntensity: 0.1,
      side: THREE.DoubleSide,
    });

    // Create Procedural Feather Group
    const featherGroup = new THREE.Group();

    // 1. Central Quill
    const quillGeo = new THREE.CylinderGeometry(0.05, 0.15, 10, 8);
    // Taper the quill by scaling top vertices if needed, but Cylinder does it.
    const quill = new THREE.Mesh(quillGeo, glassMaterial);
    featherGroup.add(quill);

    // 2. Barbs (the feather hairs)
    const numBarbs = 150;
    const barbGeo = new THREE.PlaneGeometry(1, 0.05);
    barbGeo.translate(0.5, 0, 0); // origin at base

    // InstancedMesh for performance
    const instancedBarbs = new THREE.InstancedMesh(barbGeo, glassMaterial, numBarbs * 2);
    const dummy = new THREE.Object3D();

    let instanceIdx = 0;
    for (let i = 0; i < numBarbs; i++) {
      const t = i / numBarbs; // 0 to 1 along the quill
      const y = (t * 9) - 4.5; // position along Y axis (-4.5 to 4.5)
      
      // Feather shape curve (wider in middle, tapered at ends)
      const widthScale = Math.sin(t * Math.PI) * (1.5 - t * 0.5) * 2;
      
      // Curve upwards slightly
      const angleUp = 0.3 + (t * 0.2); 

      // Left Barb
      dummy.position.set(0, y, 0);
      dummy.rotation.set(0, 0, Math.PI - angleUp);
      // Slight random twist
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

    // Position feather on the right
    featherGroup.position.set(4, 5, 0);
    // Initial rotation
    featherGroup.rotation.z = -0.2;
    featherGroup.rotation.x = 0.5;

    scene.add(featherGroup);

    // Animation
    let animId: number;
    const startTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = (performance.now() - startTime) / 1000;
      
      // Falling motion
      // Loop the fall: start at y=8, fall to y=-8
      let yPos = 8 - ((t * 1.5) % 16); 
      featherGroup.position.y = yPos;

      // Gentle swaying
      featherGroup.position.x = 3.5 + Math.sin(t * 0.5) * 1.5;
      featherGroup.position.z = Math.cos(t * 0.7) * 2;

      // Rotating
      featherGroup.rotation.y = t * 0.3;
      featherGroup.rotation.z = -0.2 + Math.sin(t * 0.4) * 0.2;
      featherGroup.rotation.x = 0.3 + Math.cos(t * 0.6) * 0.2;
      
      // On mobile, push it lower and further right so it doesn't clash with text
      if (window.innerWidth < 768) {
        featherGroup.position.x += 1;
        featherGroup.position.y += -2;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handling
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
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
      quillGeo.dispose();
      barbGeo.dispose();
      glassMaterial.dispose();
    };
  }, []);

  // Get initial mobile state for inline styles
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: isMobile ? '100%' : '50vw',
        height: '100%',
        zIndex: 0,
        opacity: isMobile ? 0.3 : 0.8,
        maskImage: isMobile 
          ? 'linear-gradient(to bottom, transparent 0%, black 50%, transparent 100%)'
          : 'linear-gradient(to left, black 40%, transparent 100%)',
        WebkitMaskImage: isMobile 
          ? 'linear-gradient(to bottom, transparent 0%, black 50%, transparent 100%)'
          : 'linear-gradient(to left, black 40%, transparent 100%)',
        pointerEvents: 'none',
      }}
    />
  );
}
