import React, {useState} from "react";

import {GoStar} from "react-icons/go";
import {FaJava} from "react-icons/fa";
import {SiAngularjs, SiCplusplus, SiCss3, SiDotnet, SiHtml5,SiJavascript, SiPhp, SiPython, SiReact, SiRuby, SiScala, SiVuedotjs } from "react-icons/si";

import {CardAuthor, CardItem, CardLevel, CardPrice, CardTechnology, IconLevel, IconTechnology} from "./AdvertCard.styled";

import EditAdvert from "../EditAdvert/EditAdvert";

const AdvertCard = ({
    technologyAdvert,
    levelAdvert,
    priceAdvert,
    authorAdvert,
    idAdvert,
}) => {

    const [editAdvertIsOpen, setEditAdvertIsOpen] = useState(false);


    return (
        <>
        {!editAdvertIsOpen ?
            <CardItem onClick={()=> setEditAdvertIsOpen(true)}apple>
                <CardAuthor>{authorAdvert}</CardAuthor>
                <CardLevel>
                    {levelAdvert}
                    <IconLevel>
                    {levelAdvert==='Junior'?<GoStar/>
                    :levelAdvert==='Mid'?<><GoStar/><GoStar/></>
                    :<><GoStar/><GoStar/><GoStar/></>}
                    </IconLevel>
                </CardLevel>
                <CardPrice>{priceAdvert}$/h</CardPrice>
                <CardTechnology>
                    {technologyAdvert}
                    <IconTechnology>
                        {technologyAdvert==='Java'?<FaJava/>
                            :technologyAdvert==="JavaScript"?<SiJavascript/>
                            :technologyAdvert==="React"?<SiReact/>
                            :technologyAdvert==="Angular"?<SiAngularjs/>
                            :technologyAdvert==="Vue"?<SiVuedotjs/>
                            :technologyAdvert==="HTML"?<SiHtml5/>
                            :technologyAdvert==="Python"?<SiPython/>
                            :technologyAdvert==="CSS"?<SiCss3/>
                            :technologyAdvert==="PHP"?<SiPhp/>
                            :technologyAdvert==="Scala"?<SiScala/>
                            :technologyAdvert==="Ruby"?<SiRuby/>
                            :technologyAdvert===".Net"?<SiDotnet/>
                            :<SiCplusplus/>
                        }
                    </IconTechnology>
                </CardTechnology>
            </CardItem>
            :
            <EditAdvert
            open={editAdvertIsOpen}
            setEditAdvertIsOpen={setEditAdvertIsOpen}
            levelAdvert={levelAdvert}
            technologyAdvert={technologyAdvert}
            priceAdvert={priceAdvert}
            idAdvert={idAdvert}/>
        }
        </>
    )}

export default AdvertCard;