import React from 'react'
import Yulu from './Images/y-logo.png';
import Uber from './Images/ub.png';
import './Login.css';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input_email: "",
            input_pwd: "",
        }
    }

    handleChange = (event) => {
        this.setState({ input_email: event.target.value });
        this.setState({ input_pwd: event.target.value });
        console.log(this.state.input_email);
    }

    handleClick = () => {


    }


    render() {
        return (
            <div className="LoginPage">
                <div className="logo">
                    <div className="Yulu-logo">
                        <img src={Yulu} alt="Yulu-Logo" width="130" height="180" />
                    </div>
                    <div className="Vertical-line"></div>
                    <div className="Uber-logo">
                        <div className="some-text1">
                            In partnership with
                        </div>
                        <img src={Uber} alt="Uber-Logo" width="120" height="120" />
                    </div>
                </div>
                <div className="some-text2">
                    Get Started with yulu
                </div>
                <div className="input-section">
                    <div className="email-id">
                        <input type="text" onChange={this.handleChange} placeholder="Email ID (Optional)" />
                    </div>
                    <div className="pwd">
                        <input type="password" onChange={this.handleChange} placeholder="Create New Password" />
                        <div className="some-text3">
                            Password should be atleast 6 characters long
                    </div>
                    </div>

                </div>
                <div className="footer">
                    <div className="submit-button" onClick={this.handleClick}> Sign Up</div>
                </div>


            </div>
        )
    }
}

export default LoginPage;