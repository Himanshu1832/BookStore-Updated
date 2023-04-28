// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { DevTool } from '@hookform/devtools'
// import { useQuery } from 'react-query'
// import { useMutation, useQueryClient } from 'react-query';
// import axios from 'axios';
// let rendercount = 0;

// type FormValues = {
//     username: string;
//     // email: string;
//     password: string;
    
// }

//   const checkUser = async (data: FormValues) => {
//     return await axios.post('http://localhost:8000/api/auth/login', data);
//     // console.log(response.data)
//     // return response.data;
//   };

// const LoginForm = () => {

//     const queryClient = useQueryClient();
//     const form = useForm<FormValues>()
//     const { register, control, handleSubmit, formState } = form;
//     const { errors } = formState;
  
//     // const onSubmit = (data: FormValues) => {

        

//     //   console.log(data)
//     // }



//     const { mutate, isLoading } = useMutation(checkUser, {
//         onSuccess: data => {
//             console.log("data")
//           console.log(data.data.user);
//           const message = "success"
//           alert(message)
//         },
//         onError: () => {
//           alert("there was an error")
//         },
//         onSettled: () => {
//           queryClient.invalidateQueries('create');
//         }
//       });
//       const onSubmit = (data: FormValues) => {
//         const employee = {
//           ...data
//         };
//         mutate(employee);
//       };


//     rendercount++;
//     return (
//       <div>
  
//         <h1>Form</h1>
//         <h2>Render count: {rendercount / 2}</h2>

        
//         <form onSubmit={handleSubmit(onSubmit)} noValidate>
            

//           <label htmlFor="username">Username</label>
//           <input type="text" id='username' {...register("username", {
//             required: {
//               value: true,
//               message: "username is req",
//             },
            
//           })} />
//           <p>{errors.username?.message}</p>
          

//           {/* <label htmlFor="email">Email</label>
//           <input type="email" id='email' {...register("email", {
//             pattern: {
//               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//               message: "email is req"
//             },
//             // validate: (fieldValue) => {
//             //   return (
//             //     fieldValue !== "himanshu" || "Enter diff email Address"
  
//             //   );
//             // }
//           })} /> */}
//           {/* <p>{errors.email?.message}</p> */}


//           <label htmlFor="password">Password</label>
//           <input type="password" id='password' {...register("password", {
//             pattern: {
//               value:  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
//               message: "password is req"
//             },
//           })} />
//           <p>{errors.password?.message}</p>

//           <button >Submit</button>
  
//         </form>
//         <DevTool control={control} />
//       </div>
//     )
// }


// export default LoginForm



