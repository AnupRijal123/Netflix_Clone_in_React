import '../styles/Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className="footer">
            <div className="footer_content">
                <Link to="https://github.com/AnupRijal123/React_Movie_App/tree/development-branch">
                    <h3>Get code</h3>
                </Link>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCOSzabMLHpRMMuS289T6E0aC_ysnrhs6xrA&s" />

            </div>
        </div>
    )
}
export default Footer;