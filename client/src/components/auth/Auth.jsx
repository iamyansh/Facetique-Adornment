import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";
import { ResetForm } from "./ResetForm";
import { useDispatch, useSelector } from "react-redux";
import { showLoginPage } from "../../redux/features/auth/actions";

export const Auth = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const dispatch = useDispatch();

    const isLogin = useSelector(state => state.authReducer.isLogin);
    const isReset = useSelector(state => state.authReducer.isReset);

    const displayLogin = () => {
        dispatch(showLoginPage());
    }


    return (
        <>
            <Button onClick={onOpen} size={'sm'} bg={'transparent'}>Sign up</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalCloseButton/>
                    <ModalHeader fontWeight={'700'} fontSize={'23px'} mt={'40px'} mx={'10%'} textAlign={'center'}>
                        {isLogin ? "YOUR ACCOUNT FOR EVERYTHING FACETIQUE" : isReset ? "RESET PASSWORD" : "BECOME A FACETIQUE MEMBER"}
                    </ModalHeader>
                    <ModalBody>
                        {isLogin ? <LoginForm /> : isReset ? <ResetForm /> : <SignupForm />}

                        <Box textAlign={'center'} mt={'20px'}>
                            <Text display={'inline'} mt={'25px'} color={'#b0a8af'}>
                                {isLogin ? "Not a Member? " : isReset ? "Or return to " : "Already a Member? "}
                            </Text>
                            <Text onClick={displayLogin} display={'inline'} textDecoration={'underline'} cursor={'pointer'}>
                                {isLogin ? "Signup" : "Login"}
                            </Text>
                        </Box>
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
        </>
        
    )
}