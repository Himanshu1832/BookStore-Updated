import { useQuery } from 'react-query'
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { AddBookFormValues, AddCartValues, LoginFormValues, RegisterFormValues } from "../../../Interface/Interface";
import { createContext, useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";


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