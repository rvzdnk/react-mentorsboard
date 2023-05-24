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
         data: {allAdverts} =[],
         isLoading,
         isSuccess,
         isError,
         error,
        } = useGetAllAdvertsQuery();

    const user = useSelector((state) => state.user);
    const userRole = user.role;

    return(
        <ListContainer>
            {isLoading && <PageLoader />}
            {isSuccess &&
                (allAdverts.length > 0 ? (
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
                        {allAdverts.map(({ author, level, technology,owner, price, _id }) => {
                            return <AdvertCard
                                        key={nanoid()}
                                        idAdvert={_id}
                                        authorAdvert={author}
                                        levelAdvert={level}
                                        priceAdvert={price}
                                        technologyAdvert={technology}
                                        ownerId={owner}/>
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