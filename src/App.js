import './App.css';
import {Route , Switch,BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import SideBar from './components/SideBar/SideBar';
import JoinPage from './components/JoinPage/JoinPage'
import MeetCreatePage from './components/MeetCreatePage/MeetCreatePage';
import JoinCreateDecidePage from './components/JoinCreateDecidePage/JoinCreateDecidePage';
import EndCallPage from './components/EndCallPage/EndCallPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SideBar/>
      <Navbar/>
      <div className='main-content'>
        <Switch>
        <Route path='/' exact component={JoinCreateDecidePage} />
        <Route path='/join' exact component={JoinPage}/>
        <Route path='/create' exact component={MeetCreatePage}/>
        <Route path='/end' exact component={EndCallPage}/>
        </Switch>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
