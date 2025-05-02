import {
  Effects,
  PerspectiveCamera,
  TrackballControls,
} from "@react-three/drei";
import { extend, ThreeElement, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useMemo, useRef, useState } from "react";
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
  const { size } = useThree();

  const resolution = useMemo(
    () => new three.Vector2(size.width, size.height),
    [size.width, size.height]
  );

  return (
    <>
      <Effects disableGamma>
        <unrealBloomPass args={[resolution, 1.5, 1, 0]} />
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

  const zoomStartTime = useRef<number>(0);
  const [targetPosition] = useState<three.Vector3>(new three.Vector3(0, 0, 0));

  const initialized = useRef(false);

  useFrame(({ clock }) => {
    if (!initialized.current) {
      if (cameraRef.current && controlRef.current) {
        const cam = cameraRef.current;
        const controls = controlRef.current;

        controls.enabled = false;
        cam.position.set(500, 500, 500);
        cam.updateProjectionMatrix();
        controls.update();

        zoomStartTime.current = clock.getElapsedTime();
        initialized.current = true;
      }
    } else {
      elapsedTime.current = clock.getElapsedTime();
      const time = clock.getElapsedTime() - zoomStartTime.current;

      if (cameraRef.current && controlRef.current) {
        const cam = cameraRef.current;
        const controls = controlRef.current;
        if (time < ZOOMTIME) {
          controls.enabled = false;
          const newVector = new three.Vector3()
            .copy(cam.position)
            .lerp(targetPosition, Math.min(1, time / ZOOMTIME));
          cam.position.set(newVector.x, newVector.y, newVector.z);
        } else {
          controls.enabled = true;
        }
        controls.update();
      }
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
