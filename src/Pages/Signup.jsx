import React, { useState } from "react";
import FormSignup from "../Components/SignupForm/FormSignup";
import FormSuccess from "../Components/SignupForm/FormSuccess";

const SignUpPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            {!isSubmitted ? (
                <FormSignup submitForm={submitForm} />
                ) : (<FormSuccess />)}
        </>
    );
};

export default SignUpPage;