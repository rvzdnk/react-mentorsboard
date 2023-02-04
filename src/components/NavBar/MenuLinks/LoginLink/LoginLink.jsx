import { useState } from "react";
import LoginModal from "../../../Modal/LoginModal/LoginModal";
import { Link } from "../Link.styled";

const LoginLink = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <Link onClick={() => setIsOpen(true)}>
            Log in
        </Link>
        {isOpen && <LoginModal setIsOpen={setIsOpen}/>}
        </>
    );
};

export default LoginLink;