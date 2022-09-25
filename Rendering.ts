import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three';

export class Rendering {
  static instance: Rendering | undefined;
  scene = new Scene();
  camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  renderer = new WebGLRenderer();

  constructor(element: HTMLElement) {
    if (Rendering.instance) {
      return Rendering.instance;
    }
    this.init(element);
    Rendering.instance = this;
  }
  init = (container = document.body) => {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    container.style.overflow = 'hidden';
    container.appendChild(this.renderer.domElement);
    this.scene.add(this.createCube());
    this.camera.position.z = 5;

    this.animate();
  };

  createCube = () => {
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({
      color: 0xffffff,
    });
    const cube = new Mesh(geometry, material);
    return cube;
  };

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.scene.children[0].rotation.x += 0.01;
    this.scene.children[0].rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }
}
