import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as three from "three";
import { useGalaxyContext } from "../../contexts/GalaxyContext";
import colorConverter from "../../utils/colorConverter";

const vertexShader = `
  attribute float size;
  attribute vec3 color;

  varying vec3 vColor;

	void main() {
    vColor = color;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	  gl_PointSize = size;
	  gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform vec3 color;

  varying vec3 vColor;

  void main() {
    if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;
    gl_FragColor = vec4( color * vColor, 1.0 );
  }
`;

const Stars: React.FC = () => {
  const [renderFullStars, setRenderFullStars] = useState(true);

  const frameCountRef = useRef(0);
  const elapsedMillisRef = useRef(0);
  const lastFps = useRef<number[]>([]);

  useFrame((_, delta) => {
    frameCountRef.current++;
    elapsedMillisRef.current += delta * 1000;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const fps = Math.round(
        (frameCountRef.current / elapsedMillisRef.current) * 1000
      );
      frameCountRef.current = 0;
      elapsedMillisRef.current = 0;

      lastFps.current.push(fps);
      if (lastFps.current.length > 10) {
        lastFps.current.shift();
      }

      const countOfFpsLessThan30 = lastFps.current.filter(
        (fps) => fps < 30
      ).length;

      if (countOfFpsLessThan30 >= 6) {
        setRenderFullStars(false);
      } else {
        setRenderFullStars(true);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const starsRef = useRef<three.Points | null>(null);

  const { database: rawDatabase } = useGalaxyContext();

  const { database, count } = useMemo(() => {
    const database = rawDatabase.filter(
      (star) => renderFullStars || +star.mag < 3
    );
    const count = database.length;
    return { database, count };
  }, [rawDatabase, renderFullStars]);

  const positions: Float32Array = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      temp[i * 3] = +database[i].x;
      temp[i * 3 + 1] = +database[i].y;
      temp[i * 3 + 2] = +database[i].z;
    }
    return temp;
  }, [count, database]);

  const sizes: Float32Array = useMemo(() => {
    const temp = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      temp[i] = Math.max(
        0,
        Math.min(7.0, (-10 / 9) * +database[i].mag + 7) * 1.2
      );
    }
    return temp;
  }, [count, database]);

  const colors: Float32Array = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const { r, g, b } = colorConverter(+database[i].ci);
      temp[i * 3] = r * 5;
      temp[i * 3 + 1] = g * 5;
      temp[i * 3 + 2] = b * 5;
    }
    return temp;
  }, [count, database]);

  useEffect(() => {
    if (starsRef.current) {
      starsRef.current.geometry.setAttribute(
        "position",
        new three.BufferAttribute(positions, 3)
      );
      starsRef.current.geometry.setAttribute(
        "color",
        new three.BufferAttribute(colors, 3)
      );
      starsRef.current.geometry.setAttribute(
        "size",
        new three.BufferAttribute(sizes, 1)
      );
    }
  }, [starsRef, positions, colors, sizes]);

  return (
    <>
      <points ref={starsRef}>
        <bufferGeometry />
        <shaderMaterial
          attach="material"
          transparent
          uniforms={{ color: { value: new three.Color(0xffffff) } }}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          toneMapped={false}
        />
      </points>
    </>
  );
};

export default Stars;
