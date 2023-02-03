import styled from "styled-components";

export const Backdrop = styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    width: 100vw;
    height: 100vh;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
`;

export const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Modal = styled.div`
    width: 290px;
    padding: 10px 10px;
    background: white;
    color: white;
    z-index: 10;
    border-radius: 16px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`;

export const Paragraph = styled.p`
    color: black;
    font-size: 30px;
    font-weight: bold;
`;

export const CloseButtonWrapper= styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const FormWrapper=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

