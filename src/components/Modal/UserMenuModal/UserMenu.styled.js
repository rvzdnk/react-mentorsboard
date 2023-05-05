import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 10;
    margin: 5px 5px 0 0;
`;

export const Modal = styled.div`
    width: 200px;
    background-color: rgba(0, 0, 0);
    border-radius: 16px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    color: #FFF;
`;

export const MenuHeadWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 20px;
`;

export const MenuHead = styled.div`
    &::after {
        position: absolute;
        content: '';
        height: 2px;
        background: #FFF;
        opacity: 0.1;
        width: 100%;
        margin: 10px 0 0 -20px;
    }
`;

export const UserName = styled.p`
    font-size: 1rem;
    font-weight: bold;
`;

export const UserRole = styled.p`
    font-size: 0.8rem;

`;

export const MenuLinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-around;
    margin: 0 0 20px 20px;
`;

export const MenuLink = styled.div`
    margin: 10px 0 0 0;
    cursor: pointer;
    font-size: 1rem;
    letter-spacing: 0.05em;
    &:hover {
        color: rgb(120,120,120);
        font-weight: bold;
    }
`;

