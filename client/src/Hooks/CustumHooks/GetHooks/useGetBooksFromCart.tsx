import { useQuery } from 'react-query'
import axios from 'axios'


const getCartData = async () => {
    return await axios.get('http://localhost:8000/api/cart')
  
  }
  
export const useGetBooksFromCart = ()=>{
    return useQuery('BooksFromCart',
    getCartData,
    {
      refetchOnWindowFocus: 'always',    // Always ignore the staleTime and always refetch on window focus

    })
}