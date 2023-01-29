import { useAllAdvertsMutation } from "../../../redux/slices/mentorsboardApi";
import { ShowMentors } from "./ShowAdvertsBtn.styled";

const ShowAdvertsBtn = () => {

    const [ allAdverts ] = useAllAdvertsMutation;

    return (
        <ShowMentors onClick={ allAdverts() }>Show Mentors</ShowMentors>
    ) 
}

export default ShowAdvertsBtn;