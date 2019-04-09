var scene = new THREE.Scene();

var geometry = new THREE.OctahedronGeometry(30);
var coverColor = new THREE.Color("rgb(255, 170, 37)");
var material = new THREE.MeshBasicMaterial({
  color: coverColor.getHex(),
  wireframe: true
});
var mesh = new THREE.Mesh(geometry, material);

var lightColor = new THREE.Color("rgb(255, 255, 255)");
var light = new THREE.PointLight(lightColor.getHex());
light.position.set(0, 100, -100);

scene.add(mesh, light);

var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 75;
camera.position.y = 50;
camera.rotation.x = -0.5;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var animate = function() {
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};
requestAnimationFrame(animate);