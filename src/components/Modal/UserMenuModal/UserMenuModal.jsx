import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import { NewAdvertModal } from "../NewAdvertModal/NewAdvertModal";
import { Wrapper, Modal, MenuHead, UserName, UserRole, MenuLink, MenuLinkWrapper } from "./UserMenu.styled";



export const UserMenuModal = ({open, setUserMenuIsOpen}) => {

    const [newAdvertIsOpen, setNewAdvertIsOpen] = useState(false);
    const handleNewAdvert = () => {
        setNewAdvertIsOpen(true);
    };

    const user = useSelector((state) => state.user);
    const userRole = user.role;
    const userName = user.name;

    return (
        <>
            <Wrapper>
                <Modal isOpen={open}>
                    <MenuHead>
                        <UserName>
                            {userName}
                        </UserName>
                        <UserRole>
                            {userRole}
                        </UserRole>
                    </MenuHead>
                    <MenuLinkWrapper>
                        {userRole==="Mentor" ?
                            <MenuLink onClick={handleNewAdvert}>
                                Create Advert
                            </MenuLink>
                        :<></>}
                        {newAdvertIsOpen && <NewAdvertModal newAdvertisOpen={newAdvertIsOpen} setNewAdvertIsOpen={setNewAdvertIsOpen}/>}
                    </MenuLinkWrapper>

                </Modal>
            </Wrapper>
    </>
    )
};