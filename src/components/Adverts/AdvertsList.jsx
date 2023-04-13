import React from "react";
import { useDispatch } from "react-redux";
import AdvertCard from "./AdvertCard/AdvertCard";
import PageLoader from "../PageLoader/PageLoader"
import { showComponent } from "../../redux/slices/visibilitySlice";
import { useGetAllAdvertsQuery } from "../../redux/slices/mentorsboardApi";
import { ListContainer, List, Message, AdvertsWrapper, AdvertsBar, AdvertsTitle, AdvertsRedirect } from "./AdvertList.styled";
import { nanoid } from "@reduxjs/toolkit";
import { TbArrowLeft } from "react-icons/tb";

const AdvertsList = () => {

    const dispatch = useDispatch();
    const handleShowComponent = () => {
        dispatch(showComponent());
    };

    const {
         data: adverts = [],
         isLoading,
         isSuccess,
         isError,
         error,
        } = useGetAllAdvertsQuery();

    const allAdvertsArray = adverts.allAdverts;


    return(
        <ListContainer>
            {isLoading && <PageLoader />}
            {isSuccess &&
                (allAdvertsArray.length > 0 ? (
                <AdvertsWrapper>
                    <AdvertsBar>
                        <AdvertsTitle>
                            It's all adverts. Choose the best one.
                        </AdvertsTitle>
                        <HideUserAdverts onClick={handleShowComponent}>
                            Check your adverts!
                            <TbArrowLeft/>
                        </HideUserAdverts>
                    </AdvertsBar>
                    <List>
                        {allAdvertsArray.map(({ author, level, technology, price, id }) => {
                            return <AdvertCard
                                        key={nanoid()}
                                        id={id}
                                        author={author}
                                        level={level}
                                        price={price}
                                        technology={technology}/>
                        })}
                    </List>
                </AdvertsWrapper>
            ) : (
                <Message> No adverts at this moment </Message>
                ))}
            {isError && <Message> Error: {error} </Message>}
        </ListContainer>
    )
};

export default AdvertsList;