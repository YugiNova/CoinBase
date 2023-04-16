import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CoinsTop = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;

  @media screen and (min-width: 300px) and (max-width: 600px) {
    flex-direction: column;
  }
`;
export const Title = styled.h2`
  margin: 0;
  margin-top: 5rem;
  text-transform: uppercase;
  background: linear-gradient(to right, #ff9332, #cac531);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 2rem;
`;
