import { useSelector } from "react-redux";
import { useState } from "react";

import { MenuWrapper, UserMenu } from "../NavBar.styled";
import { UserMenuModal } from "../../Modal/UserMenuModal/UserMenuModal";


export const LoginUserMenu = () => {

    const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
    const handleUserMenu = () => {setUserMenuIsOpen(true)};

    const user = useSelector((state) => state.user);
    const userName = user.name;

    return (
      <>
      <MenuWrapper>
        <UserMenu onClick={handleUserMenu}>
          {userName}
        </UserMenu>
        {userMenuIsOpen && <UserMenuModal open={userMenuIsOpen} setUserMenuIsOpen={setUserMenuIsOpen}/>}
      </MenuWrapper>
      </>

    )
}