import React, { useState } from "react";
import Login from "../../components/login/student";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import * as ROUTES from "../../constants/routes";

const MESSAGE_COLOR = {
    success: "#83A22A",
    error: "#D43260",
};

export default function ResetPasswordContainer() {
    const [emailAddress, setEmailAddress] = useState("");
    const [messageColor, setMessageColor] = useState("");
    const [checkClick, setCheckClick] = useState(false);
    const [message, setMessage] = useState("");
    const isInvalid = emailAddress === "";
    const auth = getAuth();

    const handleSignIn = (event) => {
        event.preventDefault();
        setCheckClick(true);
        sendPasswordResetEmail(auth, emailAddress)
            .then(() => {
                setMessageColor(MESSAGE_COLOR.success);
                setMessage("Success, Check Your Email.");
            })
            .catch((error) => {
                setMessageColor(MESSAGE_COLOR.error);
                setMessage(`⚠️ ${error.message}`);
                setEmailAddress('');
                setCheckClick(false);
            });
    };

    return (

        <Login>
            <Login.SubContainer onSubmit={handleSignIn} method="POST">
                <Login.Headline>Reset Password</Login.Headline>
                <Login.Img order="6" src="images/icons/thunder-icon.svg" />
                {message &&
                    <Login.MessageContainer colorCode={messageColor}>
                        <Login.MessageText>{message}</Login.MessageText>
                    </Login.MessageContainer>
                }
                <Login.Div>
                    <Login.Label htmlFor="email" order="2">Email Address</Login.Label>
                    <Login.Input
                        type="email"
                        id="email"
                        value={emailAddress}
                        placeholder="Enter your email address"
                        onChange={({ target }) => setEmailAddress(target.value)}
                        order="3"
                    />
                </Login.Div>
                <Login.Button order="4" type="submit" disabled={isInvalid || checkClick}>
                    Send Reset Email
                </Login.Button>
                <Login.Link order="5" to={ROUTES.HOME}>Cancel return to website </Login.Link>
            </Login.SubContainer>
        </Login>

    );
}
