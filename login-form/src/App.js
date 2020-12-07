import React from "react";
import logo from './logo.svg';
import Login from './components/login.js';
import SignUp from './components/signup.js';
import LoggedIn from './components/logged-In.js';
//import './App.css';

class App extends React.Component {

  lstAccount = [];

  constructor(props) {
    super(props);
    this.state = {username: '', password: '', needSignUp: false};
  }

  openSignUp() {
    this.setState({needSignUp: true});
  }

  backToLogin() {
    this.setState({needSignUp: false});
  }

  checkAccExist(u, p) {
    console.log("checkAccExist with username = " + u + " and password = " + p);
    let find = false;
    this.lstAccount.forEach(element => {
      if (element.username == u && element.password == p)
      {
        find = true;
      }
    });
    return find;
  }

  login() {
    this.forceUpdate();
  }

  signUp(u, p) {
    this.setState({username: u});
    this.setState({password: p});
    this.setState({needSignUp: false});
    this.lstAccount.push({username: u, password: p});
  }

  logout() {
    this.lstAccount = [];
    this.setState({username: ''});
    this.setState({password: ''});
  }

  render() {

    let loginForm;
    if (this.lstAccount.length > 0)
    {
      return (
        <div>
          <LoggedIn username={this.lstAccount[0].username} password={this.lstAccount[0].password} logout={() => this.logout()} />
        </div>
      );
    }

    if (this.state.needSignUp)
    {
      loginForm = <SignUp 
                    onBackToLogin={() => this.backToLogin()}
                    onSignUp={(u, p) => this.signUp(u, p)} />;
      return (
        <div>
          {loginForm}
        </div>
      );
    }

    if (this.state.username == '' && this.state.password == '')
    {
      loginForm = <Login 
                    onLoginSuccess={() => this.login()}
                    onCheckAccExist={(u, p) => this.checkAccExist(u, p)}
                    onOpenSignUp={(u, p) => this.openSignUp(u, p)} />;
    }
    else
    {
      loginForm = <LoggedIn username={this.state.username} password={this.state.password} logout={() => this.logout()} />;
    }

    return (
      <div>
        {loginForm}
      </div>
    );
  }
}

export default App;
