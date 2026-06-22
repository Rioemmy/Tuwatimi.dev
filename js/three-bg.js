/* 
   js/three-bg.js
   Three.js animated 3D floating shapes background.
   Requires three.js loaded before this script.
   Respects prefers-reduced-motion.
*/

(function setup3D() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (typeof THREE === "undefined") return; // guard if CDN fails

  const canvas   = document.getElementById("three-canvas");
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 5;

  // Materials
  const matOrange = new THREE.MeshStandardMaterial({ color: 0xff6b35, wireframe: true, transparent: true, opacity: 0.18 });
  const matBlue   = new THREE.MeshStandardMaterial({ color: 0x7b8fff, wireframe: true, transparent: true, opacity: 0.14 });

  const shapes = [];

  function addShape(geometry, material) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 4
    );
    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    scene.add(mesh);
    shapes.push(mesh);
  }

  addShape(new THREE.IcosahedronGeometry(0.5, 0), matOrange);
  addShape(new THREE.IcosahedronGeometry(0.3, 0), matOrange);
  addShape(new THREE.OctahedronGeometry(0.4, 0),  matBlue);
  addShape(new THREE.TorusGeometry(0.4, 0.12, 8, 20), matOrange);
  addShape(new THREE.BoxGeometry(0.6, 0.6, 0.6),  matBlue);
  addShape(new THREE.TetrahedronGeometry(0.5, 0), matOrange);
  addShape(new THREE.OctahedronGeometry(0.3, 0),  matOrange);
  addShape(new THREE.TorusGeometry(0.3, 0.1, 6, 16), matBlue);
  addShape(new THREE.IcosahedronGeometry(0.25, 0), matBlue);
  addShape(new THREE.BoxGeometry(0.4, 0.4, 0.4),  matOrange);

  // Lighting
  scene.add(new THREE.AmbientLight(0xffffff, 0.4));
  const pointLight = new THREE.PointLight(0xff6b35, 1, 10);
  pointLight.position.set(2, 3, 2);
  scene.add(pointLight);

  // Mouse-reactive camera tilt
  let targetCamX = 0, targetCamY = 0;
  document.addEventListener("mousemove", e => {
    targetCamX = (e.clientX / window.innerWidth  - 0.5) * 0.4;
    targetCamY = (e.clientY / window.innerHeight - 0.5) * 0.3;
  });

  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  let time = 0;
  function animate() {
    requestAnimationFrame(animate);
    time += 0.005;

    shapes.forEach((mesh, i) => {
      mesh.rotation.x += 0.003 + i * 0.0005;
      mesh.rotation.y += 0.004 + i * 0.0003;
      mesh.position.y += Math.sin(time + i * 0.5) * 0.002;
    });

    camera.position.x += (targetCamX - camera.position.x) * 0.05;
    camera.position.y += (-targetCamY - camera.position.y) * 0.05;

    renderer.render(scene, camera);
  }

  animate();
})();
