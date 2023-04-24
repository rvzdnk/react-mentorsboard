import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #fff;
    padding: 30px 20px 30px 20px;
`;

export const MenuWrapper = styled.div`

`;

export const Link = styled.span`
    cursor: pointer;
    font-size: 18px;
    letter-spacing: 0.05em;
    position: relative;
    margin: 0 0 0 10px;
        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            border-radius: 4px;
            background-color: #fff;
            bottom: 0;
            left: 0;
            transform-origin: right;
            transform: scaleX(0);
            transition: transform .3s ease-in-out;
        },
        &:hover::before {
            transform-origin: left;
            transform: scaleX(1);
        },
`;

export const UserMenu = styled.span`
    cursor: pointer;
    font-size: 18px;
    letter-spacing: 0.05em;
    margin: 0 0 0 10px;
`