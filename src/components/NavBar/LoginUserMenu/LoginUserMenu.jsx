import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteToken } from "../../../redux/slices/tokenSlice";
import { deleteUser } from "../../../redux/slices/userSlice";
import Cookies from "js-cookie";
import { useLogoutMutation } from "../../../redux/slices/mentorsboardApi";
import { Link, MenuWrapper, UserMenu } from "../NavBar.styled";
import { UserMenuModal } from "../../Modal/UserMenuModal/UserMenuModal";


export const LoginUserMenu = () => {

    const [logout] = useLogoutMutation();
    const dispatch = useDispatch();



    const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
    const handleUserMenu = () => {setUserMenuIsOpen(true)};

    const logoutUser = async () => {
        await Cookies.remove("token");
        await logout().then(() => {
          dispatch(deleteToken());
          dispatch(deleteUser());
        });
      };

    const user = useSelector((state) => state.user);
    const userName = user.name;

    return (
      <>
      <MenuWrapper>
        <UserMenu onClick={handleUserMenu}>
          {userName}
        </UserMenu>
        {userMenuIsOpen && <UserMenuModal open={userMenuIsOpen} setUserMenuIsOpen={setUserMenuIsOpen}/>}
        <Link onClick={logoutUser}>
            Logout
        </Link>
      </MenuWrapper>
      </>

    )
}