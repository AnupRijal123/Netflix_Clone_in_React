import '../styles/Navbar.css';
function Navbar() {
    return (
        <div className="nav nav_black">
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