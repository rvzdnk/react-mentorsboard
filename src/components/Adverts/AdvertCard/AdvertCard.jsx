import React from "react";

import {CardAuthor, CardItem, CardLevel, CardPrice,CardTechnology} from "./AdvertCard.styled";

const AdvertCard = ({
    _id: id,
    technology,
    level,
    price,
    owner,
    author,
}) => {
    return (
            <CardItem>
                <CardAuthor>{author}</CardAuthor>
                <CardTechnology>{technology}</CardTechnology>
                <CardLevel>{level}</CardLevel>
                <CardPrice>{price}"$"</CardPrice>
            </CardItem>
    )

};

export default AdvertCard;
