const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight
);
camera.position.z = 3.5;
camera.position.x = -1;
scene.add(camera);

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(
  "https://raw.githubusercontent.com/nidorx/matcaps/master/1024/736655_D9D8D5_2F281F_B1AEAB.png"
);

const geometry = new THREE.TorusKnotGeometry(0.6, 0.2, 64, 8);
// const geometry = new THREE.TorusGeometry(1, 0.25, 30, 3);
// const geometry = new THREE.IcosahedronGeometry(1, 0);
const material = new THREE.MeshMatcapMaterial({ matcap: texture });
const mesh = new THREE.Mesh(geometry, material);
// mesh.rotation.y = 0.5;
scene.add(mesh);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement);

const cursor = { x: 0, y: 0 };

// window.addEventListener("mousemove", (_event) => {
//   cursor.x = _event.clientX / window.innerWidth - 0.5;
//   cursor.y = _event.clientY / window.innerHeight - 0.5;
// });

const tick = () => {
  window.requestAnimationFrame(tick);

  mesh.rotation.y += 0.01;

  // const cameraX = cursor.x - 1;
  // const cameraY = -cursor.y;

  // camera.position.x += (cameraX - camera.position.x) / 20;
  // camera.position.y += (cameraY - camera.position.y) / 20;

  renderer.render(scene, camera);
};
tick();
