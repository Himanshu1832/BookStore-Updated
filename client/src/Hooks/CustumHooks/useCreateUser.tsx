import { useQuery } from 'react-query'
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { AddBookFormValues, AddCartValues, LoginFormValues, RegisterFormValues } from "../../Interface/Interface";
import { createContext, useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const createEmployee = async (data: RegisterFormValues) => {
    const { data: response } = await axios.post('http://localhost:8000/api/auth/signup', data);
    return response.data;
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