import React from 'react'; 

class SessionForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {username: '', password: ''}
		this.handleSubmit = this.handleSubmit.bind(this); 
	}  

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value 
		}); 
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = Object.assign({}, this.state); 
		this.props.processForm(user); 
	}

	render () {
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					Create your Tbay account here 
					<br/>
					<div className="login-form">
						<br />
						<label> Username:  
							<input type="text"
								value={this.state.username}
								onChange={this.update('username')}
								className="login-input"
							/>
						</label>
						<br />
						<label> Password:  
							<input type="password"
								value={this.state.password}
								onChange={this.update('password')}
								className="login-input"
							/>
						</label>
						<button> Submit </button>
					</div>
				</form>
			</div>
		);
	}
};

export default SessionForm; 