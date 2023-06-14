import { useQuery } from 'react-query'
import { useMutation, useQueryClient } from 'react-query';
import { AddBookFormValues, AddCartValues, LoginFormValues, RegisterFormValues } from "../../../Interface/Interface";
import { createContext, useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';



const checkUser = async (data: LoginFormValues) => {
    return await axios.post('http://localhost:8000/api/auth/login', data);
    
    // console.log(response.data)
    // return response.data;
  };

  const setLocally = (data: any) => {
    localStorage.setItem('user', JSON.stringify(data.data.user));
    localStorage.setItem('token', JSON.stringify(data.data.token));

    alert("success")
    };


export const useCheckUser = () => {
    const queryClient = useQueryClient();

  return  useMutation(checkUser, {
        onSuccess: data => {
            console.log("data")
          console.log(data.data.user);
          const message = "success"
          setLocally(data);

        },
        onError: () => {
          alert("there was an error")
        },
        onSettled: () => {
          queryClient.invalidateQueries('create');
        }
      });
}







// import axios from "axios";
// // import { createContext, useEffect, useState } from "react";


//   // @ts-ignore
// export const AuthContext = createContext();

// export const AuthContexProvider = ({ children }:any) => {
  
//   const [currentUser, setCurrentUser] = useState(
//   // @ts-ignore
//     JSON.parse(localStorage.getItem("user")) || null
//   );
// const checkUser = async (data: LoginFormValues) => {
//   return await axios.post('http://localhost:8000/api/auth/login', data);
  
//   // console.log(response.data)
//   // return response.data;
// };

// const setLocally = (data: any) => {
//   localStorage.setItem('user', JSON.stringify(data.data.user));
//   localStorage.setItem('token', JSON.stringify(data.data.token));

//   alert("success")
//   };

// const useCheckUser = () => {
//   const queryClient = useQueryClient();

// return  useMutation(checkUser, {
//       onSuccess: data => {
//           console.log("data")
//         console.log(data.data.user);
//         const message = "success"
//         setLocally(data);

//       },
//       onError: () => {
//         alert("there was an error")
//       },
//       onSettled: () => {
//         queryClient.invalidateQueries('create');
//       }
//     });
// }





//   useEffect(() => {
//     // console.log(currentUser + " cu")
    
//     localStorage.setItem("user", JSON.stringify(currentUser));
//   }, [currentUser]);

//   return (
//   // @ts-ignore
//     <AuthContext.Provider value={{ currentUser, useCheckUser}}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
