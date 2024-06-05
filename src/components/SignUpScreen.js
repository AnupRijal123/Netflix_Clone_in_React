import '../styles/SignUpScreen.css';
import { useRef } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function SignUpScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(() => {
            navigate('/');
        }).catch(error => {
            alert(error.message);
        });
    }
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(() => {
            navigate('/');
        }).catch((error) => {
            alert(error.message);
        });
    }
    return (
        <div className="signup-screen">
            <form >
                <h1>Sign In</h1>
                <input ref={emailRef} type="email"
                    placeholder="Email"
                />
                <input ref={passwordRef} type="password"
                    placeholder="Password"
                />
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className="gray-text">Don't have account? </span>
                    <span className="signup_link" onClick={register}>Sign up now</span>
                </h4>
            </form>

        </div>
    )
}
export default SignUpScreen;