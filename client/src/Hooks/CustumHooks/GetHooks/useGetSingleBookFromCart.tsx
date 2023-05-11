import { useQuery } from 'react-query'
import axios from 'axios'


const getSingleBookDataFromCart = async (bookId:number) => {
    return await axios.get(`http://localhost:8000/api/cart/${bookId}`)
  
  }
  
export const useGetSingleBookFromCart = (bookId:number)=>{
    return useQuery('BooksFromCart',
    ()=>getSingleBookDataFromCart(bookId),
    {
      refetchOnWindowFocus: 'always',    // Always ignore the staleTime and always refetch on window focus
    })
}