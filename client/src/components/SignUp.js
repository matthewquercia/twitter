import React from 'react';

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password1: "",
            password2: "",
            validationMessage: ""
        }
    }

    clearForm = () => {
        this.setState({
            username: "",
            password1: "",
            password2: "",
            validationMessage: ""
        });
    }

    validatePassword = () => {
        if(this.state.password1 !== this.state.password2){
            this.setState({validationMessage: "Passwords are not the same"});
            return false;
        } else if (this.state.password1 === "" || this.state.password2 === "" || this.state.username === ""){
            this.setState({validationMessage: "Please fill in all fields"});
            return false;
        } else {
            this.setState({validationMessage: ""});
            return true;
        }
    }

    createNewUser = async (e) => {
        e.preventDefault();
        //ensure the size of the post is less than the required size for the database column
        if(this.validatePassword()){
            try {
                //const body = this.state.description;
                //need to use async await so that the fetch can go through
                const response = await fetch("http://localhost:5000/createuser", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({username: this.state.username, password: this.state.password1})
                });
                //this will refresh and show the changes once the response has consent
                window.location = "/";
                this.setState({description: ""});
            } catch(err) {
                console.log(err);
            }
        }
    }

    render(){
        return(
            <div>
                <div className="card w-75 mt-3">
                  <div className="card-body">
                    <h4>Sign Up</h4>
                    <p className="mb-0 mt-3">Username</p>
                    <input type="text" className="form-control" value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
                    <p className="mb-0 mt-3">Password</p>
                    <input type="password" className="form-control" value={this.state.password1} onChange={e => this.setState({password1: e.target.value})}/>
                    <p className="mb-0 mt-3">Re-enter password</p>
                    <input type="password" className="form-control" value={this.state.password2} onChange={e => this.setState({password2: e.target.value})}/>
                    <p className="mt-3 text-danger">{this.state.validationMessage}</p>
                    <div className="mt-3">
                        <button className="btn btn-primary m-0" type="button" onClick={this.createNewUser}>Sign up</button>
                        <button className="btn btn-primary m-2" type="button" onClick={this.clearForm}>Clear</button>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default SignUp;