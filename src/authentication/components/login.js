import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div className="login-form-wrapper">
        <form onSubmit={(event) => {event.preventDefault(); this.props.handleSubmit(this.props.input.username, this.props.input.password);}}>
          <input placeholder="username" type="text" onChange={(event) => {this.props.handleChange("username", event)}} value={this.props.input.username}/>
          <input placeholder="password" type="password" onChange={(event) => {this.props.handleChange("password", event)}} value={this.props.input.password} />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}


export default Login;
