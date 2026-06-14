"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect, useCallback, Suspense } from "react";
import { usePathname } from "next/navigation";
import * as THREE from "three";

// ─── WebGL check ───
function isWebGLAvailable(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const c = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (c.getContext("webgl") || c.getContext("experimental-webgl")));
  } catch { return false; }
}

// ═══════════════════════════════════════════════════════════
// R3F COMPONENTS — Realistic Interstellar-style black hole
// ═══════════════════════════════════════════════════════════

// Photon Ring — tight bright ring hugging the event horizon
function PhotonRing({ count = 2000 }) {
  const ref = useRef<THREE.Points>(null);
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.02;
      const r = 1.7 + Math.random() * 0.25;
      const y = (Math.random() - 0.5) * 0.04;
      pos[i * 3] = Math.cos(angle) * r;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(angle) * r;
      const shade = 0.0 + Math.random() * 0.15;
      col[i * 3] = shade; col[i * 3 + 1] = shade; col[i * 3 + 2] = shade;
    }
    return { positions: pos, colors: col };
  }, [count]);

  useFrame((s) => { if (ref.current) ref.current.rotation.y = s.clock.getElapsedTime() * 0.15; });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} vertexColors transparent opacity={0.95} depthWrite={false} />
    </points>
  );
}

// Accretion Disk — thin, dense, multi-band disk with lensing warp
function AccretionDisk({ count = 12000 }) {
  const ref = useRef<THREE.Points>(null);
  const data = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sp = new Float32Array(count);
    const rd = new Float32Array(count);
    const ph = new Float32Array(count);

    const innerR = 2.0, outerR = 9.0;
    // Density bands at specific radii
    const bands = [2.2, 3.0, 3.8, 5.0, 6.5, 8.0];

    for (let i = 0; i < count; i++) {
      // Cluster particles near band radii for streak effect
      const bandIdx = Math.floor(Math.random() * bands.length);
      const bandR = bands[bandIdx];
      const r = bandR + (Math.random() - 0.5) * 1.2;
      const clampedR = Math.max(innerR, Math.min(outerR, r));

      const angle = Math.random() * Math.PI * 2;
      const phase = Math.random() * Math.PI * 2;

      // Very thin disk — height proportional to 1/r for realism
      const hScale = 0.06 * (innerR / clampedR);
      const h = (Math.random() - 0.5) * hScale;

      pos[i * 3] = Math.cos(angle) * clampedR;
      pos[i * 3 + 1] = h;
      pos[i * 3 + 2] = Math.sin(angle) * clampedR;

      sp[i] = 0.1 / Math.sqrt(clampedR); // Keplerian
      rd[i] = clampedR;
      ph[i] = phase;

      // Inner = darker/denser, outer = lighter grey
      const t = (clampedR - innerR) / (outerR - innerR);
      const shade = 0.02 + t * 0.45 + (Math.random() - 0.5) * 0.06;
      col[i * 3] = shade; col[i * 3 + 1] = shade; col[i * 3 + 2] = shade;
    }
    return { positions: pos, colors: col, speeds: sp, radii: rd, phases: ph };
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const attr = ref.current.geometry.attributes.position;
    const arr = attr.array as Float32Array;
    const t = state.clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      const r = data.radii[i];
      const angle = data.phases[i] + t * data.speeds[i] * 2.5;
      const warp = Math.sin(angle * 3) * 0.02 * (2.0 / r);
      arr[i * 3] = Math.cos(angle) * r;
      arr[i * 3 + 1] = warp;
      arr[i * 3 + 2] = Math.sin(angle) * r;
    }
    attr.needsUpdate = true;
    ref.current.rotation.y = t * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[data.positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[data.colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} vertexColors transparent opacity={0.85} depthWrite={false} />
    </points>
  );
}

