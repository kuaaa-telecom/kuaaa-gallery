import styled from "@emotion/styled";
import React from "react";
import "./App.css";
import PosterGrid from "./components/PosterGrid";
import SpotLight from "./components/SpotLight";

const Background = styled.div`
  height: 100%;
  width: 100%;
  background: black;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

function App() {
  return (
    <>
      <Background>
        <PosterGrid />
        <SpotLight />
      </Background>
    </>
  );
}

export default App;
