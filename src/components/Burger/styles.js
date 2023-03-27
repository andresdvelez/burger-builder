import styled from "styled-components";

export const ContainerbtnCS = styled.section`
  display: flex;
  gap: 10rem;
  width: 100%;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 575px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
export const BurgerSC = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Bread = styled.div`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;

  & > img {
    width: 90%;
  }
`;

export const BtnWrapperSC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 100px;
  margin-top: 10%;
  padding-inline: 1.2em;

  & > button {
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.17);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    width: 100px;
    padding: 10px 0;
    padding-inline: 1.2em;

    & > img {
      width: 100%;
    }
  }

  @media (max-width: 575px) {
    flex-direction: row;

    width: 100%;
  }
`;
