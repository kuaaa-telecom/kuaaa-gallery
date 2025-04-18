import styled from "@emotion/styled";
import { Canvas } from "@react-three/fiber";
import { GalaxyContextProvider } from "../../contexts/GalaxyContext";
import database from "../../scripts/reduced.json";
import ColorFader from "./ColorFader";
import Galaxy from "./Galaxy";

const CanvasContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const BHNBHome = () => {
  return (
    <>
      <GalaxyContextProvider database={database}>
        <CanvasContainer onDrag={(e) => e.preventDefault()}>
          <Canvas dpr={[1, 2]}>
            <Galaxy />
          </Canvas>
        </CanvasContainer>
        <ColorFader />
      </GalaxyContextProvider>
    </>
  );
};

export default BHNBHome;
