import { Input } from "@chakra-ui/react"

export const AuthBtn = ({value}) => {
    return (
    <Input
        w={'100%'}
        backgroundColor={'black'}
        color={'white'}
        _hover={{ backgroundColor: "#1e1e1e" }}
        value={value}
        type={'submit'}
    />
    );
}