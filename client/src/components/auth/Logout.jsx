import { Button, Divider, Flex, Menu, MenuButton, MenuItem, MenuList, useToast } from "@chakra-ui/react"
import { BsCart2, BsFillCaretDownFill } from "react-icons/bs";
import { RiLuggageCartLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi"
import { Coupon } from "../../pages/coupon/Coupon";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutFromAccount, removeToken } from "../../redux/features/auth/actions";
import { removeItem, setItem } from "../../utils/localStorage";
import { setToast } from "../../utils/extraFunctions";

export const Logout = () => {


    const user = useSelector((state) => state.authReducer.user.firstName);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toast = useToast();

    const handleLogoutBtn = () => {
        dispatch(logoutFromAccount(toast));
    }

    return <>
        <Menu>
            <MenuButton as={Button} size={'sm'} bg={'transparent'} rightIcon={<BsFillCaretDownFill/>}>
                {user}
            </MenuButton>
            <MenuList>
                <Flex flexDirection={'column'} gap={'5px'} fontSize={'17px'}>
                    <MenuItem onClick={() => {navigate('/favourite')}} icon={<FaRegHeart/>}>Wishlist</MenuItem>
                    <MenuItem onClick={() => {navigate('/orders')}} icon={<RiLuggageCartLine></RiLuggageCartLine>}>Orders</MenuItem>
                    
                    <Coupon/>
                    
                    <MenuItem onClick={() => {navigate('/cart')}} icon={<BsCart2 />} >Cart</MenuItem>

                    <Divider/>

                    <MenuItem onClick={handleLogoutBtn} icon={<FiLogOut />}>Logout</MenuItem>

                </Flex>
            </MenuList>
        </Menu>
    </>
}