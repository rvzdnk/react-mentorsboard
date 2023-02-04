import { useState } from "react";
import LoginModal from "../../Modal/LoginModal/LoginModal";
import { Button } from "../Button.styled";

const LoginBtn = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <Button onClick={() => setIsOpen(true)}>
           Sign in!
        </Button>
        {isOpen && <LoginModal setIsOpen={setIsOpen}/>}
        </>
    );
};

export default LoginBtn;