import React, {Component} from 'react';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

import './sign-up.styles.scss';


class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log('handleSubmit sign-up');

        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert('passwords don\'t match');
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            console.log(user);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;

        return (
            <div className='sign-up'>
                <h2>I do not have a account!</h2>
                <span>Sign up with your email and password</span>
                <form
                    className='sign-up-form'
                    onSubmit={this.handleSubmit}
                >
                    <FormInput
                        name='displayName'
                        type='text'
                        label='Name'
                        value={displayName}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        label='Password'
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        label='Confirm Password'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;