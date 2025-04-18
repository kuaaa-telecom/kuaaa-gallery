import {
  Effects,
  PerspectiveCamera,
  TrackballControls,
} from "@react-three/drei";
import { extend, ThreeElement, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import * as three from "three";
import {
  CopyShader,
  ShaderPass,
  TrackballControls as TrackballControlsImpl,
  UnrealBloomPass,
} from "three-stdlib";
import Comet from "./Comet";
import Stars from "./Stars";

declare module "@react-three/fiber" {
  interface ThreeElements {
    unrealBloomPass: ThreeElement<typeof UnrealBloomPass>;
    shaderPass: ThreeElement<typeof ShaderPass>;
  }
}

extend({ UnrealBloomPass });

interface SceneProps {
  lineCount: number;
}

const Scene: React.FC<SceneProps> = (props) => {
  const { lineCount } = props;

  return (
    <>
      <Effects disableGamma>
        <unrealBloomPass args={[new three.Vector2(0.4, 0.4), 1.5, 1, 0]} />
        <shaderPass args={[CopyShader]} />
      </Effects>
      <Stars />
      {[...Array(lineCount)].map((_, i) => {
        return <Comet key={i} />;
      })}
    </>
  );
};

const Galaxy: React.FC = () => {
  const lineCount = 10;
  const ZOOMTIME = 2;

  const controlRef = useRef<TrackballControlsImpl>(null);
  const cameraRef = useRef<three.PerspectiveCamera>(null);

  const elapsedTime = useRef<number>(0);

  const [zoomStartTime] = useState<number>(0);
  const [targetPosition] = useState<three.Vector3>(new three.Vector3(0, 0, 0));
  const [targetLook] = useState<three.Vector3>(new three.Vector3(0, 0, 0));

  useEffect(() => {
    if (cameraRef.current && controlRef.current) {
      controlRef.current.enabled = false;
      cameraRef.current.position.set(500, 500, 500);
      cameraRef.current.updateProjectionMatrix();
      controlRef.current.enabled = true;
      controlRef.current.update();
    }
  }, []);

  useFrame(({ clock }) => {
    elapsedTime.current = clock.getElapsedTime();
    const time = clock.getElapsedTime() - zoomStartTime;

    if (cameraRef.current && controlRef.current) {
      if (time < ZOOMTIME) {
        controlRef.current.enabled = false;
        const newVector = cameraRef.current.position.lerp(
          targetPosition,
          time / ZOOMTIME
        );
        cameraRef.current.position.set(newVector.x, newVector.y, newVector.z);
        cameraRef.current.lookAt(targetLook);
        const newTargetVector = controlRef.current.target.lerp(
          targetLook,
          time / ZOOMTIME
        );
        controlRef.current.target.set(
          newTargetVector.x,
          newTargetVector.y,
          newTargetVector.z
        );
      } else {
        controlRef.current.enabled = true;
      }
      controlRef.current.update();
    }
  });

  return (
    <>
      <color attach="background" args={["#000"]} />
      <Suspense fallback={null}>
        <PerspectiveCamera ref={cameraRef} near={1} far={1500} makeDefault />
        <TrackballControls
          ref={controlRef}
          rotateSpeed={3}
          minDistance={0.1}
          maxDistance={1000}
          noPan
          noZoom
        />
        <Scene lineCount={lineCount} />
      </Suspense>
    </>
  );
};

export default Galaxy;
