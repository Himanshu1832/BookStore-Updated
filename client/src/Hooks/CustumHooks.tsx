// import { LoginFormValues } from './../Interface/Interface';
// import { AuthContexProvider } from './CustumHooks';
import { useQuery } from 'react-query'
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { AddBookFormValues, AddCartValues, LoginFormValues, RegisterFormValues } from "../Interface/Interface";
import { createContext, useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";


// type AuthContextProviderProps    = {
//     children: React.ReactNode;
//     };


  const createEmployee = async (data: RegisterFormValues) => {
    const { data: response } = await axios.post('http://localhost:8000/api/auth/signup', data);
    return response.data;
  };

  const AddBook = async (data: AddBookFormValues) => {
    
    //@ts-ignore
    const token = localStorage.getItem("token") || null
  const config = {
    headers: { Authorization: `Bearer ${token}` }
};

    const { data: response } = await axios.post('http://localhost:8000/api/addbook', data,config);
    return response.data;
  };


  const AddBookToCart = async (data: AddCartValues) => {
      
      //@ts-ignore
      const token = localStorage.getItem("token") || null
      console.log("Token")

      console.log(token)
    const config = {
      headers: { Authorization: `Bearer ${token}` }
     };
  console.log(data)
      const { data: response } = await axios.post('http://localhost:8000/api/cart', data , config );
      return response.data;
    };


  const setLocally = (data: any) => {
    localStorage.setItem('user', JSON.stringify(data.data.user));
    localStorage.setItem('token', JSON.stringify(data.data.token));

    alert("success")
    };

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation(createEmployee, {
    onSuccess: data => {
      console.log(data);
      const message = "success";
    },
    onError: () => {
      alert("there was an error")
    },
    onSettled: () => {
      queryClient.invalidateQueries('create');
    }
  });
};

export const useAddBook = () => {

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(AddBook, {
    onSuccess: data => {
      console.log(data);
      const message = "success";
      navigate("/mysell");

    },
    onError: () => {
      alert("there was an error in adding book data")
    },
    onSettled: () => {
      queryClient.invalidateQueries('create');
    }
  });
};



export const useAddToCart = () => {

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(AddBookToCart, {
    onSuccess: data => {
      console.log(data);
      const message = "success";
      navigate("/mycart")
    },
    onError: () => {
      alert("there was an error in adding book data  in cart")
    },
    onSettled: () => {
      queryClient.invalidateQueries('create');
    }
  });

};



const checkUser = async (data: LoginFormValues) => {
    return await axios.post('http://localhost:8000/api/auth/login', data);
    
    // console.log(response.data)
    // return response.data;
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







































// export const AuthContext = createContext({} as any);




// export const AuthContexProvider = ({ children }: AuthContextProviderProps) => {

//   const [currentUser, setCurrentUser] = useState<any>(

//     //@ts-ignore
//     JSON.parse(localStorage.getItem("user")) || null

//   );

//   const checkUser = async (data: LoginFormValues) => {
//     return await axios.post('http://localhost:8000/api/auth/login', data);
//     // console.log(response.data)
//     // return response.data;
//   };


//   const createEmployee = async (data: RegisterFormValues) => {
//     const { data: response } = await axios.post('http://localhost:8000/api/auth/signup', data);
//     return response.data;
//   };

//   useEffect(() => {
//     // console.log(currentUser + " cu")
    
//     localStorage.setItem("user", JSON.stringify(currentUser));
//   }, [currentUser]);





//   const useCreateUser = () => {
//     const queryClient = useQueryClient();
//     return useMutation(createEmployee, {
//       onSuccess: data => {
//         console.log(data);
//         const message = "success";
//       },
//       onError: () => {
//         alert("there was an error")
//       },
//       onSettled: () => {
//         queryClient.invalidateQueries('create');
//       }
//     });
//   };



//   const useCheckUser = () => {
//     const queryClient = useQueryClient();

//   return  useMutation(checkUser, {
//         onSuccess: data => {
//             console.log("data")
//             setCurrentUser(data.data.user)
//           console.log(data.data.user);
//           const message = "success"
//         //   setLocally(data);

//         },
//         onError: () => {
//           alert("there was an error")
//         },
//         onSettled: () => {
//           queryClient.invalidateQueries('create');
//         }
//       });
// }


//   return (

    
//     <AuthContext.Provider value={{ currentUser, useCheckUser,useCreateUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }


