import styled from "styled-components";

import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

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
    width: 250px;
    padding: 20px 10px;
    background: white;
    color: white;
    z-index: 10;
    border-radius: 16px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;

`;

export const Paragraph = styled.p`
    color: black;
    font-size: 26px;
    font-weight: bold;
`;

export const CloseButtonWrapper= styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const CloseButton = styled.button`
    cursor: pointer;
    border: none;
    border-radius:8px;
    background-color: transparent;
`;

export const FormWrapper=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const Redirect=styled.span`
    font-size: 16px;
    color: black;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    >:first-child{
        margin: 0 0 0 10px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TextInput = styled(TextField)`

`;

export const RadioInput = styled(RadioGroup)`

`;

export const RadioInputLabel = styled(FormControlLabel)`
    color: black;
`;

export const RadioMarker = styled(Radio)`

`;

export const SubmitButton = styled.button`
    height: 40px;
    width: 120px;
    font-size: 16px;
    font-weight: bold;
    margin: 20px 10px 20px 10px;
    border-radius: 20px;
    border: 1px solid black;
    box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.9);
    color: white;
    background-color: black;
`;

