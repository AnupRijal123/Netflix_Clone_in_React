import '../styles/Navbar.css';
import { useState, useEffect } from 'react';
function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            setShowNavbar(true);
        } else {
            setShowNavbar(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, []);
    return (
        <div className={showNavbar ? 'nav nav_black' : 'nav'}>
            <div className="nav_contents">
                <img src="https://image.similarpng.com/very-thumbnail/2020/11/Netflix-logo-design-illustration-on-transparent-background-PNG.png"
                    className="nav_logo"
                    alt="logo" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    className="nav_avatar"
                    alt="avatar" />
            </div>
        </div>
    )
}
export default Navbar;