import './App.css';
import {Route , Switch,BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Foooter from './components/Footer/Footer'
import SideBar from './components/SideBar/SideBar';
import VideoGrid from './components/VideoGrid/VideoGrid'
import JoinPage from './components/JoinPage/JoinPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SideBar/>
      <Navbar/>
      <div className='main-content'>
        <Switch>
        <Route path='/' exact component={JoinPage} />
        <Route path='/video' exact component={VideoGrid}/>
        </Switch>
      </div>
      <Foooter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
