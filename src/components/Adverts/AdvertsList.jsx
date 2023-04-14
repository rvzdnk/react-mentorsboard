import React from "react";
import { useDispatch, useSelector } from "react-redux";
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

    const user = useSelector((state) => state.user);
    const userRole = user.role;

    return(
        <ListContainer>
            {isLoading && <PageLoader />}
            {isSuccess &&
                (allAdvertsArray.length > 0 ? (
                <AdvertsWrapper>
                    {userRole === "Mentor"
                    ?<AdvertsBar>
                        <AdvertsTitle>
                            It's all adverts. Choose the best one.
                        </AdvertsTitle>
                        <AdvertsRedirect onClick={handleShowComponent}>
                            Check your adverts!
                            <TbArrowLeft/>
                        </AdvertsRedirect>
                    </AdvertsBar>
                    :<></>
                    }
                    <List>
                        {allAdvertsArray.map(({ author, level, technology, price, _id }) => {
                            return <AdvertCard
                                        key={nanoid()}
                                        idAdvert={_id}
                                        authorAdvert={author}
                                        levelAdvert={level}
                                        priceAdvert={price}
                                        technologyAdvert={technology}/>
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