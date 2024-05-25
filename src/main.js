import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import Stats from 'three/addons/libs/stats.module.js';
import model from './demo/sphere.js';
import sprite from './demo/sprite.js';
import points from './demo/points.js';

let camera, scene, renderer, stats;
function init() {
  // 场景
  scene = new THREE.Scene();

  //添加物体
  scene.add(model);

  // 相机
  camera = new THREE.PerspectiveCamera(
    90, // 视野角度
    window.innerWidth / window.innerHeight, // 长宽比
    0.1, // 近截面（near）
    1000 // 远截面（far）
  );
  camera.position.set(50, 50, 50);
  camera.lookAt(0, 0, 0);

  // 光源
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  // 渲染器
  renderer = new THREE.WebGLRenderer({antialias: true});
  // 获取你屏幕对应的设备像素比.devicePixelRatio告诉threejs,以免渲染模糊问题
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
  // window.addEventListener('resize', onWindowResize);
  window.onresize = onWindowResize;
  initHelper();
  initGUI();
}

function animate() {
  // 浏览器刷新的时候渲染器重新渲染
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
  stats.update();
}

function onWindowResize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  // 如果相机的一些属性发生了变化，需要执行updateProjectionMatrix ()方法更新相机的投影矩阵
  camera.updateProjectionMatrix();
}

function initHelper() {
  const axesHelper = new THREE.AxesHelper(50);
  scene.add(axesHelper);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', () => {
    renderer.render(scene, camera);
  });

  const gridHelper = new THREE.GridHelper(1000, 100);
  scene.add(gridHelper);

  //创建stats对象
  stats = new Stats();
  //stats.domElement:web页面上输出计算结果,一个div元素，
  document.body.appendChild(stats.domElement);
}
function initGUI(){
  const gui = new GUI();
  const obj = {
    x: 1,
    intensity:1
  }
  gui.add(obj, 'x', -10, 10,2).name('x的值')
  //gui.add(ambientLight,'intensity',0,2).name('环境光强度')
  console.log('gui-->',gui)

  console.mode
  //gui.addColor(cube.material, 'color').name('颜色')
  gui.add(model.position,'x',[0,1,2,4,8]);
  // gui.add(cube.position, 'x', {
  //   min: -10,
  //   max: 10,
  // });
  //gui.add(material, 'transparent').name('是否透明');

}
init();
animate();