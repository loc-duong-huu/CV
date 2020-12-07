import React from "react";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', email: '', password: '', retypePassword: '', show: false};
    }

    usernameHandleChange(event) {
        this.setState({username: event.target.value});
    }

    emailHandleChange(event) {
        this.setState({email: event.target.value});
    }

    passwordHandleChange(event) {
        this.setState({password: event.target.value});
    }

    retypePasswordHandleChange(event) {
        this.setState({retypePassword: event.target.value});
    }

    signUp(event) {
        event.preventDefault();
        if (this.state.username != '' 
            && this.state.email != '' 
            && this.state.password != '' 
            && this.state.password == this.state.retypePassword)
            this.props.onSignUp(this.state.username, this.state.password);
    }

    backToLogin(event) {
        event.preventDefault();
        this.props.onBackToLogin();
    }

    submitSignUp(event) {
        event.preventDefault();
        this.setState({show: true});
        console.log("Login success with username = " + this.state.username + "and password = " + this.state.password);
    }

    render() {
        return (
            <div>
                <div className='limiter'>
                    <div className='container-login100' style={{backgroundImage: "url('./assets/images/bg-01.jpg')"}}>
                        <div className='wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54'>
                            <form className='login100-form validate-form' onSubmit={(e) => this.submitSignUp(e)}>
                                <span className='login100-form-title p-b-49'>
                                    Create Account
                                </span>

                                <div className='wrap-input100 validate-input m-b-23' data-validate = 'Username is required'>
                                    <br />
                                    <input className='input100' type='text' name='username' placeholder='Type your username' value={this.state.username} onChange={(e) => this.usernameHandleChange(e)}/>
                                    <span className='focus-input100' data-symbol='&#xf206;'></span>
                                </div>

                                <div className='wrap-input100 validate-input m-b-23' data-validate = 'Email is required'>
                                    <br />
                                    <input className='input100' type='text' name='email' placeholder='Type your Email' value={this.state.email} onChange={(e) => this.emailHandleChange(e)}/>
                                    <span className='focus-input100' data-symbol='&#xf206;'></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-23" data-validate="Password is required">
                                    <br />
                                    <input className="input100" type="password" name="pass" placeholder="Type your password" value={this.state.password} onChange={(e) => this.passwordHandleChange(e)}/>
                                    <span className="focus-input100" data-symbol="&#xf190;"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-23" data-validate="Password is required">
                                    <br />
                                    <input className="input100" type="password" name="passrepeat" placeholder="Repeat your password" value={this.state.retypePassword} onChange={(e) => this.retypePasswordHandleChange(e)}/>
                                    <span className="focus-input100" data-symbol="&#xf190;"></span>
                                </div>

                                <br />
                                
                                <div className="container-login100-form-btn">
                                    <div className="wrap-login100-form-btn">
                                        <div className="login100-form-bgbtn"></div>
                                        <button className="login100-form-btn" onClick={(e) => this.signUp(e)}>
                                                    Sign Up
                                        </button>
                                    </div>
                                </div>

                                <br />

                                <div className="container-login100-form-btn">
                                    <div className="wrap-login100-form-btn">
                                        <div className="login100-form-bgbtn"></div>
                                        <button className="login100-form-btn" onClick={(e) => this.backToLogin(e)}>
                                                    Back To Login
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

export default SignUp;