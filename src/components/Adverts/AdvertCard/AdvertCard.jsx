import React from "react";
import {GoStar} from "react-icons/go";
import {FaJava} from "react-icons/fa";
import {SiAngularjs, SiCplusplus, SiCss3, SiDotnet, SiHtml5,SiJavascript, SiPhp, SiPython, SiReact, SiRuby, SiScala, SiVuedotjs } from "react-icons/si";

import {CardAuthor, CardItem, CardLevel, CardPrice, CardTechnology, IconLevel, IconTechnology} from "./AdvertCard.styled";

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
                <CardLevel>
                    {level}
                    <IconLevel>
                    {level==='Junior'?<GoStar/>:level==='Mid'?<><GoStar/><GoStar/></>:<><GoStar/><GoStar/><GoStar/></>}
                    </IconLevel>
                </CardLevel>
                <CardPrice>{price}$/h</CardPrice>
                <CardTechnology>
                    {technology}
                    <IconTechnology>
                        {technology==='Java'?<FaJava/>
                            :technology==="JavaScript"?<SiJavascript/>
                            :technology==="React"?<SiReact/>
                            :technology==="Angular"?<SiAngularjs/>
                            :technology==="Vue"?<SiVuedotjs/>
                            :technology==="HTML"?<SiHtml5/>
                            :technology==="Python"?<SiPython/>
                            :technology==="CSS"?<SiCss3/>
                            :technology==="PHP"?<SiPhp/>
                            :technology==="Scala"?<SiScala/>
                            :technology==="Ruby"?<SiRuby/>
                            :technology===".Net"?<SiDotnet/>
                            :<SiCplusplus/>
                        }
                    </IconTechnology>
                </CardTechnology>
            </CardItem>
        </>
    )

};

export default AdvertCard;
