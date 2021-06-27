import React from 'react'
import './MeetCreatePage.css'
import '../StyleSheets/MiddleCard/MiddleCard.css'
import '../StyleSheets/Buttons/BigBlueButton.css'
import '../StyleSheets/Input/NormalInput.css'
class MeetCreatePage extends React.Component{

    render(){
        return (
            <div className='Middle-Card'>
                <p id = 'JoinPage-Heading'>Create a Teams Meeting</p>
                <div id = 'form-container'>
                    <form id='name-roomId-form' >
                    <label for='name'>Enter your Name: </label>
                    <input type='text' className='Normal-Input' id='name' name='name' placeholder='Enter Your Name ' />
                    </form>
                </div>
                <a href = 'http://localhost:3002/'><button className='Big-Blue-Button' id='JoinPage-Button'>Create Now</button></a>
            </div>
        )
    }

}
export default MeetCreatePage