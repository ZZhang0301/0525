import * as THREE from 'three';

// 创建顶点数据
const vertices = new Float32Array([
    -10, -10, 10,
    10, -10, 10,
    10, 10, 10,
    -10, 10, 10,
]);

// 创建几何体
const sphere = new THREE.SphereGeometry(50);
const cube = new THREE.BoxGeometry(100, 100, 100, 10, 10, 10);
console.log('sphere-->', sphere);
console.log('cube-->', cube);

// 创建 BufferGeometry 并设置位置属性
const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', cube.getAttribute('position'));

// 创建材质并设置颜色
const material = new THREE.PointsMaterial({
    color: 0xffffff, // 使用十六进制表示白色
    size: 1,
    transparent: true,
});

// 创建 Points 对象
const points = new THREE.Points(geometry, material);

export default points;
