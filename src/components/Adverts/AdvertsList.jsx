import React from "react";
import AdvertCard from "./AdvertCard/AdvertCard";
import PageLoader from "../PageLoader/PageLoader"
import { useGetAllAdvertsQuery } from "../../redux/slices/mentorsboardApi";
import { ListContainer, List, Message } from "./AdvertList.styled";

const AdvertsList = () => {
    const {
         data: adverts = [],
         isLoading,
         isSuccess,
         isError,
         error,
        } = useGetAllAdvertsQuery();

    const allAdvertsArray = adverts.allAdverts


    return(
        <ListContainer>
            {isLoading && <PageLoader />}
            {isSuccess &&
                (allAdvertsArray.length > 0 ? (
                <List>
                    {allAdvertsArray.map(({ author, level, technology, price, id }) => {
                        return <AdvertCard
                                    key={id}
                                    id={id}
                                    author={author}
                                    level={level}
                                    price={price}
                                    technology={technology}/>
                    })}
                </List>
            ) : (
                <Message> No adverts at this moment </Message>
                ))}
            {isError && <Message> Error: {error} </Message>}
        </ListContainer>
    )
};

export default AdvertsList;