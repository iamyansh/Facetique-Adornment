import { Input, Select, useToast, VStack } from "@chakra-ui/react";
import { AuthBtn } from "./AuthBtn";
import { useState } from "react";
import { isSignupFormEmpty, validateEmail, validatePassword } from "../../utils/formValidator";
import { setToast } from "../../utils/extraFunctions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSignUpSuccess } from "../../redux/features/auth/actions";


export const SignupForm = () => {

    const initState = {firstName: "", lastName: "", email: "", password: "", gender: "", dateOfBirth: ""}

    const [form, setForm] = useState(initState);

    const toast = useToast();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value});
    }


    const handleOnSubmit = (e) => {

        e.preventDefault();

        const isEmpty = isSignupFormEmpty(form);

        if(!isEmpty.status){
            return setToast(toast,isEmpty.message,'error');
        }

        const isEmail = validateEmail(form.email);
        if (!isEmail.status) {
            return setToast(toast, isEmail.message, 'error');
        }

        const isPassword = validatePassword(form.password);
        if (!isPassword.status) {
            return setToast(toast, 'Password must contain these things:', 'error', 3000, isPassword.message);
        }

        dispatch(getSignUpSuccess(form, toast, navigate));
    }

    return (

        <>
            <form onSubmit={handleOnSubmit}>

                <VStack w={['95%', '95%', '85%', '85%', '85%', '85%',]}
                    mx={'auto'}
                    gap={'8px'}
                >
                    <Input
                        name="email"
                        type={'email'}
                        placeholder="Email address"
                        onChange={handleInputChange}
                    />

                    <Input
                        name="password"
                        type={'password'}
                        placeholder="Password"
                        onChange={handleInputChange}
                    />

                    <Input
                        name="firstName"
                        type={'text'}
                        placeholder="First Name"
                        onChange={handleInputChange}
                    />

                    <Input
                        name="lastName"
                        type={'text'}
                        placeholder="Last Name"
                        onChange={handleInputChange}
                    />

                    <Select name="gender" placeholder="Choose Gender" onChange={handleInputChange}>
                        <option>Male</option>
                        <option>Female</option>
                    </Select>

                    <Input
                        name="dateOfBirth"
                        type={'date'}
                        placeholder="DOB"
                        onChange={handleInputChange}
                    />

                    <AuthBtn value={'Join us'}/>

                </VStack>
            </form>
        
        </>

    );
}