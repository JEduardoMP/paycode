import styled from "@emotion/styled";

export const SChartContainer = styled.div`
  height: 40%;
  background-color: var(--secundary);
  width: 100%;
  padding: 1rem;
  box-shadow: var(--shadowBox);
  border-radius: 0.3rem;
  @media (min-width: 768px) {
    width: 50%;
  }
  .text-container {
    color: var(--paragraph);
    margin-bottom: 1rem;
    h2 {
      color: var(--black);
      span {
        font-size: 0.8rem;
      }
    }
  }
  canvas {
    height: 15rem !important;
  }
`;
