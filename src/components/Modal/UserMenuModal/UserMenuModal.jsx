import React from "react";

import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

import { useLogoutMutation } from "../../../redux/slices/mentorsboardApi";
import { deleteToken } from "../../../redux/slices/tokenSlice";
import { deleteUser } from "../../../redux/slices/userSlice";
import { showComponent } from "../../../redux/slices/visibilitySlice";

import { AiOutlineClose } from "react-icons/ai";
import { Wrapper, Modal, MenuHead, UserName, UserRole, MenuLink, MenuLinkWrapper, MenuHeadWrapper } from "./UserMenu.styled";
import { CloseButton, CloseButtonWrapper } from "../Modal.styled";


export const UserMenuModal = ({open,  setUserMenuIsOpen, setNewAdvertIsOpen}) => {
    const dispatch = useDispatch();

    const switchToNewAdvert =() => {
        setNewAdvertIsOpen(true);
        setUserMenuIsOpen(false);
    }

    const switchToMyAdverts = () => {
        dispatch(showComponent());
        setUserMenuIsOpen(false);
    }

    const [logout] = useLogoutMutation();

    const logoutUser = async () => {
        await Cookies.remove("token");
        await logout().then(() => {
          dispatch(deleteToken());
          dispatch(deleteUser());
        });
      };


    const {role} = useSelector(({user}) => user);
    const {name} = useSelector(({user}) => user);

    return (
        <>
            <Wrapper>
                <Modal isOpen={open}>
                    <MenuHeadWrapper>
                        <MenuHead>
                            <UserName>
                                {name}
                            </UserName>
                            <UserRole>
                                {role}
                            </UserRole>
                        </MenuHead>
                        <CloseButtonWrapper>
                                <CloseButton onClick={()=>setUserMenuIsOpen(false)}>
                                    <AiOutlineClose color="#FFF"/>
                                </CloseButton>
                        </CloseButtonWrapper>
                    </MenuHeadWrapper>
                    <MenuLinkWrapper>
                        {role==="Mentor" &&
                            <>
                                <MenuLink onClick={switchToMyAdverts}>
                                    My Adverts
                                </MenuLink>
                                <MenuLink onClick={switchToNewAdvert}>
                                    Create Advert
                                </MenuLink>
                            </>
                        }
                        <MenuLink onClick={logoutUser}>
                            Logout
                        </MenuLink>
                    </MenuLinkWrapper>
                </Modal>
            </Wrapper>
    </>
    )
};