import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 2.4rem;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 14rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }
  @media (max-width: 1024.98px) {
    .top-btn {
      right: 0;
      left: 85%;
    }
  }
  @media (max-width: 425.98px) {
    .top-btn {
      right: 0;
      left: 78%;
    }
  }
  @media (max-width: 320.98px) {
    .top-btn {
      right: 0;
      left: 72%;
    }
  }
`;
