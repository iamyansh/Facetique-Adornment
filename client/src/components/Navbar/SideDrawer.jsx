import { Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Icon, useDisclosure, VStack } from "@chakra-ui/react"
import { BiMenu } from "react-icons/bi"
import { DrawerCategory } from "./CategoryAndIcon";
import { useSelector } from "react-redux";

export const SideDrawer = ({handlePath}) => {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const user = useSelector((state) => state.authReducer.user.firstName);

    return <>
        <Icon w={'28px'} h={'28px'} as={BiMenu} mr={'10px'} onClick={onOpen}/>
        <Drawer
            isOpen={isOpen}
            onClose={onClose}
            placement='right'
        >
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader>Hi {user}</DrawerHeader>
                <Divider/>
                <DrawerBody>
                    <VStack gap={'30px'} mt={'40px'}>
                        <DrawerCategory handlePath={handlePath} name={'/'} link={'/'} text={"Home"}></DrawerCategory>
                        <DrawerCategory handlePath={handlePath} name={'allProducts'} link={'/allProducts'} text={"All products"}></DrawerCategory>
                        <DrawerCategory handlePath={handlePath} name={'bracelet'} link={'/bracelet'} text={"Bracelet"}></DrawerCategory>
                        <DrawerCategory handlePath={handlePath} name={'earing'} link={'/earing'} text={"Earing"}></DrawerCategory>
                        <DrawerCategory handlePath={handlePath} name={'chain'} link={'/chain'} text={"Chain"}></DrawerCategory>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
}