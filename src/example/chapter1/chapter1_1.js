import * as THREE from "three";

export const initThree = () => {
  // 创建场景
  let scene = new THREE.Scene();
  // 创建一个摄像头，它定义我们要查看的位置
  let camer = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  // 创建渲染器
  let renderer = new THREE.WebGLRenderer();
  // 设置渲染器属性
  renderer.setClearColor(new THREE.Color(0xeeeeee));
  renderer.setSize(window.innerWidth, window.innerHeight);
  // 在屏幕中显示轴
  let axes = new THREE.AxesHelper(20);
  scene.add(axes);

  //
  var planeGeometry = new THREE.PlaneGeometry(60, 20);
};
