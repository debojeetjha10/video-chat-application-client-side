import React from 'react'
import './JoinPage.css'
class JoinPage extends React.Component{

    render(){
        return (
            <div className='JoinPage-content'>
                <p id = 'JoinPage-Heading'>Join a Teams Meeting</p>

                <a href = 'http://localhost:3002/'><button id='JoinPage-Button'>Join Now</button></a>
            </div>
        )
    }

}
export default JoinPage