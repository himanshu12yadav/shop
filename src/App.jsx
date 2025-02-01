import { Outlet } from 'react-router-dom';
import './App.css'
import Announcement from "./components/Announcement/Announcement.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";

function App() {

  return (
    <>
      <Announcement/>
      <Navigation/>
      <Outlet />
    </>
  )
}

export default App
