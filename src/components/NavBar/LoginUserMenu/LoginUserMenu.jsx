import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteToken } from "../../../redux/slices/tokenSlice";
import { deleteUser } from "../../../redux/slices/userSlice";
import Cookies from "js-cookie";
import { useLogoutMutation } from "../../../redux/slices/mentorsboardApi";
import { NewAdvertModal } from "../../Modal/NewAdvertModal/NewAdvertModal";
import { Link, MenuWrapper } from "../NavBar.styled";


export const LoginUserMenu = () => {

    const [logout] = useLogoutMutation();
    const dispatch = useDispatch();

    const [newAdvertIsOpen, setNewAdvertIsOpen] = useState(false);
    const handleNewAdvert = () => {setNewAdvertIsOpen(true)};

    const logoutUser = async () => {
        await Cookies.remove("token");
        await logout().then(() => {
          dispatch(deleteToken());
          dispatch(deleteUser());
        });
      };

    return (
      <>
      <MenuWrapper>
        <Link onClick={handleNewAdvert}>
            Create Advert
        </Link>
        {newAdvertIsOpen && <NewAdvertModal open={newAdvertIsOpen} setNewAdvertIsOpen={setNewAdvertIsOpen}/>}
        <Link onClick={logoutUser}>
            Logout
        </Link>
      </MenuWrapper>
      </>

    )
}