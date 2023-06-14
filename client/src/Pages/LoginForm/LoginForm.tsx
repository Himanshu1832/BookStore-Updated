import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import {  useQueryClient } from 'react-query';
import { useCheckUser } from '../../Hooks/CustumHooks/PostHooks/useCheckUser';
import { LoginFormValues } from '../../Interface/Interface';
// import { AuthContext } from "../../Hooks/CustumHooks";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css"



const LoginForm = () => {

// const { useCheckUser,currentUser } = useContext(AuthContext);
// console.log(currentUser)
const navigate = useNavigate();
  
    const queryClient = useQueryClient();
    const form = useForm<LoginFormValues>();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
 
    const { mutate, isLoading } = useCheckUser();

      const onSubmit = (data: LoginFormValues) => {
        const employee = {
          ...data
        };
        mutate(employee);
        navigate("/");
      };


    return (
      <div className='main-div'>
  

        
        <form onSubmit={handleSubmit(onSubmit)} noValidate className='form'>
            
      <div className='input-container'>

      <div className='form-heading'><h1>Login</h1></div>

      
      <div className="register-inputs">
      <label htmlFor="username">Username</label>
          <input className="input"  type="text" id='username' {...register("username", {
            required: {
              value: true,
              message: "username is req",
            }, 
          })} />
      </div>

          <p>{errors.username?.message}</p>


          <div className="register-inputs">
          <label htmlFor="password">Password</label>
          <input className="input"  type="password" id='password' {...register("password", {
            pattern: {
              value:  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              message: "password is req"
            },
          })} />
          </div>
          
          <p>{errors.password?.message}</p>

          <div className='submit-btn-div'>
                        <button className='submit-btn'>Submit</button>
                    </div> 
      </div>
         
  
        </form>
        <DevTool control={control} />
      </div>
    )
}


export default LoginForm



