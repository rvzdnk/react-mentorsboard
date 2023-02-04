import styled from "styled-components";

import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

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
