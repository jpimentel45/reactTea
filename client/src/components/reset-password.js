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
			confirmPassword: '',
			submitButtonState: ""

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.validateEmail = this.validateEmail.bind(this)
		this.validatePasswords = this.validatePasswords.bind(this)
		this.validateFields = this.validateFields.bind(this)
	}
	handleChange(event) {
		console.log("handleChange event")
		console.log(event.target.name)
		console.log(event.target.value)

		this.setState({
			[event.target.name]: event.target.value
		}, () => {
			this.validateFields()
			console.log(this.state.password)
		})
		// console.log(this.state.password)
		// this.validateFields()
	}

	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log((this.state.username).toLowerCase())
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/resetpassword', {
			username: (this.state.username).toLowerCase(),
			password: this.state.password,
			confirmpassword: this.state.confirmpassword,
			// first_name: this.state.first_name,
			// last_name: this.state.last_name
		})
			.then(response => {

				console.log("change password response")
				console.log(response)
				if (!response.data.error) {
					console.log('successful change of password')
					alert("Password changed")
					// alert("User created")
					// this.renderRedirectToHome()
					// this.setState({ //redirect to login page
					// 	redirectTo: '/login'
					// })



					// this.props.children.push('/')
					// return <Redirect to='/' />

				} else {
					console.log('Username does not exist')
					alert("Username does not exist")
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
			console.log("email OK")
			return true

			// this.state.submitButtonState = "ok"
		} else {
			return false

		}
	}
	validatePasswords() {
		console.log(this.state.password.length)
		console.log("password")
		console.log(this.state.password)
		console.log("confirm password")
		console.log(this.state.confirmPassword)
		if (this.state.password.length > 7 && this.state.confirmPassword.length > 7) {
			if (this.state.password == this.state.confirmPassword) {
				console.log("password OK")
				return true

			} else {
				return false
			}
		} else {
			return false
		}
	}

	validateFields() {
		let email = this.validateEmail()
		let password = this.validatePasswords()
		console.log("email result")
		console.log(email)
		console.log("password result")
		console.log(password)

		if (email && password) {
			this.setState({ submitButtonState: "1" })

			// if (this.state.submitButtonState !== 1) {
			// 	this.handleChange
			// 	console.log(" enabling submit")
			// }
			console.log(" enabling submit")
			return true


		} else {

			this.state.submitButtonState = ""
			console.log("not enabling submit")
			return true
		}
	}

	render() {
		return (
			<div className="SignupForm">
				<h4>Reset Password</h4>
				<form className="form-horizontal">

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
							<label className="form-label" htmlFor="password">Password: </label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								placeholder="password"
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</div>
					</div>

					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="password">Confirm Password: </label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								placeholder="confirm Password"
								type="password"
								name="confirmPassword"
								value={this.state.confirmPassword}
								onChange={this.handleChange}
							/>
						</div>
					</div>

					<div className="form-group ">
						<div className="col-7"></div>
						<button
							className="btn btn-primary col-1 col-mr-auto"
							onClick={this.handleSubmit}
							type="submit"
							id="submitId"
							ref="submitId"
							// disabled={false}
							disabled={!this.state.submitButtonState}
						>Reset Password</button>
					</div>
				</form>
			</div>

		)
	}
}


export default Signup
