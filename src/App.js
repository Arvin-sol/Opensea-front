import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage'
import Navbar from './components/navbar/navbar';
import ProfilePage from './Pages/ProfilePage/ProfilePage'
import NFTPage from './Pages/NFTPage/NFTPage';
import CreatePage from './Pages/CreatePage/CreatePage';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage/>}/>
          <Route path='Profile' element={<ProfilePage/>}/>
          <Route path="NFT" element={<NFTPage/>}/> 
          <Route path="Create" element={<CreatePage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
