import { useDispatch } from "react-redux";
import { deleteToken } from "../../../redux/slices/tokenSlice";
import { deleteUser } from "../../../redux/slices/userSlice";
import Cookies from "js-cookie";
import { useLogoutMutation } from "../../../redux/slices/mentorsboardApi";
import { Link } from "../NavBar.styled";

export const LoginUserMenu = () => {

    const [logout] = useLogoutMutation();
    const dispatch = useDispatch();

    const logoutUser = async () => {
        await Cookies.remove("token");
        await logout().then(() => {
          dispatch(deleteToken());
          dispatch(deleteUser());
        });
      };

    return (
        <Link onClick={logoutUser}>
            Logout
        </Link>
    )
}