import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { useQueryClient } from 'react-query';
import { RegisterFormValues } from '../../Interface/Interface';
import { useCreateUser } from '../../Hooks/CustumHooks';
// import { AuthContext } from "../../Hooks/CustumHooks";
import { useContext } from "react";




// const obj :FormValues= {
//     "name": "Jane",
//     "username": "jane1234",
//     "email": "jane@gmail.com",
//     "password":"123456789",
//     "college_name":"SKIT",
//     "course":"BTECH",
//     "branch":"CSE",
//     "m_no":"7878846772",
//     "sem":"3"
//   }


let rendercount = 0;

const RegisterForm = () => {

    const queryClient = useQueryClient();
    const form = useForm<RegisterFormValues>()
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;

// const { useCreateUser } = useContext(AuthContext);s

    const { mutate, isLoading } = useCreateUser();
    const onSubmit = (data: RegisterFormValues) => {
        const userData = {
            ...data
        };
        mutate(userData);
    };

    rendercount++;
    return (
        <div>

            <h1>Form</h1>
            <h2>Render count: {rendercount / 2}</h2>


            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' {...register("name", {
                    required: {
                        value: true,
                        message: "name is req",
                    },

                })} />
                <p>{errors.name?.message}</p>

                <label htmlFor="username">Username</label>
                <input type="text" id='username' {...register("username", {
                    required: {
                        value: true,
                        message: "username is req",
                    },

                })} />
                <p>{errors.username?.message}</p>

                <label htmlFor="email">Email</label>
                <input type="email" id='email' {...register("email", {
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
                <p>{errors.email?.message}</p>


                <label htmlFor="password">Password</label>
                <input type="password" id='password' {...register("password", {
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                        message: "password is req"
                    },
                })} />
                <p>{errors.password?.message}</p>

                <label htmlFor="college_name">College Name</label>
                <input type="text" id='college_name' {...register("college_name", {
                    required: {
                        value: true,
                        message: "college_name is req",
                    },

                })} />
                <p>{errors.college_name?.message}</p>

                <label htmlFor="course">Course</label>
                <input type="text" id='course' {...register("course", {
                    required: {
                        value: true,
                        message: "course is req",
                    },

                })} />
                <p>{errors.course?.message}</p>

                <label htmlFor="branch">Branch</label>
                <input type="text" id='branch' {...register("branch", {
                    required: {
                        value: true,
                        message: "branch is req",
                    },

                })} />

                <p>{errors.branch?.message}</p>

                <label htmlFor="m_no">Mobile Number</label>
                <input type="text" id='m_no' {...register("m_no", {
                    required: {
                        value: true,
                        message: "Mobile No is required is req",
                    },

                })} />

                <p>{errors.m_no?.message}</p>

                <label htmlFor="sem">Semester</label>
                <input type="text" id='sem' {...register("sem", {
                    required: {
                        value: true,
                        message: "sem is req",
                    },

                })} />

                <button >Submit</button>

            </form>
            <DevTool control={control} />
        </div>
    )
}


export default RegisterForm



