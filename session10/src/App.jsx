import Header from './components/Header/Header';
import AppRoutes from './Routes/AppRoutes'
// import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import Contacts from './pages/Contacts/Contacts';

import './App.css';
const App = () => {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
    </>
  )
}

export default App;