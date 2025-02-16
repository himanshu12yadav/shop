import Announcement from './components/Annoucement/Announcement';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import './App.scss';

function App() {

  return (
    <>
      <main className='container'>
        <Announcement />
        <Navigation />
        <Header />
      </main>
    </>
  )
}

export default App
