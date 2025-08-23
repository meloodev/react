import { useSearchParams } from 'react-router';
import './settings.css';

const Settings = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const sort = searchParams.get('sort') || 'desc';
    return (
        <>
            <div className="settings">
                <div className="container">
                    <div className="settings__inner">
                        <h4>settings</h4>
                        <h4>sort {sort}</h4>
                        <button onClick={() => setSearchParams({ sort: 'ask' })}>sort</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings;