import { Routes, Route } from "react-router";
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Contacts from '../pages/Contacts/Contacts'
import User from '../pages/Profile/User'
import NoMatchPage from '../pages/NoMatchPage/NoMatchPage'

const AppRoutes = () => {
    // const navigationRoutes = [
    //     { path: '/', element: <Home /> },
    //     { path: '/about', element: <About /> },
    //     { path: '/contacts', element: <Contacts /> },
    //     { path: '*', element: <NoMatchPage /> }
    // ]
    return (
        <Routes>
            {/* {navigationRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
            ))} */}

            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/user/:userId' element={<User />} />
            <Route path='*' element={<NoMatchPage />} />
        </Routes>
    )

}

export default AppRoutes;