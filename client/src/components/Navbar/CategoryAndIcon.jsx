import { Center, Icon, Text, useColorMode } from "@chakra-ui/react"
import { Link } from "react-router-dom";

export const Category = ({name, text, link, handlePath}) => {
    const colorMode = useColorMode();
    return <>
        <Center
            h={'60px'}
            cursor={"pointer"}
            paddingX={'15px'}
            _hover={{borderBottom: `2px solid ${colorMode === 'light' ? 'black' : 'white'}` }}
        >
            <Link
                onClick={handlePath}
                to={link}
                name={name}
            >
                {text}
            </Link>
        </Center>
    </>
}


export const DrawerCategory = ({text}) => {
    return <>
        <Text fontSize={'20px'} fontWeight={'500'}>
            <Link>
                {text}
            </Link>
        </Text>
    </>
}

export const NavIcon = ({iconName}) => {
    return (
    <Icon 
        as={iconName}
        w={'28px'}
        h={'28px'}
        mr={'10px'}
    />
    )
}