import React from "react";

import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

import { useLogoutMutation } from "../../../redux/slices/mentorsboardApi";
import { deleteToken } from "../../../redux/slices/tokenSlice";
import { deleteUser } from "../../../redux/slices/userSlice";

import { Wrapper, Modal, MenuHead, UserName, UserRole, MenuLink, MenuLinkWrapper } from "./UserMenu.styled";



export const UserMenuModal = ({open,  setUserMenuIsOpen, setNewAdvertIsOpen}) => {

    const switchToNewAdvert =() => {
        setNewAdvertIsOpen(true);
        setUserMenuIsOpen(false);
    }


    const [logout] = useLogoutMutation();
    const dispatch = useDispatch();

    const logoutUser = async () => {
        await Cookies.remove("token");
        await logout().then(() => {
          dispatch(deleteToken());
          dispatch(deleteUser());
        });
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
                            <>
                                <MenuLink>
                                    My Adverts
                                </MenuLink>
                                <MenuLink onClick={switchToNewAdvert}>
                                    Create Advert
                                </MenuLink>
                            </>
                        :<></>}
                        <MenuLink onClick={logoutUser}>
                            Logout
                        </MenuLink>
                    </MenuLinkWrapper>
                </Modal>
            </Wrapper>
    </>
    )
};