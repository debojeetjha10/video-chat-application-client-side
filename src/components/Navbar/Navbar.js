import React from 'react';
import './Navbar.css';
import teams_logo from './icon/teams.png'
// import burger_logo from './icon/menu.png'
// import group_logo from './icon/group.png'
// import msg_logo from './icon/msg-file.png'
// import hand_logo from './icon/hand.png'
// import threedot_logo from './icon/threedot.png'
// import endcall_logo from './icon/end-call.png'
import usr_logo from './icon/usr.jpeg'
class Navbar extends React.Component {
    render() {
        return (
            <div className='Navbar'>
                <div className='navbar-icon'>
                    <img className='navbar-icon' src={teams_logo} alt="teams logo"></img>
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