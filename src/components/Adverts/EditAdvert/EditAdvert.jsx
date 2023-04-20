import React from "react";

import { useDeleteAdvertMutation, useEditAdvertMutation } from "../../../redux/slices/mentorsboardApi";
import { CardItemEdited, DeleteButton, CancelButton, ButtonsWrapper, SelectInput, InputPlaceholder, CardForm, SelectItem } from "./EditAdvert.styled";
import {GrClose} from "react-icons/gr";
import {AiOutlineRollback} from "react-icons/ai";
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

console.log(values);

    return (
        <>
            <CardItemEdited open={open}>
                <ButtonsWrapper>
                    <CancelButton onClick={()=>setEditAdvertIsOpen(false)}>
                        <AiOutlineRollback/>
                    </CancelButton>
                    <DeleteButton onClick={()=>deleteAdvert(idAdvert)}>
                        <GrClose/>
                    </DeleteButton>
                </ButtonsWrapper>
                <CardForm onSubmit={handleSubmit}>
                    <FormControl>
                        <InputPlaceholder id="level-label">
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
                        <InputPlaceholder id="technology-label">
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
                    <button type="submit"> Submit </button>
                </CardForm>
            </CardItemEdited>

        </>
    )

};

export default EditAdvert;
