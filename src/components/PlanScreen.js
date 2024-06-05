import '../styles/PlanScreen.css';
import { db } from '../firebase.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PlanScreen() {
    let [plansArray, setPlansArray] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        let plans = [];
        db.collection('plans')
            .get()
            .then((response) => {
                response.forEach((doc) => {
                    plans.push({ documentId: doc.id, data: doc.data() });
                })
                setPlansArray(plans);
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    function makeSubscribe(documentID, planID) {
        db.collection('plans')
            .doc(documentID)
            .update({ isActive: true })
            .then(() => {
                alert('New Plan Subscribed');
                navigate('/');

            })
            .catch((error) => {
                console.log(error)
            })
        db.collection('plans')
            .get()
            .then((response) => {
                response.forEach((doc) => {
                    if (doc.id !== documentID) {
                        doc.ref.update({ isActive: false });
                    }
                })
            })
            .catch((error) => {
                console.log(error)
            })


    }
    return (
        <div className="planScreen">

            {plansArray.map((plan) => (
                <div className="planScreen_plan" key={plan.documentId}>
                    <div className="planScreen_info">
                        <h5>{plan.data.name}</h5>
                        <h6>{plan.data.detail}</h6>
                    </div>
                    <button className={plan.data.isActive ? 'gray-background' : ''} onClick={() => makeSubscribe(plan.documentId, plan.data.id)}>
                        {plan.data.isActive ? 'Current package' : 'Subscribe'}
                    </button>
                </div>
            ))}
        </div>
    )
}
export default PlanScreen;