import { useQuery } from 'react-query'
import axios from 'axios'


const getBookData = async () => {
    return await axios.get('http://localhost:8000/api/addbook')
  
  }
  
export const useBooksData = ()=>{
    return useQuery('superheroes',
    getBookData,
    {
      refetchOnWindowFocus: 'always',    // Always ignore the staleTime and always refetch on window focus

    })
}