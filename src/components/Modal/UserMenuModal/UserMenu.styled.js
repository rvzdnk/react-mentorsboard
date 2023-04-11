import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    margin: 10px 10px 0 0;
`;

export const Modal = styled.div`
    width: 250px;
    padding: 20px 10px;
    background: white;
    z-index: 10;
    border-radius: 16px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
`;

export const MenuHead = styled.div`
    &::after {
        position: absolute;
        content: '';
        height: 2px;
        background: black;
        opacity: 0.1;
        width: 100%;
        margin: 10px 0 0 -10px;
    }
`;

export const UserName = styled.p`
    font-size: 16px;
    font-weight: bold;
`;

export const UserRole = styled.p`
    font-size: 12px;

`;

export const MenuLinkWrapper = styled.div`
    margin: 20px 0 0 0;
`;

export const MenuLink = styled.span`
    cursor: pointer;
    font-size: 16px;
    letter-spacing: 0.05em;
`;