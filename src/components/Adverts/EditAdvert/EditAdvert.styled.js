import styled from "styled-components";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';



export const CardItemEdited = styled.div`
    display: flex;
    flex-direction: column;
    height: 180px;
    min-width: 125px;
    border: 2px solid black;
    border-radius: 4px;
    margin-top: 20px;
    margin-left: 20px;
    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.7);
`;

export const ButtonsWrapper= styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px;
`;

export const DeleteButton = styled.button`
    cursor: pointer;
    border: none;
    border-radius:8px;
    background-color: transparent;
`;

export const CancelButton = styled.button`
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
    height: 30px;
    margin: 10px 0 10px 0;
    color: #000000;
`;

export const SelectItem = styled(MenuItem)`
    width: 100px;
    height: 30px;
    margin: 10px 0 10px 0;
    color: #000000;
`;

export const InputPlaceholder = styled(InputLabel)`
    font-weight: bold;
    color: black;
`
