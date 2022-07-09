import React from 'react';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    validateLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/loginuser/${this.state.username}/${this.state.password}`);
            const jsonData =  response.json();
        } catch (err){
            console.log(err);
        }
    }

    render(){
        return(
            <div>
                <div className="card w-75 mt-3">
                  <div className="card-body">
                    <h4>Login</h4>
                    <p className="mb-0 mt-3">Username</p>
                    <input type="text" className="form-control" value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
                    <p className="mb-0 mt-3">Password</p>
                    <input type="password" className="form-control" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
                    <div className="mt-3">
                        <button className="btn btn-primary m-0" type="button" onClick={this.validateLogin}>Login</button>
                        <a href="/"><button className="btn btn-primary m-2" href="/" type="button">Cancel</button></a>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default Login;