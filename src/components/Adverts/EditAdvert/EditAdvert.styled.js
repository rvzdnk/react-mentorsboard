import styled from "styled-components";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Slider from "@mui/material/Slider";

export const CardItemEdited = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200px;
    width: 100%;
    border: transparent;
    border-radius: 4px;
    margin-top: 20px;
    margin-left: 20px;
    background-color: rgba(0,0,0,0.6);
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.7);
    text-shadow: 3px 3px 0px rgba(0, 0, 0, 1);
    flex-basis: calc((100% / 6) - 30px);
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

export const ButtonsWrapper= styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 5px;
`;

export const DeleteButton = styled.div`
    cursor: pointer;
    border: none;
    border-radius:8px;
    background-color: transparent;
`;

export const CancelButton = styled.div`
    cursor: pointer;
    border: none;
    border-radius:8px;
    background-color: transparent;
`;

export const CardForm = styled.form`
    margin: 0 10px 0 10px;
    display: flex;
    flex-direction: column;
`;

export const SelectInput = styled(Select)`
    width: 100px;
    height: 20px;
    margin: 10px 0 12px 0;
    color: #FFF;
    text-shadow: none;
    background-color: white;
`;


export const SelectItem = styled(MenuItem)`
    width: 100px;
    color: #FFF;
`;

export const InputPlaceholder = styled(InputLabel)`
    color: #FFF;
    text-shadow: none;
`

export const SliderInput = styled(Slider)`
    width: 120px;
    margin: 5px 0;
`;

export const InputTitle = styled.p`
    font-weight: bold;
`;

export const SubmitButton = styled.button`
    height: 20px;
    width: 100px;
    font-size: 0.9rem;
    font-weight: bold;
    border-radius: 20px;
    border: none;
    color: #FFF;
    background-color: rgba(255, 255, 255, 0.3);
`;