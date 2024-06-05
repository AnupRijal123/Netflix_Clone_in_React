import '../styles/ProfileScreen.css';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice.js';
import { auth } from '../firebase.js';
import PlanScreen from '../components/PlanScreen.js';
function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className="profileScreen">
            <Navbar />
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="avatar"
                    />
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plan">
                            <h3>Plans</h3>
                            <PlanScreen />
                            <button onClick={() => auth.signOut()}
                                className="profileScreen_signout"
                            >
                                Sign Out
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProfileScreen;