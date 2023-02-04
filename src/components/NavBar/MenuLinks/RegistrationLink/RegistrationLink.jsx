import { useState } from "react";
import RegisterModal from "../../../Modal/RegisterModal/RegisterModal";
import { Link } from "../Link.styled";

const RegistrationLink = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <Link onClick={() => setIsOpen(true)}>
           Sign up
        </Link>
        {isOpen && <RegisterModal setIsOpen={setIsOpen}/>}
        </>
    );
};

export default RegistrationLink;