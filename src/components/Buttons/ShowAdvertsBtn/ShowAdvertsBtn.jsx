import { useGetAllAdvertsQuery } from "../../../redux/slices/mentorsboardApi";
import { ShowMentors } from "./ShowAdvertsBtn.styled";
import Loader from '../Loader/Loader';

const ShowAdvertsBtn = () => {

    const {
        data: adverts = [],
        isLoading,
        isSuccess,
        isError,
        error,
        } = useGetAllAdvertsQuery();

    return (
        <>
        
        </>
        <ShowMentors>Show Mentors</ShowMentors>
    )
}

export default ShowAdvertsBtn;