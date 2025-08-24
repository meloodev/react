import { NavLink, Outlet } from "react-router";
import './userDataPage.css';
const UserDataPage = () => {
    return (
        <div className="container">
            <div className="user__profile">
                <div className='profile__header'>Users</div>
                <ul>
                    <li><NavLink to='user/alex'>Alex</NavLink></li>
                    <li><NavLink to='user/sarah'>Sarax</NavLink></li>
                    <li><NavLink to='user/john'>John</NavLink></li>
                    <li><NavLink to='user/emma'>Emma</NavLink></li>
                </ul>
                <div className="profile__data">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default UserDataPage;