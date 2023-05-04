import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import {  useQueryClient } from 'react-query';
import { useCheckUser } from '../../Hooks/CustumHooks/useCheckUser';
import { LoginFormValues } from '../../Interface/Interface';
// import { AuthContext } from "../../Hooks/CustumHooks";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";



let rendercount = 0;

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


    rendercount++;
    return (
      <div>
  
        <h1>Form</h1>
        <h2>Render count: {rendercount / 2}</h2>

        
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            

          <label htmlFor="username">Username</label>
          <input type="text" id='username' {...register("username", {
            required: {
              value: true,
              message: "username is req",
            }, 
          })} />

          <p>{errors.username?.message}</p>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' {...register("password", {
            pattern: {
              value:  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              message: "password is req"
            },
          })} />
          <p>{errors.password?.message}</p>

          <button >Submit</button>
  
        </form>
        <DevTool control={control} />
      </div>
    )
}


export default LoginForm



