import { Button, Code, Kbd, MenuItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react"
import { RiCoupon3Line } from "react-icons/ri"

export const Coupon = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();

    return <>
        <MenuItem  onClick={onOpen} icon={<RiCoupon3Line />}>
            Coupons
        </MenuItem>

        <Modal isOpen={isOpen} onClose={onClose}>
            
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>
                    Coupons Code
                </ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <TableContainer>
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th>Coupon</Th>
                                    <Th textAlign={'end'}>Discount Value</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <DiscountText num={5}/>
                                <DiscountText num={10}/>
                                <DiscountText num={15}/>
                                <DiscountText num={20}/>
                                <DiscountText num={25}/>
                                <DiscountText num={30}/>
                            </Tbody>
                        </Table>
                    </TableContainer>
                    
                </ModalBody>
                <ModalFooter>
                    <Button 
                        color={"white"} 
                        backgroundColor={'black'}
                        _hover={{bg:'#1e1e1e'}}
                        onClick={onClose}
                    >
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
}

const DiscountText = ({num}) => {
    return <Tr>
        <Td><Code colorScheme='yellow' children={`FTQ${num}`} />FTQ</Td>
        <Td textAlign={'end'}><Kbd>{num}% OFF</Kbd></Td>
    </Tr>
}