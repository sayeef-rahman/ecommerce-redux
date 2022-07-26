import React from 'react';
import auth from '../../firebase.init'
import {useNavigate, useLocation, Link} from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';

const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    // Signin With Email & Password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // onSubmit Function
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div className=''>
            <div className="">
                <div className="">
                    <h2 className="">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="">
                            <label className="">
                                <span className="">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className=""
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="">
                                {errors.email?.type === 'required' && <span className="">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="">
                            <label className="">
                                <span className="">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className=""
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="">
                                {errors.password?.type === 'required' && <span className="">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="">{errors.password.message}</span>}
                            </label>
                        </div>

                        {signInError}
                        <input className='' type="submit" value="Login" />
                    </form>
                    <p><small>New to Doctors Portal <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
                    <div className="">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className=""
                    >Continue with Google</button>
                </div>
            </div>
        </div >
    );
};

export default Login;