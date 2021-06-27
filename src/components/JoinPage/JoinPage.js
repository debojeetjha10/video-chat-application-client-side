import React from 'react'
import '../StyleSheets/MiddleCard/MiddleCard.css'
import '../StyleSheets/Buttons/BigBlueButton.css'
import '../StyleSheets/Input/NormalInput.css'
import './JoinPage.css'
import {Link} from 'react-router-dom'
class JoinPage extends React.Component{

    render(){
        return (
            <div className='Middle-Card'>
                <p id = 'JoinPage-Heading'>Join a Teams Meeting</p>
                <div id = 'form-container'>
                    <form id='name-roomId-form' >
                    <label for='name'>Name: </label>
                    <input type='text' id='name' className='Normal-Input' name='name' placeholder='Enter Your Name ' />
                    <label for='roomId'>Room Id: </label>
                    <input type='text' id='roomId' className='Normal-Input' name='roomId'  placeholder='Fill the Room Id of the meeting to Join' />
                    </form>
                </div>
                <Link to= '/video'><button className='Big-Blue-Button' id='JoinPage-Button'>Join Now</button></Link>
            </div>
        )
    }

}
export default JoinPage