import styled from "styled-components";

import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TextInput = styled(TextField)`

`;

export const RadioInput = styled(RadioGroup)`
    padding: 20px 0 10px 0;
`;

export const RadioInputLabel = styled(FormControlLabel)`
    color: black;
`;

export const RadioMarker = styled(Radio)`

`;