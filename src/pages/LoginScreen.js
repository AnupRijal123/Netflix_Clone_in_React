import '../styles/LoginScreen.css';
import { useState } from 'react';
import SignUpScreen from '../components/SignUpScreen';
function LoginScreen() {
    const [signInClicked, setSignInClicked] = useState(false);
    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <div className="loginScreen_logo">
                    <h2>My Movie App</h2>
                </div>
                {signInClicked === false &&
                    <button onClick={() => {
                        setSignInClicked(true);
                    }}
                        className="loginScreen_button">
                        Sign In
                    </button>}
                <div className="loginScreen_gradient"></div>
            </div>

            <div className="loginScreen_body">
                {signInClicked ? (
                    <SignUpScreen />
                ) : (
                    <>
                        <h1>Unlimited films,TV programs and more.</h1>
                        <h2>Watch anywhere.Cancel at any time.</h2>
                        <h3>Ready to watch?Enter your email to create or restart your membership</h3>
                        <div className="loginScreen_input">
                            <input
                                type="email"
                                placeholder="Email Address"
                            />
                            <button
                                onClick={() => {
                                    setSignInClicked(true);
                                }}
                                className="getStarted_button">Get Started</button>
                        </div>
                    </>

                )}

            </div>

        </div>
    )
}
export default LoginScreen;

