import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import {Route, Link, Redirect} from 'react-router-dom'
import logo from '../logo.svg'
import './CSS/style.css';
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import MainMenu from './MainMenu'
import ShoppingList from './ShoppingList';
import Special from './Special';
import Home from './home'
import { Container } from 'reactstrap'
import ItemModal from './ItemModal'

// components
import Signup from './sign-up'
import LoginForm from './login-form'

import Profile from './Profile'
import ResetPassword from './reset-password'

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
   
        this.logout = this.logout.bind(this)
        this.getUser = this.getUser.bind(this)
        this.getusername = this.getusername.bind(this)
    }

    getUser() {
        axios.get('/user/profile').then(response => {
            console.log('Get user response: ')
            console.log(response.data)
            if (response.data.user) {
                console.log('Get User: There is a user saved in the server session: ')

                this.setState({
                    loggedIn: true,
                    username: response.data.user.username
                })
            } else {
                console.log('Get user: no user');
                this.setState({
                    loggedIn: false,
                    username: null
                })
            }
        })
    }

    redirectToResetPassword() {
        axios.get('/user/resetpassword').then(response => {
            console.log('Get user response: ')
            console.log(response.data)

            // this.props.push("/resetpassword")

            //         render() { (return <Redirect to='/login' />)
            // }
            // if (response.data.user) {
            //     console.log('Get User: There is a user saved in the server session: ')

            //     this.setState({
            //         loggedIn: true,
            //         username: response.data.user.username
            //     })
            // } else {
            //     console.log('Get user: no user');
            //     this.setState({
            //         loggedIn: false,
            //         username: null
            //     })
            // }
        })
    }


    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
            console.log("response.data under logout")
            console.log(response)
            if (response.status === 200) {
                console.log("response.status is 200 logout")
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
                this.setState({
                    redirectTo: '/'
                })
            }
            localStorage.removeItem('usertoken')
            // this.props.history.push('/login')
            console.log("deletig token")
            // this.props.history.pushState('/login');
            // this.props.history.pushState('/login');
            // this.props.history.pushState('/login');
            // this.props.history.pushState('/login');
         window.location = '/login'
        }).catch(error => {
            console.log('Logout error')
            console.log(error)
        })
    }

    getusername() {
        console.log("inside checkuser")
        console.log();
        if ((localStorage.usertoken) === null || (localStorage.usertoken) === undefined) {
            console.log("Token is null");

            return <Redirect to='/Login' />
        }
        const token = localStorage.usertoken
        const decoded = jwt_decode(token);
        console.log("decoded under NAVBAR getusername")
        console.log(decoded)
        return (decoded.first_name + " " + decoded.last_name)
    }



    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log('navbar render, props: ')
        console.log('navbar render, props: ')
        console.log('navbar render, props: ')
        console.log(this.props);


        const userLink = (


            <Link to="/" className="btn btn-link text-secondary" >
                {this.getusername()}</Link>



        )

        return (
            <div>

                <header className="navbar App-header" id="nav-container">
                    <div className="col-4 col-mr-auto">
                        <div id="top-filler"></div>
                        <img src={logo} className="App-logo" alt="logo" />
                        {/* <h1 className="App-title">TEASPOTS</h1> */}
                    </div>
                    <div className="col-4" >
                        {loggedIn ? (
                            <section className="navbar-section">
                                {localStorage.usertoken ? userLink : ""}
                                <Link to="/updateSpecial" className="btn btn-link text-secondary">
                                    <span className="text-secondary">Update Special</span>
                                </Link> 
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                    <span className="text-secondary">logout</span></Link>
                                {/* <Link to="/Profile" className="btn btn-link text-secondary" onClick={this.getUser}>
                                    <span className="text-secondary">profile</span>
                                </Link>  */}
                                
                                <Link to="/signup" className="btn btn-link" onClick={this.getUser}>
                                    <span className="text-secondary" >sign up</span>
                                </Link>
                               
                            </section>
                        ) : (
                        
                                <section className="navbar-section">
                                    <Link to="/" className="btn btn-link text-secondary">
                                        <span className="text-secondary">Home</span>
                                    </Link>
                                    <Link to="/menu" className="btn btn-link text-secondary">
                                        <span className="text-secondary">Menu</span>
                                    </Link>

                                    <Link to="/special" className="btn btn-link text-secondary">
                                        <span className="text-secondary">Daily Special</span>
                                    </Link>

                                    {/* only employees should be able to update the special */}

                                   

                                    <Link to="/login" className="btn btn-link text-secondary">
                                        <span className="text-secondary">Login</span>
                                    </Link>
                                   
                                </section>
                            )}
                    </div>
                  
                </header>
                

                <Route
                    exact path="/updateSpecial"
                    render={() =>

                        <Container>
                            <h2>Make sure to delete, and add a new special</h2>
                            <ItemModal />
                            <ShoppingList />
                        </Container> } 
                        />
                

                <Route
                    exact path="/"
                    component={Home} 
                    />
                <Route
                    exact path="/menu"
                    component={MainMenu}
                />

                <Route
                    exact path="/user/profile"
                    component={Profile} /> 

                {/* <Route
                    path="/login"
                    render={() =>
                        <LoginForm
                            updateUser={this.updateUser}
                        />}
                /> */}
                <Route
                    path="/signup"
                    render={() =>
                        <Signup />}
                />
                <Route
                    path="/resetpassword"
                    render={() =>
                        <ResetPassword />}
                />
                <Route
                    path="/special"
                    render={() =>
                        <div className="special">
                        <h2 >Pasadena Daily Special</h2>
                        <Special
                
                        // updateUser={this.updateUser}
                        />
                        </div>}
                        />
            </div>

        );

    }
}

export default Navbar