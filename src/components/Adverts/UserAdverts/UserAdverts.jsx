import React from "react";
import AdvertCard from "../AdvertCard/AdvertCard";
import PageLoader from "../../PageLoader/PageLoader";
import { useGetAllUserAdvertsQuery} from "../../../redux/slices/mentorsboardApi";
import { ListContainer, List, Message } from "../AdvertList.styled";
import { nanoid } from "@reduxjs/toolkit";

const UserAdverts = () => {
    const {
         data: adverts = [],
         isLoading,
         isSuccess,
         isError,
         error,
        } = useGetAllUserAdvertsQuery();

    const userAdvertsArray = adverts.userAdverts;
    console.log(userAdvertsArray);

    return(
        <ListContainer>
            {isLoading && <PageLoader />}
            {isSuccess &&
                (userAdvertsArray.length > 0 ? (
                <List>
                    {userAdvertsArray.map(({ author, level, technology, price, id }) => {
                        return <AdvertCard
                                    key={nanoid()}
                                    id={id}
                                    author={author}
                                    level={level}
                                    price={price}
                                    technology={technology}/>
                    })}
                </List>
            ) : (
                <Message> You don't have to any adverts. </Message>
                ))}
            {isError && <Message> Error: {error} </Message>}
        </ListContainer>
    )
};

export default UserAdverts;