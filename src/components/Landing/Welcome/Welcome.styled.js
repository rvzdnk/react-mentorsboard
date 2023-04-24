import styled from "styled-components"

export const WelcomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const UserNameWrapper = styled.div`
`

export const Title = styled.h1`
    font-size: 2rem;
    @media (max-width: 1000px) {
        font-size: 1.6rem
      }
    @media (max-width: 700px) {
        font-size: 1.3rem
      }
    @media (max-width: 500px) {
        font-size: 1rem
      }
`;

export const Hello = styled.div`
    font-size: 5rem;
    @media (max-width: 1000px) {
        font-size: 4rem
      }
    @media (max-width: 700px) {
        font-size: 3rem
      }
    @media (max-width: 500px) {
        font-size: 2rem
      }
`;

export const Subtitle = styled.p`
    font-size: 1.2rem;
    margin: 30px 0 30px 0;
    text-align: center;
    @media (max-width: 1000px) {
        font-size: 1.2rem
      }
    @media (max-width: 700px) {
        font-size: 1.1rem
      }
    @media (max-width: 500px) {
        font-size: 1rem
      }
`;