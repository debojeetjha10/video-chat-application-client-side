import React from 'react';
import './Navbar.css';
import teams_logo from './icon/teams.png'
import {Link} from 'react-router-dom'
import usr_logo from './icon/usr.jpeg'
class Navbar extends React.Component {
    render() {
        return (
            <div className='Navbar'>
                <div className='navbar-icon'>
                    <Link to='/' ><img className='navbar-icon' src={teams_logo} alt="teams logo"></img></Link>
                </div>
                <div className='search-bar-container'>
                <input className = 'search-bar' type="text" placeholder="Search.."/>
                </div>
                <div >
                    <ul className='navbar-items'>
                        <li className='user-logo-container'><img src = {usr_logo} className = 'user-logo' alt='user-logo'></img></li>
                    </ul>
                </div>

            </div>
        )
    }



}
export default Navbar