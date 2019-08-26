import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Signup extends Component {
	constructor() {
		super()
		// this.submitButtonState = { value: '' };
		this.state = {
			username: '',
			password: '',
			first_name: '',
			last_name: '',
			confirmPassword: '',
			submitButtonState: ''

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
		this.validateEmail()
	}

	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log((this.state.username).toLowerCase())
		event.preventDefault()
console.log(this.state.password)
		//request to server to add a new username/password
		axios.post('/user/register', {
			username: (this.state.username).toLowerCase(),
			password: this.state.password,
			first_name: this.state.first_name,
			last_name: this.state.last_name
		})
			.then(response => {
				console.log(response)
				if (!response.data.error) {
					console.log('successful signup')
					// alert("User created")
					// this.renderRedirectToHome()
					// this.setState({ //redirect to login page
					// 	redirectTo: '/login'
					// })
					this.props.children.push('/')
					return <Redirect to='/' />

				} else {
					console.log('username already taken')
					alert("Username already taken")
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}

	renderRedirectToHome = () => {

		return <Redirect to='/' />

	}

	validateEmail() {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (re.test(String(this.state.username).toLowerCase())) {
			console.log("ffdas");
			this.state.submitButtonState = "ok"
		} else {
			this.state.submitButtonState = ""
		}
	}

	render() {
		return (
			<div className="SignupForm">
				
				<form className="form-horizontal">
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<h2>Sign up</h2>
							<label className="form-label" htmlFor="username">First Name</label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								type="text"
								id="first_name"
								name="first_name"
								placeholder="First Name"
								value={this.state.first_name}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="username">Last Name</label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								type="text"
								id="last_name"
								name="last_name"
								placeholder="Last Name"
								value={this.state.last_name}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="username">Username</label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								type="text"
								id="username"
								name="username"
								placeholder="Username"
								value={this.state.username}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="password">Password </label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								placeholder="Password"
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group ">
						<div className="col-7"></div>
						<button
							className="btn btn-dark btn-primary col-1 col-mr-auto"
							onClick={this.handleSubmit}
							type="submit"
							disabled={!this.state.submitButtonState}
						>Sign up</button>
					</div>
				</form>
			</div>

		)
	}
}

export default Signup
