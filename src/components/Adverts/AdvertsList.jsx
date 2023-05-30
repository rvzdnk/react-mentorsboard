import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import AdvertCard from "./AdvertCard/AdvertCard";
import PageLoader from "../PageLoader/PageLoader"
import { showComponent } from "../../redux/slices/visibilitySlice";
import { useGetAllAdvertsQuery } from "../../redux/slices/mentorsboardApi";
import { ListContainer, List, Message, AdvertsWrapper, AdvertsBar, AdvertsTitle, AdvertsRedirect, StyledReactPaginate } from "./AdvertList.styled";
import { nanoid } from "@reduxjs/toolkit";
import { TbArrowLeft } from "react-icons/tb";


const AdvertsList = () => {

    const dispatch = useDispatch();
    const handleShowComponent = () => {
        dispatch(showComponent());
    };

    const [pageNumber, setPageNumber] = useState(1);

    const {
         data: {allAdverts, totalAdverts, totalPages } =[],
         isLoading,
         isSuccess,
         isError,
         error,
        } = useGetAllAdvertsQuery(pageNumber);

    const {role} = useSelector(({user}) => user);

    const changePage = (e) => {
        const newPage = (e.selected + 1);
        setPageNumber(newPage);
      };

    return(
        <ListContainer>
            {isLoading && <PageLoader />}
            {isSuccess &&
                (totalAdverts > 0 ? (
                <AdvertsWrapper>
                    {role === "Mentor" &&
                    <AdvertsBar>
                        <AdvertsTitle>
                            It's all adverts. Choose the best one.
                        </AdvertsTitle>
                        <AdvertsRedirect onClick={handleShowComponent}>
                            Check your adverts!
                            <TbArrowLeft/>
                        </AdvertsRedirect>
                    </AdvertsBar>
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
                    <StyledReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={totalPages}
                        onPageChange={changePage}
                        renderOnZeroPageCount={null}
                        breakLabel="..."
                        activeClassName={"active"}
                    />
                </AdvertsWrapper>

            ) : (
                <Message> No adverts at this moment </Message>
                ))}
            {isError && <Message> Error: {error} </Message>}
        </ListContainer>
    )
};

export default AdvertsList;