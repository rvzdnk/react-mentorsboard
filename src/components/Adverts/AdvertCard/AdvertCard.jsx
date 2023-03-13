import React from "react";
import { IconLevel } from "../IconLevel/IconLevel";

import {CardAuthor, CardItem, CardLevel, CardPrice,CardTechnology} from "./AdvertCard.styled";

const AdvertCard = ({
    technology,
    level,
    price,
    author,
}) => {
    return (
        <>
            <CardItem>
                <CardAuthor>{author}</CardAuthor>
                <CardTechnology>{technology}</CardTechnology>
                <CardLevel>{level}<IconLevel level={level}/></CardLevel>
                <CardPrice>{price}$/h</CardPrice>
            </CardItem>
        </>
    )

};

export default AdvertCard;
