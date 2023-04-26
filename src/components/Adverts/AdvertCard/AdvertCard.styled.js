import styled from "styled-components";


export const CardItem = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 200px;
    border: transparent;
    border-radius: 4px;
    flex-basis: calc((100% / 6) - 30px);
    margin-top: 20px;
    margin-left: 20px;
    background-color: rgba(0,0,0,0.6);
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.7);
    text-shadow: 3px 3px 0px rgba(0, 0, 0, 1);
    font-weight: bold;
        @media (max-width: 1000px) {
            flex-basis: calc((100% / 5) - 30px)
        }
        @media (max-width: 900px) {
            flex-basis: calc((100% / 4) - 30px)
        }
        @media (max-width: 700px) {
            flex-basis: calc((100% / 3) - 30px)
        }
        @media (max-width: 550px) {
            flex-basis: calc((100% / 2) - 30px)
        }
        @media (max-width: 350px) {
            flex-basis: calc((100% / 1) - 50px)
        }

`;

export const CardAuthor = styled.p`
    font-size: 1.2rem;
`;

export const CardLevel = styled.div`
    font-size: .9rem;
    display: flex;
    justify-content: center;
`;

export const CardPrice = styled.p`
    font-size: 1.1rem;
`;

export const CardTechnology = styled.div`
    font-size: 16px;
    display: flex;
    align-items: center;
`;

export const IconLevel = styled.div`
    font-size: 0.9rem;
    color: #f8ff75;
    padding: 0 0 0 10px;
    display: flex;
    align-items: center;
`;

export const IconTechnology = styled.div`
    font-size: 1.1rem;
    padding: 0 0 0 10px;
    display: flex;
    align-items: center;
`;