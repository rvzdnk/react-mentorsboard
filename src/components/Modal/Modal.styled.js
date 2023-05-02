import styled from "styled-components";
import { motion } from "framer-motion";

import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Select from '@mui/material/Select';
import Slider from "@mui/material/Slider";
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';


export const Backdrop = styled.div`
    background-color: rgba(40, 40, 43, 0.8);
    width: 100vw;
    height: 100vh;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
`;

export const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 20;
    transform: translate(-50%, -50%);
`;

export const Modal = styled.div`
    width: 250px;
    padding: 20px 10px;
    background: white;
    border-radius: 16px;
    background-color: rgba(0, 0, 0);
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
`;

export const Paragraph = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 0 20px 0;
`;

export const CloseButtonWrapper= styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const CloseButton = styled.button`
    cursor: pointer;
    color: #000;
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
    font-size: 0.9rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    >:first-child{
        margin: 0 0 0 10px;
    }
`;

export const LinkRedirect = styled(motion.div)`
    cursor: pointer;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TextInput = styled(TextField)`
color: #FFF;
`;

export const RadioInput = styled(RadioGroup)`

`;

export const RadioInputLabel = styled(FormControlLabel)`
    color: black;
`;

export const RadioMarker = styled(Radio)`

`;

export const SelectInput = styled(Select)`
    width: 140px;
    height: 40px;
    margin: 10px 0 10px 0;
    color: #FFF;
`;

export const SliderInput = styled(Slider)`
    width: 140px;
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
    color: #FFF;
    background-color: rgba(255, 255, 255, 0.3);
`;

export const InputTitle = styled(Typography)`
    font-size: 16px;
    font-weight: bold;
    color: #000;
    margin: 10px 0 10px 0;
`

export const InputPlaceholder = styled(InputLabel)`
    font-weight: bold;
    color: #FFF;
`

