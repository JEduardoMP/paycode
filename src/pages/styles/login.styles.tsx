import styled from "@emotion/styled";

export const SLogin = styled.main`
  background-color: var(--primary);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-container {
    background-color: var(--secundary);
    width: 60%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    box-shadow: var(--shadowBox);
    padding: 1.5rem 1rem;
    border-radius: 0.2rem;
    @media (min-width: 768px) {
      width: 30%;
    }
    img {
      width: 50%;
      margin: 0 auto;
      text-align: center;
    }
  }
`;
