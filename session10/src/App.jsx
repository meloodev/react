import Header from './components/Header/Header';
import Home from './components/Sections/Home/Home';
import About from './components/Sections/About/About';
import Contacts from './components/Sections/Contacts/Contacts';
import './App.css';
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Contacts />
      </main>
    </>
  )
}

export default App;