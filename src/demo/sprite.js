import * as THREE from "three";

const meterial =new THREE.SpriteMaterial({
    color: 0xff0000
})

const sprite =new THREE.Sprite(meterial)
console.log('sprite-->',sprite)

export default (sprite)