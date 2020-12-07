import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: '', show: false};
    }

    usernameHandleChange(event) {
        this.setState({username: event.target.value});
    }

    passwordHandleChange(event) {
        this.setState({password: event.target.value});
    }

    submitLogin(event) {
        event.preventDefault();
        if (this.state.username == '' || this.state.password == '') return false;
        if (this.props.onCheckAccExist(this.state.username, this.state.password))
        {
            this.props.onLoginSuccess();
        }
        else
        {
            console.log("this username isn't existed");
        }
    }

    openSignUp(event) {
        event.preventDefault();
        this.props.onOpenSignUp();
    }

    render() {
        return (
            <div>
                {/* <Modal show={this.state.show}>
          <p>Modal</p>
          <p>Data</p>
        </Modal> */}
        
                <div className='limiter'>
                    <div className='container-login100' style={{backgroundImage: "url('./assets/images/bg-01.jpg')"}}>
                        <div className='wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54'>
                            <form className='login100-form validate-form' onSubmit={(e) => this.submitLogin(e)}>
                                <span className='login100-form-title p-b-49'>
                                    Login
                                </span>

                                <div className='wrap-input100 validate-input m-b-23' data-validate = 'Username is required'>
                                    <span className='label-input100'>Username</span>
                                    <input className='input100' type='text' name='username' placeholder='Type your username' value={this.state.username} onChange={(e) => this.usernameHandleChange(e)}/>
                                    <span className='focus-input100' data-symbol='&#xf206;'></span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate="Password is required">
                                    <span className="label-input100">Password</span>
                                    <input className="input100" type="password" name="pass" placeholder="Type your password" value={this.state.password} onChange={(e) => this.passwordHandleChange(e)}/>
                                    <span className="focus-input100" data-symbol="&#xf190;"></span>
                                </div>
                                
                                <div className="text-right p-t-8 p-b-31">
                                    <a href="#">
                                                Forgot password?
                                    </a>
                                </div>
                                
                                <div className="container-login100-form-btn">
                                    <div className="wrap-login100-form-btn">
                                        <div className="login100-form-bgbtn"></div>
                                        <button className="login100-form-btn" onClick={(e) => this.submitLogin(e)}>
                                                    Login
                                        </button>
                                    </div>
                                </div>

                                <div className="txt1 text-center p-t-54 p-b-20">
                                    <span>
                                                Or Sign Up Using
                                    </span>
                                </div>

                                <div className="flex-c-m">
                                    <a href="#" className="login100-social-item bg1">
                                        <i className="fa fa-facebook"></i>
                                    </a>

                                    <a href="#" className="login100-social-item bg2">
                                        <i className="fa fa-twitter"></i>
                                    </a>

                                    <a href="#" className="login100-social-item bg3">
                                        <i className="fa fa-google"></i>
                                    </a>
                                </div>

                                <div className="flex-col-c p-t-155">
                                    <span className="txt1 p-b-17">
                                                Or Sign Up Using
                                    </span>

                                    <a href="#" className="txt2" onClick={(e) => this.openSignUp(e)}>
                                                Sign Up
                                    </a>
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

export default Login;