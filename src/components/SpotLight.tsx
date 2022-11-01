import styled from "@emotion/styled";
import useMousePosition from "../hooks/useMousePosition";
import useShadowLightCoordinates from "../hooks/useShadowLightCoordinates";
import useWindowSize from "../hooks/useWindowSize";

const SpotLightLayer = styled.div<{
  x: number;
  y: number;
  windowX: number;
  windowY: number;
}>`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: radial-gradient(
    circle at ${(props) => (props.x / props.windowX) * 100}%
      ${(props) => (props.y / props.windowY) * 100}%,
    transparent 60px,
    rgba(0, 0, 0, 0.75) 240px
  );
  z-index: 1000;
  pointer-events: none;
`;

const SpotLight: React.FC = () => {
  const [x, y] = useShadowLightCoordinates();
  const [windowX, windowY] = useWindowSize();
  return (
    <>
      <SpotLightLayer x={x} y={y} windowX={windowX} windowY={windowY} />
    </>
  );
};

export default SpotLight;
