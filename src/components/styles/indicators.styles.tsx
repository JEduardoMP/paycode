import styled from "@emotion/styled";

export const SIndicators = styled.div<{ earnings: boolean }>`
  background-color: var(--secundary);
  width: 100%;
  color: var(--paragraph);
  padding: 0.5rem 1rem;
  box-shadow: var(--shadowBox);
  border-radius: 0.3rem;
  h2 {
    color: var(--black);
    font-size: 1.8rem;
    margin-bottom: 0.3rem;
    span {
      color: var(--paragraph);
      font-size: 0.8rem;
    }
  }
  .indicator-percentage {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    .percentage {
      background-color: ${(props) =>
        props.earnings ? "var(--bgGreen)" : "var(--bgRed)"};
      padding: 0.1rem 0.5rem;
      border-radius: 1rem;
      p {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${(props) => (props.earnings ? "var(--green)" : "var(--red)")};
        font-weight: bold;
        font-size: 0.8rem;
        svg {
          margin-right: 0.2rem;
          width: 1rem;
          fill: ${(props) => (props.earnings ? "var(--green)" : "var(--red)")};
        }
      }
    }
  }
`;
