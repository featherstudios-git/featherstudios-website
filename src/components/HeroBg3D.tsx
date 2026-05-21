import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroBg3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Lime color
    const limeColor = new THREE.Color('#BCFF4F');
    const whiteColor = new THREE.Color('#F2F0EB');

    // Meshes
    const meshes: THREE.Mesh[] = [];

    // Large slow torus knot — centerpiece
    const torusKnotGeo = new THREE.TorusKnotGeometry(1.8, 0.45, 120, 20, 2, 3);
    const torusKnotMat = new THREE.MeshBasicMaterial({
      color: limeColor,
      wireframe: true,
      transparent: true,
      opacity: 0.07,
    });
    const torusKnot = new THREE.Mesh(torusKnotGeo, torusKnotMat);
    torusKnot.position.set(2.5, 0, -1);
    scene.add(torusKnot);
    meshes.push(torusKnot);

    // Medium torus
    const torusGeo = new THREE.TorusGeometry(1.2, 0.3, 20, 60);
    const torusMat = new THREE.MeshBasicMaterial({
      color: whiteColor,
      wireframe: true,
      transparent: true,
      opacity: 0.05,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.position.set(-3, 1, -2);
    torus.rotation.x = 0.8;
    scene.add(torus);
    meshes.push(torus);

    // Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(1.1, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: limeColor,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    ico.position.set(-1.5, -2.5, -1);
    scene.add(ico);
    meshes.push(ico);

    // Small sphere cluster
    const sphGeo = new THREE.SphereGeometry(0.6, 16, 12);
    const sphMat = new THREE.MeshBasicMaterial({
      color: whiteColor,
      wireframe: true,
      transparent: true,
      opacity: 0.06,
    });
    const sph = new THREE.Mesh(sphGeo, sphMat);
    sph.position.set(3.5, -2, 0);
    scene.add(sph);
    meshes.push(sph);

    // Octahedron
    const octGeo = new THREE.OctahedronGeometry(0.9, 0);
    const octMat = new THREE.MeshBasicMaterial({
      color: limeColor,
      wireframe: true,
      transparent: true,
      opacity: 0.09,
    });
    const oct = new THREE.Mesh(octGeo, octMat);
    oct.position.set(0, 2.5, -1.5);
    scene.add(oct);
    meshes.push(oct);

    // Animation
    let animId: number;
    const startTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = (performance.now() - startTime) / 1000;

      torusKnot.rotation.x = t * 0.07;
      torusKnot.rotation.y = t * 0.05;
      torusKnot.position.y = Math.sin(t * 0.3) * 0.3;

      torus.rotation.y = t * 0.08;
      torus.rotation.z = t * 0.04;
      torus.position.x = -3 + Math.sin(t * 0.2) * 0.4;

      ico.rotation.x = t * 0.12;
      ico.rotation.y = t * 0.09;
      ico.position.y = -2.5 + Math.sin(t * 0.4 + 1) * 0.3;

      sph.rotation.y = t * 0.15;
      sph.position.y = -2 + Math.cos(t * 0.35) * 0.4;

      oct.rotation.x = t * 0.1;
      oct.rotation.z = t * 0.13;
      oct.position.x = Math.sin(t * 0.25) * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    // Resize
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
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        filter: 'blur(32px)',
        opacity: 0.85,
        pointerEvents: 'none',
      }}
    />
  );
}
