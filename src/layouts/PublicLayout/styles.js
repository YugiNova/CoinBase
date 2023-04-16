import styled from "styled-components";

export const Layout = styled.div`
  background-color: black;
  position: relative;
`;

export const Main = styled.div`
  margin-top: 4.7rem;
  padding: 3rem 10rem;

  @media screen and (min-width: 300px) and (max-width: 600px) {
    padding: 1rem 1rem;
  }
`;
