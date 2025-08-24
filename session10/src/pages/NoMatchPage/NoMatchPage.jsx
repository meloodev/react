import { useNavigate } from 'react-router';
import './noMatchPage.css';

const NoMatchPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="nomatchPage">
                <div className="container">
                    <div className="nomatchPage__inner">
                        <h4>page not found</h4>
                        <button onClick={() => navigate('/')}>
                            Go to home Page
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NoMatchPage;