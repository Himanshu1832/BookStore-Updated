import { useQuery } from 'react-query'
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { AddBookFormValues, AddCartValues, LoginFormValues, RegisterFormValues } from "../../Interface/Interface";
import { createContext, useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";




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