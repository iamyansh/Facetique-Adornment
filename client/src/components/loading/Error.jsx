import { Box, Text } from "@chakra-ui/react"

export const Error = () => {
    console.log("error found")
    return <>
        <Box my={'140px'}>
            <Text
                fontSize={'20px'}
                fontWeight={500}
                textAlign={'center'}
            >
                Something went Wrong
            </Text>
        </Box>
    </>
}