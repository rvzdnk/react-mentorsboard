import { useState } from "react";
import RegisterModal from "../../Modal/RegisterModal/RegisterModal";
import { Button } from "../Button.styled";

const RegisterBtn = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <Button onClick={() => setIsOpen(true)}>
           Sign up!
        </Button>
        {isOpen && <RegisterModal setIsOpen={setIsOpen}/>}
        </>
    );
};

export default RegisterBtn;