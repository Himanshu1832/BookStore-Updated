import { useForm,Controller } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { useQueryClient } from 'react-query';
import { AddBookFormValues} from '../../Interface/Interface';
import { useAddBook } from '../../Hooks/CustumHooks/useAddBook';
// import { AuthContext } from "../../Hooks/CustumHooks";
import { useContext } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";


const AddBook = () => {
const navigate = useNavigate();

  const queryClient = useQueryClient();
  const form = useForm<AddBookFormValues>()
  const { register, control, handleSubmit, formState  } = form;
  const { errors } = formState;

  // const { useCreateUser } = useContext(AuthContext);
  //@ts-ignore
  const user:any = JSON.parse(localStorage.getItem("user")) || null
  console.log(user)
  const { mutate, isLoading } = useAddBook();

  const onSubmit = (data: AddBookFormValues) => {
    const bookData = {
      ...data,
      uid : user.id,
      date : moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),

    };
    console.log(bookData);

    mutate(bookData);
  };


  const years = [
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
    { value: "2026", label: "2026" },
    { value: "2027", label: "2027" },
    { value: "2028", label: "2028" },
    { value: "2029", label: "2029" }
  ];

  return (
    <div>

      <h1>Form</h1>
      


      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="title">Title</label>
        <input type="text" id='title' {...register("title", {
          required: {
            value: true,
            message: "title is req",
          },

        })} />
        <p>{errors.title?.message}</p>

        <label htmlFor="desc">Description</label>
        <input type="text" id='description' {...register("desc", {
          required: {
            value: true,
            message: "description is req",
          },

        })} />
        <p>{errors.desc?.message}</p>



        <label htmlFor="img">Image</label>
        {/* <input type="file" id='img' {...register("img", {
          required: {
            value: true,
            message: "img is req",
          },

        })} /> */}
        <input type="text" id='img' {...register("img", {
          required: {
            value: true,
            message: "img is req",
          },

        })} />

        {/* <input type="date" id='date' {...register("date", {
          required: {
            value: true,
            message: "date is req",
          },

        })} /> */}


        <label htmlFor="mrp">MRP</label>
        <input type="number" id='mrp' {...register("mrp", {
          required: {
            value: true,
            message: "mrp is req",
          },

        })} />
        <p>{errors.mrp?.message}</p>


        <label htmlFor="price">Price</label>
        <input type="number" id='price' {...register("price", {
          required: {
            value: true,
            message: "price is req",
          },

        })} />
        <p>{errors.price?.message}</p>

        <label htmlFor="college_name">College Name</label>
        <input type="text" id='college_name' {...register("college_name", {
          required: {
            value: true,
            message: "college_name is req",
          },

        })} />
        <p>{errors.college_name?.message}</p>




        <label htmlFor="course">Course</label>
        <input type="text" id='course' {...register("course", {
          required: {
            value: true,
            message: "course is req",
          },

        })} />
        <p>{errors.course?.message}</p>

        <label htmlFor="branch">Branch</label>
        <input type="text" id='branch' {...register("branch", {
          required: {
            value: true,
            message: "branch is req",
          },

        })} />

        <p>{errors.branch?.message}</p>





        <label htmlFor="sem">Semester</label>
        <input type="text" id='sem' {...register("sem", {
          required: {
            value: true,
            message: "sem is req",
          },

        })} />

        <p>{errors.sem?.message}</p>



        <label htmlFor="edition">Edition</label>
        <input type="date" id='edition' {...register("edition", {
          required: {
            value: true,
            message: "edition is req",
          },

        })} />

        <button >Submit</button>

      </form>
      <DevTool control={control} />
    </div>
  )

}

export default AddBook








