import styled from "styled-components";


export const CardItem = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 180px;
    min-width: 125px;
    align-items: center;
    border: 2px solid black;
    border-radius: 4px;
    flex-basis: calc((100% / 5) - 30px);
    margin-top: 20px;
    margin-left: 20px;
    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.7);
`;

export const CardAuthor = styled.h2`
    font-size: 18px;
`;

export const CardLevel = styled.h2`
    font-size: 12px;
    display: flex;
    justify-content: center;
`;

export const CardPrice = styled.h2`
    font-size: 12px;
`;

export const CardTechnology = styled.h2`
    font-size: 16px;
    display: flex;
    align-items: center;
`;

export const IconLevel = styled.div`
    font-size: 14px;
    color: #EED202;
    padding: 0 0 0 10px;
    display: flex;
    align-items: center;
`;

export const IconTechnology = styled.div`
    font-size: 18px;
    padding: 0 0 0 10px;
    display: flex;
    align-items: center;
`;