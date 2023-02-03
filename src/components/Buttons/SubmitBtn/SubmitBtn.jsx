import { GrNext } from "react-icons/gr";
import { Button } from "../Button.styled";

const SubmitBtn = () => {
    return(
        <Button type="submit">
           Submit <GrNext color="white"/>
        </Button>
    );
};

export default SubmitBtn;