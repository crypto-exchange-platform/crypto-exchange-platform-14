import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GalaxyHero() {
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

      const starCount = 4000;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(starCount * 3);

      for (let i = 0; i < starCount * 3; i++) {
        positions[i] = THREE.MathUtils.randFloatSpread(2000);
      }

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1.2,
      });

      stars = new THREE.Points(geometry, material);
      scene.add(stars);

      animate();
      window.addEventListener("resize", onWindowResize);
    };

    const onWindowResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.0009;
      stars.rotation.x += 0.0003;
      camera.position.z = 500 + Math.sin(Date.now() * 0.0005) * 10;
      renderer.render(scene, camera);
    };

    init();

    return () => {
      window.removeEventListener("resize", onWindowResize);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div style={styles.wrapper}>
      <div ref={containerRef} style={styles.canvas} />
      <div style={styles.textBox}>
        <h1 style={styles.title}>Trade Crypto Instantly with Blockverse</h1>
        <p>Secure. Scalable. Borderless. Your gateway to digital assets.</p>
        <div style={styles.buttonWrapper}>
          <button style={styles.button}>Launch App</button>
          <button style={styles.buttonOutline}>Whitepaper</button>
        </div>
      </div>
      <style>{cssAnimations}</style>
    </div>
  );
}

const cssAnimations = `
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
`;

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    background: "black",
  },
  canvas: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 0,
  },
  textBox: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    textAlign: "center",
    padding: "0 2rem",
  },
  title: {
    fontSize: "3.5rem",
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "6px",
    animation: "fadeInUp 1s ease-out forwards",
  },
  subtitle: {
    fontSize: "1.25rem",
    letterSpacing: "2px",
    color: "#cccccc",
    marginTop: "1rem",
    marginBottom: "2rem",
    animation: "fadeInUp 1.5s ease-out forwards",
  },
  buttonWrapper: {
    display: "flex",
    gap: "20px",
    animation: "fadeInUp 2s ease-out forwards",
  },
  button: {
    padding: "15px 30px",
    fontSize: "14px",
    fontWeight: 700,
    background: "#00ffcc",
    color: "black",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    textTransform: "uppercase",
    animation: "pulse 3s infinite",
  },
  buttonOutline: {
    padding: "15px 30px",
    fontSize: "14px",
    fontWeight: 700,
    background: "transparent",
    color: "#00ffcc",
    border: "2px solid #00ffcc",
    borderRadius: "6px",
    cursor: "pointer",
    textTransform: "uppercase",
  },
};
