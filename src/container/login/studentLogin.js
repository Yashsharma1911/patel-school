import React, { useState } from "react";
import Login from "../../components/login/student";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as ROUTES from "../../constants/routes";

export default function StudentLoginContainer() {
    const navigate = useNavigate();
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [checkClick, setCheckClick] = useState(false);
    const [error, setError] = useState("");
    const isInvalid = password === "" || emailAddress === "";
    const auth = getAuth();
    const handleSignIn = (event) => {
        event.preventDefault();
        setCheckClick(true);
        signInWithEmailAndPassword(auth, emailAddress, password)
            .then((user) => {
                navigate(ROUTES.BROWSE);
            })
            .catch((error) => {
                setError(error.message);
                setEmailAddress('');
                setPassword('');
                setCheckClick(false);
            });
    };


    return (

        <Login>
            <Login.SubContainer onSubmit={handleSignIn} method="POST">
                <Login.Headline>Welcome Back</Login.Headline>
                <Login.Img order="8" src="images/icons/thunder-icon.svg" />
                {error &&
                    <Login.Error>
                        <Login.ErrorText>{error}</Login.ErrorText>
                    </Login.Error>
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
                <Login.Div>
                    <Login.Label htmlFor="password" order="4">Password<Login.Forget order="4"> • Forget?</Login.Forget></Login.Label>
                    <Login.Input
                        id="password"
                        type="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={({ target }) => setPassword(target.value)}
                        order="5"
                    />
                </Login.Div>
                <Login.Button order="6" type="submit" disabled={isInvalid || checkClick}>
                    {checkClick ? 'Loading...' : 'Login'}
                </Login.Button>
                <Login.Link order="7" to={ROUTES.HOME}>Cancel return to website </Login.Link>
            </Login.SubContainer>
        </Login>

    );
}
