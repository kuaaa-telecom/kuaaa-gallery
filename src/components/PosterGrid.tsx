import styled from "@emotion/styled";
import PosterImageGroup from "./PosterImageGroup";

const ROW = 4;
const COLUMN = 4;

const PosterGridContainer = styled.div`
  display: grid;
  width: 100vmax;
  min-width: 100vmax;
  grid-template-columns: repeat(${COLUMN}, 1fr);
  row-gap: 0;
`;

const PosterGrid: React.FC = () => {
  return (
    <>
      <PosterGridContainer>
        {new Array(ROW * COLUMN).fill(undefined).map((_) => (
          <PosterImageGroup />
        ))}
      </PosterGridContainer>
    </>
  );
};

export default PosterGrid;
