import { Box, Center, Flex, Grid, GridItem, Icon, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { FcLike } from "react-icons/fc"
import { IconLink } from "../../components/footer/IconLink"
import { MdOutlinePersonPin } from "react-icons/md"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export const Footer = () => {
    return (
        <Box 
            h={'300px'}
            bg={'black'}
            color={'white'}
            mt={'40px'}
        >
            <Center h={'80px'}>
                <Text className="typeWritertheme">Made with <Icon as={FcLike}/> by Shreyansh</Text>
            </Center>


            <Grid
                h={'220px'}
                p={'10px'}
                templateColumns={['100%', '48% 2% 50%', '48% 2% 50%', '25% 25% 50%']}
            >
                <Center>
                    <Flex
                        fontSize={["11px", '13px', '14px', '14px', '14px']}
                        gap={'10px'}
                        fontWeight={600}
                        flexDirection={'column'}
                    >
                        <Text>FIND A NEARBY STORE</Text>
                        <Text>BECOME A MEMBER</Text>
                        <Text>ALREADY A MEMBER</Text>
                        <Text>SIGNUP FOR EMAIL</Text>
                        <Text>SEND US FEEDBACK</Text>
                    </Flex>
                </Center>

                <Center>
                    <Flex
                        display={['none', 'none', 'none', 'flex', 'flex']}
                        fontSize={'14px'}
                        gap={'10px'}
                        flexDirection={'column'}
                        color={'gray'}
                    >
                        <Text color={'white'} fontWeight={600}>GET HELP</Text>
                        <Text>Order Status</Text>
                        <Text>Delivery</Text>
                        <Text>Returns</Text>
                        <Text>Payment Options</Text>
                    </Flex>
                </Center>

                <Flex
                    mt={'20px'}
                    gap={'15px'}
                    flexDirection={'row-reverse'}
                    justifyContent={['center', 'right', 'right', 'right', 'right']}
                    color={'gray'}
                    mr={['0px', '30px', '80px', '80px', '80px']}
                >
                    <IconLink
                        icon={MdOutlinePersonPin}
                        link={"https://www.linkedin.com/in/shreyansh-sahu-460661238/"}
                    />
                    <IconLink
                        icon={FaGithub}
                        link={"https://github.com/iamyansh/"}
                    />
                    <IconLink
                        icon={FaLinkedin}
                        link={"https://www.linkedin.com/in/shreyansh-sahu-460661238/"}
                    />
                </Flex>

            </Grid>
        </Box>
    )
}