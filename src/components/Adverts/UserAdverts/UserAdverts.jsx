import React from "react";
import { useDispatch } from "react-redux";
import AdvertCard from "../AdvertCard/AdvertCard";
import PageLoader from "../../PageLoader/PageLoader";
import { hideComponent } from "../../../redux/slices/visibilitySlice";
import { useGetAllUserAdvertsQuery} from "../../../redux/slices/mentorsboardApi";
import { ListContainer, List, Message, AdvertsWrapper, AdvertsBar, AdvertsTitle, AdvertsRedirect } from "../AdvertList.styled";
import { nanoid } from "@reduxjs/toolkit";
import { TbArrowRight } from "react-icons/tb";


const UserAdverts = () => {

    const dispatch = useDispatch();

    const handleHideComponent = () => {
        dispatch(hideComponent());
    };

    const {
         data: adverts = [],
         isLoading,
         isSuccess,
         isError,
         error,
        } = useGetAllUserAdvertsQuery();

    const userAdvertsArray = adverts.userAdverts;

    return(
        <ListContainer>
            {isLoading && <PageLoader />}
            {isSuccess &&
                (userAdvertsArray.length > 0 ? (
                    <AdvertsWrapper>
                        <AdvertsBar>
                            <AdvertsTitle>
                                It's your adverts. Click in if you want to edit or delete.
                            </AdvertsTitle>
                            <AdvertsRedirect onClick={handleHideComponent}>
                                Check all adverts!
                                <TbArrowRight/>
                            </AdvertsRedirect>
                        </AdvertsBar>
                        <List>
                            {userAdvertsArray.map(({ author, level, technology, price, _id }) => {
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
                <Message> You don't have to any adverts. </Message>
                ))}
            {isError && <Message> Error: {error} </Message>}
        </ListContainer>
    )
};

export default UserAdverts;