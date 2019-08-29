import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';


class SignUp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {displayName, email, password, passwordConfirmation} = this.state;

        if(password !== passwordConfirmation){
            alert("passwords don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            
            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                passwordConfirmation: ''
            });

        } catch (error) {
            console.error("error");
        }
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value});
    }

    render(){
        return(
            <div className = 'sign-up'>
                <h2>I don't have an acount</h2>
                <span>Sign up with tour email and password</span>
                <form onSubmit = {this.handleSubmit}>
                    <FormInput 
                        type="text" 
                        name ="displayName" 
                        value={this.state.displayName} 
                        label = "Display name"
                        handleChange = {this.handleChange} 
                        required
                    />
                    <FormInput 
                        type="email" 
                        name ="email" 
                        value={this.state.email} 
                        label = "Email"
                        handleChange = {this.handleChange} 
                        required
                    />
                    <FormInput 
                        type="password" 
                        name ="password" 
                        value={this.state.password} 
                        label = "Password"
                        handleChange = {this.handleChange} 
                        required
                    />
                    <FormInput 
                        type="password" 
                        name ="passwordConfirmation" 
                        value={this.state.passwordConfirmation} 
                        label = 'Confirm password'
                        handleChange = {this.handleChange} 
                        required
                    />

                        <CustomButton type="submit"> Sign Up </CustomButton>                
                </form>
            </div>
        );
    }
};

export default SignUp;