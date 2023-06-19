import styled from "@emotion/styled";

export const SDashboard = styled.main`
  min-height: 100vh;
  background-color: var(--primary);
  @media (min-width: 768px) {
    height: 100vh;
  }
  .dashboard-main-container {
    padding: 2rem 2rem;
    height: max-content;
    /* overflow: hidden; */
    .user-logout {
      display: flex;
      flex-direction: column-reverse;
      @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      h2 {
        color: var(--black);
        font-size: 2.3rem;
      }
    }
    h3 {
      color: var(--paragraph);
      margin-top: 2rem;
      font-size: 1.5rem;
      span {
        color: var(--black);
      }
    }
    .report-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      height: 100%;
      margin-top: 1rem;
      @media (min-width: 768px) {
        flex-direction: row;
        height: 100%;
      }
      .indicators-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        @media (min-width: 768px) {
          width: 50%;
          justify-content: space-between;
        }
      }
    }
  }
`;