// Gravitational Lensing Arc — particles curving over/under the event horizon
function LensingArc({ count = 3000 }) {
  const ref = useRef<THREE.Points>(null);
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Arc from -PI to PI, curving over the top of the sphere
      const theta = (Math.random() - 0.5) * Math.PI * 1.6;
      const r = 1.8 + Math.random() * 0.5;
      // Parabolic arc height — peaks at theta=0 (directly above)
      const arcHeight = Math.cos(theta) * (1.2 + Math.random() * 0.3);
      const spread = (Math.random() - 0.5) * 0.08;

      pos[i * 3] = Math.sin(theta) * r * 1.8;
      pos[i * 3 + 1] = arcHeight + spread;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 0.15;

      const shade = 0.05 + Math.random() * 0.2;
      col[i * 3] = shade; col[i * 3 + 1] = shade; col[i * 3 + 2] = shade;
    }
    return { positions: pos, colors: col };
  }, [count]);

  useFrame((s) => { if (ref.current) ref.current.rotation.y = s.clock.getElapsedTime() * 0.008; });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} vertexColors transparent opacity={0.6} depthWrite={false} />
    </points>
  );
}

// Singularity Core
function SingularityCore() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (ref.current) {
      const sc = 1.0 + Math.sin(s.clock.getElapsedTime() * 1.5) * 0.02;
      ref.current.scale.set(sc, sc, sc);
    }
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshBasicMaterial color="#0a0a0a" />
    </mesh>
  );
}

