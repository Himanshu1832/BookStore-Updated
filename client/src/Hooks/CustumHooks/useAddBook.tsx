import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { AddBookFormValues} from "../../Interface/Interface";
import { useNavigate } from "react-router-dom";


const AddBook = async (data: AddBookFormValues) => {
    
    //@ts-ignore
    const token = localStorage.getItem("token") || null
  const config = {
    headers: { Authorization: `Bearer ${token}` }
};

    const { data: response } = await axios.post('http://localhost:8000/api/addbook', data,config);
    return response.data;
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
  