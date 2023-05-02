import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { LoginMenuWrapper, Link, HamburgerMenu } from "../NavBar.styled";

import { UserMenuModal } from "../../Modal/UserMenuModal/UserMenuModal";
import { NewAdvertModal } from "../../Modal/NewAdvertModal/NewAdvertModal";
import { showComponent } from "../../../redux/slices/visibilitySlice";
import { useLogoutMutation } from "../../../redux/slices/mentorsboardApi";
import { deleteToken } from "../../../redux/slices/tokenSlice";
import { deleteUser } from "../../../redux/slices/userSlice";

import AnimatedTextCharacter from '../../../utils/animatedTextCharacter';
import {GiHamburgerMenu} from "react-icons/gi";
import Cookies from "js-cookie";

export const LoginUserMenu = () => {

  const dispatch = useDispatch();
  const handleMyAdverts = () => {dispatch(showComponent())};

  const [logout] = useLogoutMutation();

  const logoutUser = async () => {
    await Cookies.remove("token");
    await logout().then(() => {
      dispatch(deleteToken());
      dispatch(deleteUser());
    });
  };

    const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
    const [newAdvertIsOpen, setNewAdvertIsOpen] = useState(false);

    const handleUserMenu = () => {setUserMenuIsOpen(true)};
    const handleNewAdvert = () => {setNewAdvertIsOpen(true)};

    const user = useSelector((state) => state.user);
    const userRole = user.role;

    return (
      <>
      <LoginMenuWrapper>
        {userRole==="Mentor" ?
          <>
              <Link onClick={handleMyAdverts} whileHover={{scale: 1.1}}>
                  <AnimatedTextCharacter>
                    My Adverts
                  </AnimatedTextCharacter>
              </Link>
              <Link onClick={handleNewAdvert} whileHover={{scale: 1.1}}>
                <AnimatedTextCharacter>
                  Create Advert
                </AnimatedTextCharacter>
              </Link>
          </>
        :<></>}
        <Link onClick={logoutUser} whileHover={{scale: 1.1}}>
          <AnimatedTextCharacter>
              Logout
          </AnimatedTextCharacter>
        </Link>
      </LoginMenuWrapper>
      <HamburgerMenu onClick={handleUserMenu}>
            <GiHamburgerMenu/>
      </HamburgerMenu>
      {userMenuIsOpen&&<UserMenuModal open={userMenuIsOpen} setNewAdvertIsOpen={setUserMenuIsOpen}/>}
      {newAdvertIsOpen&&<NewAdvertModal open={newAdvertIsOpen} setNewAdvertIsOpen={setNewAdvertIsOpen}/>}
      </>

    )
}