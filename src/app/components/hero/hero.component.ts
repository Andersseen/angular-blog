import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  effect,
  signal,
} from "@angular/core";
import * as THREE from "three";

@Component({
  selector: "app-hero",
  standalone: true,
  template: `
    <section
      class="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <canvas #canvas class="hero-canvas"></canvas>
      <div class="relative z-10 text-center px-4">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to the Future
        </h1>
        <p class="text-xl md:text-2xl text-gray-200 mb-8">
          Discover amazing possibilities with our innovative solutions
        </p>
        <button
          class="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Get Started
        </button>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100vh;
      }
    `,
  ],
})
export class HeroComponent implements OnInit {
  @ViewChild("canvas", { static: true }) private canvasRef!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private particles!: THREE.Points;

  private mouseX = signal(0);
  private mouseY = signal(0);
  private uniforms: any;

  ngOnInit() {
    this.initThree();
    this.animate();
    window.addEventListener("resize", () => this.onWindowResize());
    window.addEventListener("mousemove", (event) => this.onMouseMove(event));

    // Effect to respond to mouse movement
    effect(() => {
      this.uniforms.uMouse.value.x = this.mouseX();
      this.uniforms.uMouse.value.y = this.mouseY();
    });
  }

  private initThree() {
    // Scene setup
    this.scene = new THREE.Scene();

    // Camera setup
    const fov = 60;
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 1000);
    this.camera.position.z = 30;

    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement,
      alpha: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 5000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 50;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // Shaders
    const vertexShader = `
      uniform float uTime;
      uniform vec2 uMouse;
      attribute vec3 color;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec3 pos = position;
        pos.x += sin(uTime + position.x * 10.0) * 0.5;
        pos.y += cos(uTime + position.y * 10.0) * 0.5;
        vec4 modelViewPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = 3.0 + 3.0 * (1.0 - distance(uMouse, pos.xy) / 50.0);
        gl_Position = projectionMatrix * modelViewPosition;
      }
    `;

    const fragmentShader = `
      varying vec3 vColor;
      void main() {
        gl_FragColor = vec4(vColor, 1.0);
      }
    `;

    this.uniforms = {
      uTime: { value: 0.0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    };

    const particlesMaterial = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader,
      fragmentShader,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
    });

    this.particles = new THREE.Points(particlesGeometry, particlesMaterial);
    this.scene.add(this.particles);
  }

  private animate() {
    requestAnimationFrame(() => this.animate());

    this.uniforms.uTime.value += 0.05;

    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private onMouseMove(event: MouseEvent) {
    this.mouseX.set((event.clientX / window.innerWidth) * 2 - 1);
    this.mouseY.set(-(event.clientY / window.innerHeight) * 2 + 1);
  }
}
