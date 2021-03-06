import React, { Component } from 'react';
import { Switch, Route, Link ,Redirect,Router} from 'react-router-dom';
import { Layout, Typography, Space, Avatar } from 'antd';
import { GoogleLogin } from 'react-google-login';
import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar, Prediction } from './components';
import './App.css';
import icon from './images/cryptocurrency.png';


  class App extends Component {
    state={
      isLoggedIn:false
    }
    responseGoogle=(response)=>{
  
      

      if(response.profileObj.email!=null){
        console.log(response.profileObj.email);
      this.setState({isLoggedIn:true});
      localStorage.setItem("isLoggedIn","true");
      console.log(response.profileObj.email!=null)
        window.location.reload();

      }
    }
    render() {
      return (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>

        {console.log(typeof(localStorage.getItem("isLoggedIn")),localStorage.getItem("isLoggedIn")=="false")}
      {(localStorage.getItem("isLoggedIn")==null||localStorage.getItem("isLoggedIn")=="false")?
        <div className='container'>
        <div className='row' style={{width:'22%', padding : '5px'}}>
        <div className="google-text col-sm-4">
        
        <Typography.Title level = {2} className = "logo col-sm-6">
                <h1>CryptoTracker</h1>
            </Typography.Title> 
        </div>
        <div className="Google-login">
        <GoogleLogin
        clientId="696846841621-r3h6mebbaqg764a0fiobre96us2eloeb.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
        
        />
        </div></div></div>:''}
        <div className="routes">
        {localStorage.getItem("isLoggedIn")=="true"?
        

           <Switch>
                       <Route exact path="/">
              <Homepage />
              </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
            <Route exact path = "/prediction">
              <Prediction />
            </Route>
            
          </Switch>
          
          :''}
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright ?? 2022
          <Link to="/">
          CryptoTracker Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);
      }}

export default App;
