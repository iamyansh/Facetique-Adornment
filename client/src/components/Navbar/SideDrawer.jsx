import { Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Icon, useDisclosure, VStack } from "@chakra-ui/react"
import { BiMenu } from "react-icons/bi"
import { DrawerCategory } from "./CategoryAndIcon";

export const SideDrawer = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();

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
                <DrawerHeader>Hi user</DrawerHeader>
                <Divider/>
                <DrawerBody>
                    <VStack gap={'30px'} mt={'40px'}>
                        <DrawerCategory text={"Home"}></DrawerCategory>
                        <DrawerCategory text={"All products"}></DrawerCategory>
                        <DrawerCategory text={"Bracelet"}></DrawerCategory>
                        <DrawerCategory text={"Earing"}></DrawerCategory>
                        <DrawerCategory text={"Chain"}></DrawerCategory>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
}