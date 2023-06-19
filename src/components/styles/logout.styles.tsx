import styled from "@emotion/styled";

export const SLogout = styled.button`
  background-color: var(--light-grey);
  border: none;
  display: flex;
  align-items: center;
  width: 7.5rem;
  height: max-content;
  padding: 0.5rem 0;
  padding-left: 0.3rem;
  color: var(--paragraph);
  font-weight: bold;
  border-radius: 0.3rem;
  svg {
    fill: var(--paragraph);
    margin-right: 0.7rem;
  }
  :active {
    background-color: var(--paragraph);
  }
`;
