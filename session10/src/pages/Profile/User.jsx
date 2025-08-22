import { useParams } from 'react-router';
import './user.css';

const User = () => {
    const { userId } = useParams();
    return (
        <section className="user">
            <div className="container">
                <div className="user__inner">
                    <h4>Profile {userId}</h4>
                </div>
            </div>
        </section>
    )
}

export default User;