import React from "react";

import { useDeleteAdvertMutation, useEditAdvertMutation } from "../../../redux/slices/mentorsboardApi";
import { CardItemEdited, DeleteButton, CancelButton, ButtonsWrapper, SelectInput, InputTitle, SliderInput, InputPlaceholder, CardForm, SelectItem, SubmitButton } from "./EditAdvert.styled";
import { AiOutlineRollback, AiOutlineClose } from "react-icons/ai";
import { useFormik, getIn  } from "formik";

import { advertLevel, advertTechnology } from "../../../utils/advertData";
import { toast } from "react-toastify";
import FormControl from "@mui/material/FormControl";


const EditAdvert = ({
    open,
    setEditAdvertIsOpen,
    technologyAdvert,
    levelAdvert,
    priceAdvert,
    idAdvert,
}) => {

    const [deleteAdvert] = useDeleteAdvertMutation();
    const [editAdvert] = useEditAdvertMutation();

    const { handleSubmit, values, handleChange, resetForm, } =
    useFormik({
    initialValues: {
        body: {
            technology: technologyAdvert,
            level: levelAdvert,
            price: priceAdvert,
        },
        id: idAdvert,
    },
    onSubmit:  async (values) => {
    await editAdvert(values)
    .unwrap()
    .then(() => {
        toast.success("Success!");
        resetForm();
        setEditAdvertIsOpen(false);
    })
    .catch(() => {
        toast.warn("Please make sure all fields are filled in correctly.");
    });
},
})

    return (
        <>
            <CardItemEdited open={open}>
                <ButtonsWrapper>
                    <CancelButton onClick={()=>setEditAdvertIsOpen(false)}>
                        <AiOutlineRollback color="#FFF" font-weight="bold"/>
                    </CancelButton>
                    <DeleteButton onClick={()=>deleteAdvert(idAdvert)}>
                        <AiOutlineClose color="#FFF"/>
                    </DeleteButton>
                </ButtonsWrapper>
                <CardForm onSubmit={handleSubmit}>
                    <FormControl>
                        <InputPlaceholder id="level-label" 
                        sx={{color: "white",
                            "&.Mui-focused": { color: "#f8ff75"}
                        }}
                        >
                            Level
                        </InputPlaceholder>
                        <SelectInput
                            id="level"
                            name="body.level"
                            labelId="level-label"
                            label="Level"
                            defaultValue={levelAdvert}
                            value={getIn(values,"body.level")}
                            onChange={handleChange}
                            sx={{
                                fontWeight: "bold",
                            "&.MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor: "#FFF"
                                },
                                "&:hover fieldset": {
                                  borderColor: "#f8ff75"
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#f8ff75"},
                                "& svg": {
                                    color: "#000"}
                                }
                            }}
                            >
                                {advertLevel.map((levelAdvert) => (
                                    <SelectItem
                                        key={levelAdvert}
                                        value={levelAdvert}
                                    >
                                    {levelAdvert}
                                    </SelectItem>
                                ))}
                        </SelectInput>
                    </FormControl>
                    <FormControl>
                        <InputPlaceholder id="technology-label"  
                        sx={{color: "white",
                            "&.Mui-focused": { color: "#f8ff75"}
                        }}>
                            Technology
                        </InputPlaceholder>
                        <SelectInput
                            id="level"
                            name="body.technology"
                            labelId="technology-label"
                            label="technology"
                            defaultValue={technologyAdvert}
                            value={getIn(values,"body.technology")}
                            onChange={handleChange}
                            sx={{
                                fontWeight: "bold",
                            "&.MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor: "#FFF"
                                },
                                "&:hover fieldset": {
                                  borderColor: "#f8ff75"
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#f8ff75"},
                                "& svg": {
                                    color: "#000"}
                                }
                            }}
                            >
                            {advertTechnology.map((technologyAdvert) => (
                                <SelectItem
                                    key={technologyAdvert}
                                    value={technologyAdvert}
                                >
                                {technologyAdvert}
                                </SelectItem>
                            ))}
                        </SelectInput>
                    </FormControl>
                    <FormControl>
                        <InputTitle id="non-linear-slider" gutterBottom>
                            Price: {getIn(values,"body.price")}$/h
                        </InputTitle>
                        <SliderInput
                            id="price"
                            name="body.price"
                            aria-valuetext="Price"
                            value={getIn(values,"body.price")}
                            onChange={handleChange}
                            defaultValue={priceAdvert}
                            step={1}
                            min={1}
                            max={50}
                            aria-labelledby="price-slider"
                            sx={{ color: '#f8ff75'}}
                            />
                    </FormControl>
                    <SubmitButton type="submit"> Submit </SubmitButton>
                </CardForm>
            </CardItemEdited>

        </>
    )

};

export default EditAdvert;