// Camera controller with mouse parallax
function CameraRig() {
  useFrame((state) => {
    const tx = state.pointer.x * 1.5;
    const ty = state.pointer.y * 1.0 + 3.5;
    state.camera.position.x += (tx - state.camera.position.x) * 0.04;
    state.camera.position.y += (ty - state.camera.position.y) * 0.04;
    state.camera.position.z += (12.0 - state.camera.position.z) * 0.04;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

// Suspended Particles for inner pages
function SuspendedParticles({ count = 1500 }) {
  const ref = useRef<THREE.Points>(null);
  const data = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const ds = new Float32Array(count);
    const shades = [0.0, 0.1, 0.18, 0.27, 0.35, 0.44, 0.55];
    for (let i = 0; i < count; i++) {
      pos[i*3]=(Math.random()-0.5)*30; pos[i*3+1]=(Math.random()-0.5)*20; pos[i*3+2]=(Math.random()-0.5)*30;
      ds[i] = 0.002 + Math.random() * 0.006;
      const sh = shades[Math.floor(Math.random()*shades.length)];
      col[i*3]=sh; col[i*3+1]=sh; col[i*3+2]=sh;
    }
    return { positions: pos, colors: col, driftSpeeds: ds };
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const attr = ref.current.geometry.attributes.position;
    const arr = attr.array as Float32Array;
    const t = state.clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      arr[i*3+1] += Math.sin(t * data.driftSpeeds[i] * 50 + i) * 0.001;
      arr[i*3] += Math.cos(t * data.driftSpeeds[i] * 30 + i * 0.5) * 0.0005;
    }
    attr.needsUpdate = true;
    ref.current.rotation.y = t * 0.005;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[data.positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[data.colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} vertexColors transparent opacity={0.5} depthWrite={false} />
    </points>
  );
}

function ResponsiveBlackHole() {
  const { size } = useThree();
  const isMobile = size.width < 768;
  return (
    <group
      scale={isMobile ? 0.65 : 1}
      position={isMobile ? [0, -2.0, 0] : [0, 0, 0]}
    >
      <AccretionDisk count={isMobile ? 6000 : 12000} />
      <PhotonRing count={isMobile ? 1000 : 2000} />
      <LensingArc count={isMobile ? 1500 : 2500} />
      <SingularityCore />
    </group>
  );
}

function Scene({ isHome }: { isHome: boolean }) {
  return (
    <>
      <ambientLight intensity={0.1} />
      <CameraRig />
      {isHome ? (
        <ResponsiveBlackHole />
      ) : (
        <SuspendedParticles count={1500} />
      )}
    </>
  );
}

// ═══════════════════════════════════════════════════════════
// CSS CANVAS 2D FALLBACK — Interstellar-style black hole
// ═══════════════════════════════════════════════════════════

function CanvasFallback({ isHome }: { isHome: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  const drawBlackHole = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number, time: number) => {
    ctx.clearRect(0, 0, w, h);
    const isMobile = w < 768;
    const cx = w / 2;
    const cy = isMobile ? h / 2 + 100 : h / 2;
    const scale = (Math.min(w, h) / 5) * (isMobile ? 0.65 : 1);

    // Accretion disk — multiple elliptical rings with varying opacity
    const diskTilt = 0.28;
    const ringCount = 40;
    for (let r = 0; r < ringCount; r++) {
      const radius = scale * (0.55 + r * 0.065);
      const t = r / ringCount;
      const opacity = 0.03 + (1 - t) * 0.12;
      const grey = Math.floor(20 + t * 100);
      const ringWidth = 1.5 - t * 0.8;

      ctx.beginPath();
      ctx.ellipse(cx, cy, radius, radius * diskTilt, time * 0.0003, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${grey},${grey},${grey},${opacity})`;
      ctx.lineWidth = ringWidth;
      ctx.stroke();
    }

    // Gravitational lensing arc over top
    const arcRadius = scale * 0.52;
    for (let i = 0; i < 8; i++) {
      const offset = i * 2;
      const arcOpacity = 0.08 - i * 0.008;
      ctx.beginPath();
      ctx.ellipse(cx, cy - offset, arcRadius + i * 3, arcRadius * 0.9 + i * 2, 0, Math.PI * 1.1, Math.PI * 1.9);
      ctx.strokeStyle = `rgba(30,30,30,${arcOpacity})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Event horizon — solid dark core
    const coreRadius = scale * 0.42;
    const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreRadius);
    coreGrad.addColorStop(0, "rgba(10,10,10,0.95)");
    coreGrad.addColorStop(0.7, "rgba(18,18,18,0.9)");
    coreGrad.addColorStop(1, "rgba(40,40,40,0.5)");
    ctx.beginPath();
    ctx.arc(cx, cy, coreRadius, 0, Math.PI * 2);
    ctx.fillStyle = coreGrad;
    ctx.fill();

    // Photon ring — tight ring around core
    ctx.beginPath();
    ctx.ellipse(cx, cy, coreRadius + 3, (coreRadius + 3) * diskTilt * 2.5, time * 0.0003, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(0,0,0,0.2)";
    ctx.lineWidth = 2.5;
    ctx.stroke();
  }, []);

  const drawDust = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number, time: number, particles: {x:number,y:number,s:number,o:number,sp:number}[]) => {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      const px = p.x + Math.sin(time * 0.0005 * p.sp) * 8;
      const py = p.y + Math.cos(time * 0.0003 * p.sp + p.x) * 6;
      ctx.beginPath();
      ctx.arc(px % w, py % h, p.s, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,0,0,${p.o})`;
      ctx.fill();
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dustParticles = Array.from({ length: 60 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      s: 1 + Math.random() * 2.5,
      o: 0.05 + Math.random() * 0.15,
      sp: 0.5 + Math.random() * 2,
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = (time: number) => {
      if (isHome) {
        drawBlackHole(ctx, canvas.width, canvas.height, time);
      } else {
        drawDust(ctx, canvas.width, canvas.height, time, dustParticles);
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [isHome, drawBlackHole, drawDust]);

  return (
    <div className="fixed inset-0 -z-20 h-screen w-screen overflow-hidden bg-white">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// EXPORT — WebGL check + fallback routing
// ═══════════════════════════════════════════════════════════

export default function BlackHoleCanvas() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [webgl, setWebgl] = useState<boolean | null>(null);

  useEffect(() => { setWebgl(isWebGLAvailable()); }, []);

  if (webgl === null) return <div className="fixed inset-0 -z-20 bg-white" />;

  if (!webgl) return <CanvasFallback isHome={isHome} />;

  return (
    <div className="fixed inset-0 -z-20 h-screen w-screen overflow-hidden bg-white">
      <Canvas camera={{ position: [0, 3.5, 12], fov: 55 }} gl={{ antialias: true, powerPreference: "high-performance" }}>
        <Suspense fallback={null}>
          <Scene isHome={isHome} />
        </Suspense>
      </Canvas>
    </div>
  );
}
