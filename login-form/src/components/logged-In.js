import React from "react";

class LoggedIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: '', show: false};
    }

    submitLogout(event) {
        event.preventDefault();
        this.props.logout();
    }

    render() {
        return (
            <div>
                <div className='limiter'>
                    <div className='container-login100' style={{backgroundImage: "url('./assets/images/bg-01.jpg')"}}>
                        <div className='wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54'>
                            <form className='login100-form validate-form' onSubmit={(e) => this.submitLogout(e)}>
                                <span className='login100-form-title p-b-49'>
                                    Login Successful
                                </span>

                                <p>Username = {this.props.username} and password = {this.props.password}</p>

                                <br />
                                
                                <div className="container-login100-form-btn">
                                    <div className="wrap-login100-form-btn">
                                        <div className="login100-form-bgbtn"></div>
                                        <button className="login100-form-btn" onSubmit={(e) => this.submitLogout(e)}>
                                                    Logout
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div id="dropDownSelect1"></div>
            </div>
        );
    }
}

export default LoggedIn;