import styled from "@emotion/styled";

export const SInput = styled.label`
  width: 100%;
  .position {
    position: relative;
    height: max-content;
    width: 100%;
    .eye {
      position: absolute;
      right: 0.9rem;
      fill: var(--black);
      top: 50%;
      transform: translateY(-50%);
    }
    input {
      background-color: var(--primary);
      border: none;
      padding: 0.8rem 0;
      padding-left: 1rem;
      width: 100%;
      color: var(--black);
      font-weight: bold;
      ::placeholder {
        color: var(--paragraph);
        font-weight: bold;
      }
    }
  }
`;
