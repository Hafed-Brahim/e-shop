import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss';
const SignIn = ({googleSignInStart, emailSignInStart}) => {

    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setUserCredentials({...userCredentials, [name]: value });
    }

    return (
        <div className='sign-in'>
            <h2>I already have an acount</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    label="email"
                    handleChange={handleChange}
                    required />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    label="password"
                    handleChange={handleChange}
                    required />
                <div className='buttons'>
                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                        Sign In with google
                        </CustomButton>
                </div>

            </form>
        </div>
    );

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);