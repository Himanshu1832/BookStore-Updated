import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { useQueryClient } from 'react-query';
import { RegisterFormValues } from '../../Interface/Interface';
import { useCreateUser } from '../../Hooks/CustumHooks/PostHooks/useCreateUser';
// import { AuthContext } from "../../Hooks/CustumHooks";
import { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import "./RegisterForm.css"



const RegisterForm = () => {
    const navigate = useNavigate();

    const queryClient = useQueryClient();
    const form = useForm<RegisterFormValues>()
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;

    // const { useCreateUser } = useContext(AuthContext);

    const { mutate, isLoading } = useCreateUser();
    const onSubmit = (data: RegisterFormValues) => {
        const userData = {
            ...data
        };
        mutate(userData);
        navigate("/login")
    };

    return (
        <div className='main-div'>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className='form'>


                <div className='input-container'>

                    <div className='form-heading'><h1>Register</h1></div>

                    <div className='register-inputs'>
                        <label htmlFor="name">Name</label>
                        <input className="input" type="text" id='name' {...register("name", {
                            required: {
                                value: true,
                                message: "name is req",
                            },

                        })} />
                    </div>
                    <p>{errors.name?.message}</p>


                    <div className='register-inputs'>
                        <label htmlFor="username">Username</label>
                        <input className="input" type="text" id='username' {...register("username", {
                            required: {
                                value: true,
                                message: "username is req",
                            },

                        })} />
                    </div>
                    <p>{errors.username?.message}</p>


                    <div className='register-inputs'>
                        <label htmlFor="email">Email</label>
                        <input className="input" type="email" id='email' {...register("email", {
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "email is req"
                            },
                            // validate: (fieldValue) => {
                            //   return (
                            //     fieldValue !== "himanshu" || "Enter diff email Address"

                            //   );
                            // }
                        })} />
                    </div>
                    <p>{errors.email?.message}</p>



                    <div className='register-inputs'>
                        <label htmlFor="password">Password</label>
                        <input className="input" type="password" id='password' {...register("password", {
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                                message: "password is req"
                            },
                        })} />
                    </div>
                    <p>{errors.password?.message}</p>


                    <div className='register-inputs'>
                        <label htmlFor="college_name">College Name</label>
                        <input className="input" type="text" id='college_name' {...register("college_name", {
                            required: {
                                value: true,
                                message: "college_name is req",
                            },

                        })} />
                    </div>
                    <p>{errors.college_name?.message}</p>

                    <div className='register-inputs'>
                        <label htmlFor="course">Course</label>
                        <input className="input" type="text" id='course' {...register("course", {
                            required: {
                                value: true,
                                message: "course is req",
                            },

                        })} />
                    </div>
                    <p>{errors.course?.message}</p>


                    <div className='register-inputs'>
                        <label htmlFor="branch">Branch</label>
                        <input className="input" type="text" id='branch' {...register("branch", {
                            required: {
                                value: true,
                                message: "branch is req",
                            },

                        })} />

                    </div>
                    <p>{errors.branch?.message}</p>


                    <div className='register-inputs'>
                        <label htmlFor="m_no">Mobile Number</label>
                        <input className="input" type="text" id='m_no' {...register("m_no", {
                            required: {
                                value: true,
                                message: "Mobile No is required is req",
                            },

                        })} />

                    </div>
                    <p>{errors.m_no?.message}</p>


                    <div className='register-inputs'>
                        <label htmlFor="sem">Semester</label>
                        <input className="input" type="text" id='sem' {...register("sem", {
                            required: {
                                value: true,
                                message: "sem is req",
                            },

                        })} />
                    </div>

                    <div className='submit-btn-div'>
                        <button className='submit-btn'>Submit</button>
                    </div>                
                </div>

            </form>
            <DevTool control={control} />
        </div>
    )
}


export default RegisterForm



