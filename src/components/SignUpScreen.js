import '../styles/SignUpScreen.css';
import { useRef, useState } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function SignUpScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [isCreateNew, setIsCreateNew] = useState(false);
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
                {isCreateNew === false && <h1>Sign In</h1>}
                {isCreateNew && <h1>Create an Account</h1>}
                <input ref={emailRef} type="email"
                    placeholder="Email"
                />
                <input ref={passwordRef} type="password"
                    placeholder="Password"
                />
                {isCreateNew === false && <button type="submit" onClick={signIn}>Sign In</button>}
                {isCreateNew && <button type="submit" onClick={register}>Create</button>}
                {isCreateNew === false &&
                    <h4>
                        <span className="gray-text">Don't have account? </span>
                        <span className="signup_link" onClick={() => setIsCreateNew(true)}>Sign up now</span>
                    </h4>
                }
                {isCreateNew && <h4>
                    <span className="gray-text">Already have an account? </span>
                    <span className="signup_link" onClick={() => setIsCreateNew(false)}>Sign in</span>
                </h4>}
            </form>

        </div>
    )
}
export default SignUpScreen;