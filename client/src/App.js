
import { Provider} from 'react-redux'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar'
import {HashRouter} from 'react-router-dom'
import LoginForm from './components/login-form'
import React, { Component } from 'react';
import axios from 'axios'
import { Switch, Route, Link, Redirect } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.checkUser = this.checkUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
    this.checkUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }
  renderRedirectToHome = () => {

    return <Redirect to='/target' />

  }

  getUser() {
    axios.get('/user/').then(response => {
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

  checkUser() {
    axios.get('/user/profile').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      // if (response.data.user) {
      //   console.log('Get User: There is a user saved in the server session: ')

      //   this.setState({
      //     loggedIn: true,
      //     username: response.data.user.username
      //   })
      // } else {
      //   console.log('Get user: no user');
      //   this.setState({
      //     loggedIn: false,
      //     username: null
      //   })
      // }
    })
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <Provider store={store}>
            <div className="App">
              <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
              {/* greet user if logged in: */}
              {/* {this.state.loggedIn &&
                <p>Join the party, {this.state.username}!</p>
              } */}
              <Route
                path="/login"
                render={() =>
                  <LoginForm
                    updateUser={this.updateUser}
                  />}
              />

            </div>
          
          </Provider>
        </HashRouter>



      </div>


    );
  }
}

export default App;
