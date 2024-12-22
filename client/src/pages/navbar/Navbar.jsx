import { Box, Center, Flex, useColorMode, Image, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { DarkModeBtn } from '../../components/darkMode/darkModeBtn';
import { Auth } from '../../components/auth/Auth';
import { Logout } from '../../components/auth/Logout';
import { FTQLogo } from '../../constant/image';
import { Category, NavIcon } from '../../components/Navbar/CategoryAndIcon';
import { RiHeartLine, RiShoppingBagLine } from 'react-icons/ri';
import { SideDrawer } from '../../components/Navbar/SideDrawer';
import { setNavbarPath } from '../../redux/features/path/actions';
import { setItemSession } from '../../utils/sessionStorage';

export const Navbar = () => {

    const dispatch = useDispatch();
    const {token} = useSelector((state) => state.authReducer, shallowEqual);
    const {colorMode} = useColorMode();

    const handlePath = ({target: { name }}) => {
        dispatch(setNavbarPath(name));
        setItemSession('path',name);
    }

    return <>
        
        <Box h={'36px'} bg={colorMode === 'light' && '#f5f5f5'}>
            <Center h={'36px'} justifyContent={'right'} mr={'40px'} fontSize={'16px'} cursor={'pointer'}>
                {!token? <Auth/> : <Logout/>}
                <DarkModeBtn></DarkModeBtn>
            </Center>
        </Box>

        <Flex h={'60px'} flexDirection={'row'} px={'20px'}>
            <Box w={'80px'} >
                <Link to={'/'}><Image src={FTQLogo}></Image></Link>
            </Box>

            <Spacer/>

            <Box display={['none','none','flex','flex','flex','flex']}>
                <Category handlePath={handlePath} name={'/'} link={'/'} text="Home"></Category>
                <Category handlePath={handlePath} name={'allProducts'} link={'/allProducts'} text="All Products"></Category>
                <Category handlePath={handlePath} name={'bracelet'} link={'/bracelet'} text="Bracelet"></Category>
                <Category handlePath={handlePath} name={'earing'} link={'/earing'} text="Earing"></Category>
                <Category handlePath={handlePath} name={'chain'} link={'/chain'} text="Chain"></Category>
            </Box>

            <Spacer/>

            <Center mr={'10px'}>
                <Link to={'/favourite'}>
                    <NavIcon iconName={RiHeartLine}/>
                </Link>
            </Center>

            <Center mr={'10px'}>
                <Link to={'/cart'}>
                    <NavIcon iconName={RiShoppingBagLine}/>
                </Link>
            </Center>

            <Box display={['flex','flex','none','none','none','none']}>
                <Center mr={'10px'}>
                    <SideDrawer/>
                </Center>
            </Box>

        </Flex>
        
    </>
}