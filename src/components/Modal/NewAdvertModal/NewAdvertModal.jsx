import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import { useCreateAdvertMutation } from "../../../redux/slices/mentorsboardApi";
import { advertLevel, advertTechnology } from "../../../utils/advertData";
// import { advertValidation } from "../../../schemas/advertValidation";

import { GrClose } from "react-icons/gr";
import { Wrapper, Modal, SelectInput, InputPlaceholder, CloseButton, CloseButtonWrapper, FormWrapper, Paragraph, Form, SliderInput, InputTitle, SubmitButton } from "../Modal.styled";

import FormControl from "@mui/material/FormControl";
import MenuItem from '@mui/material/MenuItem';


export const NewAdvertModal = ({open, setNewAdvertIsOpen }) => {

    const [createAdvert] = useCreateAdvertMutation();

    const { handleSubmit, values, handleChange, resetForm, errors, touched } =
        useFormik({
        initialValues: {
            level: "",
            technology: "",
            price: "",
        },
        // validationSchema: advertValidation,
        onSubmit:  async (values) => {
        await createAdvert(values)
        .unwrap()
        .then(() => {
            toast.success("Success!");
            resetForm();
            setNewAdvertIsOpen(false);
        })
        .catch(() => {
            toast.warn("Please make sure all fields are filled in correctly.");
        });
    },
})

    return (
        <>
            <Wrapper>
                <Modal isOpen={open}>
                    <CloseButtonWrapper>
                        <CloseButton onClick={()=>setNewAdvertIsOpen(false)}>
                            <GrClose/>
                        </CloseButton>
                    </CloseButtonWrapper>
                    <FormWrapper>
                        <Paragraph> Create Advert </Paragraph>
                        <Form onSubmit={handleSubmit}>
                            <FormControl>
                                <InputPlaceholder id="level-label">
                                    Level
                                </InputPlaceholder>
                                <SelectInput
                                    id="level"
                                    name="level"
                                    labelId="level-label"
                                    label="Level"
                                    value={values.level}
                                    onChange={handleChange}
                                    error={touched.level && Boolean(errors.level)}
                                    helpertext={touched.level && errors.level}
                                >
                                    {advertLevel.map((level) => (
                                        <MenuItem
                                        key={level}
                                        value={level}
                                        >
                                        {level}
                                        </MenuItem>
                                    ))}
                                </SelectInput>
                            </FormControl>
                            <FormControl>
                                <InputPlaceholder id="technology-label">
                                    Technology
                                </InputPlaceholder>
                                <SelectInput
                                    id="technology"
                                    labelId="technology-label"
                                    name="technology"
                                    value={values.technology}
                                    label="Technology"
                                    onChange={handleChange}
                                    error={touched.technology && Boolean(errors.technology)}
                                    helpertext={touched.technology && errors.technology}
                                >
                                    {advertTechnology.map((technology) => (
                                        <MenuItem
                                        key={technology}
                                        value={technology}
                                        >
                                        {technology}
                                        </MenuItem>
                                    ))}
                                </SelectInput>
                            </FormControl>
                            <FormControl>
                                <InputTitle id="non-linear-slider" gutterBottom>
                                    Price: {values.price}$/h
                                </InputTitle>
                                <SliderInput
                                    id="price"
                                    name="price"
                                    aria-valuetext="Price"
                                    value={values.price}
                                    onChange={handleChange}
                                    error={touched.price && Boolean(errors.price)}
                                    helpertext={touched.price && errors.price}
                                    defaultValue={0}
                                    step={1}
                                    min={1}
                                    max={50}
                                    aria-labelledby="price-slider"
                                    />
                            </FormControl>
                            <SubmitButton type="submit">
                                Submit
                            </SubmitButton>
                        </Form>
                    </FormWrapper>
                </Modal>
            </Wrapper>
    </>
    )
};