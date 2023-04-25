// import React from "react";

// import { useDispatch, useSelector } from "react-redux";
// import Cookies from "js-cookie";

// import { useLogoutMutation } from "../../../redux/slices/mentorsboardApi";
// import { deleteToken } from "../../../redux/slices/tokenSlice";
// import { deleteUser } from "../../../redux/slices/userSlice";
// import { showComponent } from "../../../redux/slices/visibilitySlice";

// import { Wrapper, Modal, MenuHead, UserName, UserRole, MenuLink, MenuLinkWrapper } from "./UserMenu.styled";
// import { CloseButton, CloseButtonWrapper } from "../Modal.styled";


// export const UserMenuModal = ({open,  setUserMenuIsOpen, setNewAdvertIsOpen}) => {
//     const dispatch = useDispatch();

//     const switchToNewAdvert =() => {
//         setNewAdvertIsOpen(true);
//         setUserMenuIsOpen(false);
//     }

//     const switchToMyAdverts = () => {
//         dispatch(showComponent());
//         setUserMenuIsOpen(false);
//     }

//     const [logout] = useLogoutMutation();

//     const logoutUser = async () => {
//         await Cookies.remove("token");
//         await logout().then(() => {
//           dispatch(deleteToken());
//           dispatch(deleteUser());
//         });
//       };


//     const user = useSelector((state) => state.user);
//     const userRole = user.role;
//     const userName = user.name;

//     return (
//         <>
//             <Wrapper>
//                 <Modal isOpen={open}>
//                     <MenuHead>
//                         <UserName>
//                             {userName}
//                         </UserName>
//                         <UserRole>
//                             {userRole}
//                         </UserRole>
//                     </MenuHead>
//                     <CloseButtonWrapper>
//                             <CloseButton onClick={()=>setUserMenuIsOpen(false)}>
//                                 X
//                             </CloseButton>
//                         </CloseButtonWrapper>
//                     <MenuLinkWrapper>
//                         {userRole==="Mentor" ?
//                             <>
//                                 <MenuLink onClick={switchToMyAdverts}>
//                                     My Adverts
//                                 </MenuLink>
//                                 <MenuLink onClick={switchToNewAdvert}>
//                                     Create Advert
//                                 </MenuLink>
//                             </>
//                         :<></>}
//                         <MenuLink onClick={logoutUser}>
//                             Logout
//                         </MenuLink>
//                     </MenuLinkWrapper>
//                 </Modal>
//             </Wrapper>
//     </>
//     )
// };