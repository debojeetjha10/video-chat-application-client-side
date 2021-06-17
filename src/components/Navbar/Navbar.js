import React from 'react';
import './Navbar.css';
import teams_logo from './icon/teams.png'
import burger_logo from './icon/menu.png'
import group_logo from './icon/group.png'
import msg_logo from './icon/msg-file.png'
import hand_logo from './icon/hand.png'
import threedot_logo from './icon/threedot.png'
import endcall_logo from './icon/end-call.png'
import usr_logo from './icon/usr.jpeg'
const logos = [
    {
        src: burger_logo,
        className: 'navbar-list-item'
    },
    {
        src: group_logo,
        className: 'navbar-list-item'
    },
    {
        src: msg_logo,
        className: 'navbar-list-item'
    },
    {
        src: hand_logo,
        className: 'navbar-list-item'
    },
    {
        src: threedot_logo,
        className: 'navbar-list-item'
    },
    {
        src: endcall_logo,
        className: 'navbar-list-item'
    }

]
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
                        {logos.map((logo, index) => {
                            return (
                                <li><img src={logo.src} className = {logo.className}></img></li>
                            )
                        })


                        }
                        <li className='user-logo-container'><img src = {usr_logo} className = 'user-logo'></img></li>
                    </ul>
                </div>

            </div>
        )
    }



}
export default Navbar