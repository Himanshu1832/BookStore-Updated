import { useQuery } from 'react-query'
import axios from 'axios'


const getSingleBookData  = async (bookId:any) => {
    console.log(bookId)
    return await axios.get(`http://localhost:8000/api/addbook/${bookId}`)
  
  }
  
export const useGetSingleBookData = (bookId:number)=>{
    return useQuery(['BooksFromBooks',bookId],
    ()=>getSingleBookData(bookId),
    {
      refetchOnWindowFocus: 'always',    // Always ignore the staleTime and always refetch on window focus

    })
}