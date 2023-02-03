import React from "react";
import AdvertCard from "./AdvertCard/AdvertCard";
import { useGetAllAdvertsQuery } from "../../redux/slices/mentorsboardApi";
import PageLoader from '../PageLoader/PageLoader';
import { ListContainer, List, Message } from "./AdvertList.styled";

const AdvertsList = () => {
    const {
         data:
            adverts = [],
            isLoading,
            isSuccess,
            isError,
            error,
        } = useGetAllAdvertsQuery();

    return(
        <ListContainer>
            {isLoading && <PageLoader />}
            {isSuccess &&
                (adverts?.length > 0 ? (
                <List>
                    {adverts.map(({ author, level, technology, price, id }) => {
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