import { Input, Text, useToast, VStack } from "@chakra-ui/react"
import { AuthBtn } from "./AuthBtn"
import { getLoginSuccess, showResetPage } from "../../redux/features/auth/actions"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { isLoginFormEmpty } from "../../utils/formValidator"
import { setToast } from "../../utils/extraFunctions"


export const LoginForm = () => {

    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();

    const [form, setForm] = useState({email: "", password: ""});
    
    const displayReset = () => {
        dispatch(showResetPage());
    }

    const handleInputChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value});
    }

    const handleOnSubmit = (e) => {
        
        e.preventDefault();
        const isEmpty = isLoginFormEmpty(form);

        if(!isEmpty.status){
            return setToast(toast, isEmpty.message, 'error');
        }
        dispatch(getLoginSuccess(form, toast, navigate));
    }

    return <>
        <form onSubmit={handleOnSubmit}>
            <VStack w={['95%', '95%', '85%', '85%', '85%', '85%',]}
                mx={'auto'}
                gap={'8px'}
            >
                <Input
                    name="email"
                    onChange={handleInputChange}
                    type={'email'}
                    placeholder="Email address"
                />

                <Input
                    name="password"
                    onChange={handleInputChange}
                    type={'password'}
                    placeholder="Password"
                />

                <Text
                    onClick={displayReset}
                    _hover={{textDecoration : "underline"}}
                    w={'100%'}   
                    textAlign={"right"} 
                    fontSize={"sm"}
                    color={'#b0a8af'}
                    my={'10px'}
                    cursor={'pointer'}
                >
                    Forget your password?
                </Text>

                <AuthBtn value={'Login'}/>
                
            </VStack>
        </form>
    </>
}