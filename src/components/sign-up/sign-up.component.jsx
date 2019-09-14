import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';


const SignUp = ({signUpStart}) => {

    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    })

    const { displayName, email, password, passwordConfirmation } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== passwordConfirmation) {
            alert("passwords don't match");
            return;
        }

        signUpStart(displayName, email, password);
    };

    const handleChange = event => {
        const { value, name } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <div className='sign-up'>
            <h2>I don't have an acount</h2>
            <span>Sign up with tour email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    label='Display name'
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    label="Email"
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    label="Password"
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    type="password"
                    name="passwordConfirmation"
                    value={passwordConfirmation}
                    label='Confirm password'
                    handleChange={handleChange}
                    required
                />

                <CustomButton type="submit"> Sign Up </CustomButton>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    signUpStart: (displayName, email, password) => dispatch(signUpStart({ displayName, email, password }))
});

export default connect(null, mapDispatchToProps)(SignUp);