import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function TradeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let stars: THREE.Points;

    const init = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, width / height, 1, 3000);
      camera.position.z = 500;
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(width, height);
      containerRef.current?.appendChild(renderer.domElement);

      const geometry = new THREE.BufferGeometry();
      const starCount = 4000;
      const positions = new Float32Array(starCount * 3);
      for (let i = 0; i < positions.length; i++) {
        positions[i] = THREE.MathUtils.randFloatSpread(2000);
      }
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const material = new THREE.PointsMaterial({ color: 0x00ffcc, size: 1.2 });
      stars = new THREE.Points(geometry, material);
      scene.add(stars);

      const animate = () => {
        requestAnimationFrame(animate);
        stars.rotation.y += 0.0008;
        stars.rotation.x += 0.0004;
        renderer.render(scene, camera);
      };
      animate();

      window.addEventListener("resize", () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      });
    };

    init();
    return () => {
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    />
  );
}
 