import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Toastr from 'toastr';

require('../../styles/logon.css');

class LogonForm extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            login: {
                userName: "",
                password: ""
            },
            errors: {
                userName: "",
                password: ""
            }
        };
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onClickLogon = this.onClickLogon.bind(this);

        Toastr.options.preventsDuplicates = true;
    }

    onUserNameChange(event) {
        const login = this.state.login;
        login.userName = event.target.value;

        const errors = this.state.errors;
        errors.userName = "";

        this.setState({ login: login, errors: errors });
    }

    onPasswordChange(event) {
        const login = this.state.login;
        login.password = event.target.value;

        const errors = this.state.errors;
        errors.password = "";

        this.setState({ login: login, errors: errors });
    }

    onClickLogon() {
    Toastr.remove();

        //hardcoded username and password & logic that should be in another class
        const goodUserName = "admin";
        const goodPassword = "password";

        const login = this.state.login;
        const errors = this.state.errors;

        errors.userName = login.userName == "" ? "You must enter a Username" : "";
        errors.password = login.password == "" ? "You must enter a Password" : "";

        if (errors.userName == "" && errors.password == "") {
            if (login.userName === goodUserName && login.password === goodPassword) {
                Toastr.success('Successfully logged in!');
            } else {
                login.userName = "";
                login.password = "";
                Toastr.error('Incorrect username or password (try "admin", "password")', 'Oops!');
            }
        }

        this.setState({ login: login, errors: errors });
    }


    render() {
        return (
            <div className="center_form">
                <h2>Please Logon</h2>
                <TextField
                    floatingLabelText="Username"
                    value={this.state.login.userName}
                    onChange={this.onUserNameChange}
                    errorText={this.state.errors.userName}/>
                <TextField
                    floatingLabelText="Password" type="password"
                    value={this.state.login.password}
                    onChange={this.onPasswordChange}
                    errorText={this.state.errors.password}/>
                <div id="logon_submit">
                    <RaisedButton label="Log on" primary={true} onClick={this.onClickLogon} />
                </div>
            </div>
        );
    }
}

export default LogonForm;