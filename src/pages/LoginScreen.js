import '../styles/LoginScreen.css';
import { useState } from 'react';
import SignUpScreen from '../components/SignUpScreen';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase.js';
function LoginScreen() {
    const [signInClicked, setSignInClicked] = useState(false);
    const navigate = useNavigate();
    const makeDemoSignIn = () => {
        auth.signInWithEmailAndPassword(
            'demo@email.com',
            'demo123'
        ).then(() => {
            navigate('/');
        }).catch((error) => {
            alert(error.message);
        });

    }
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
                        <h2 onClick={makeDemoSignIn}>Continue without logging in </h2>
                    </>

                )}

            </div>

        </div>
    )
}
export default LoginScreen;

