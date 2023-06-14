import { useForm, Controller } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { useQueryClient } from 'react-query';
import { AddBookFormValues } from '../../Interface/Interface';
import { useAddBook } from '../../Hooks/CustumHooks/PostHooks/useAddBook';
// import { AuthContext } from "../../Hooks/CustumHooks";
import { useContext, useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { editions, colleges, sem, branchs } from '../../Context/authContext';
const AddBook = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const form = useForm<AddBookFormValues>()
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  // const { useCreateUser } = useContext(AuthContext);
  //@ts-ignore
  const user: any = JSON.parse(localStorage.getItem("user")) || null
  // console.log(user)
  const { mutate, isLoading } = useAddBook();

  const onSubmit = (data: AddBookFormValues) => {
    const formData = new FormData();
    formData.append('image', data.img[0]);
    console.log(formData)
    try {
      axios.post('http://localhost:8000/api/addbook/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((e) => {
        const bookData = {
          ...data,
          uid: user.id,
          date: moment(Date.now()).format("YYYY-MM-DD"),
          img: e.data
        };
        console.log(bookData);
        if (bookData.img != undefined) {
          mutate(bookData);
        }
      })

    } catch (error) {
      console.error(error);
    }

  };

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
        <input
          type="file"
          {...register('img', { required: true })}
        />
        {errors.img && <span>This field is required</span>}

      

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
        <select id="college_name" {...register("college_name")}>
          {colleges.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
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
        <select id="branch" {...register("branch")}>
          {branchs.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>

        <p>{errors.branch?.message}</p>




        <label htmlFor="sem">Semester</label>
        <select id="sem" {...register("sem")}>
          {sem.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>

        <p>{errors.sem?.message}</p>



        <label htmlFor="edition">Edition</label>
        <select id="edition" {...register("edition")}>
          {editions.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>

        <button >Submit</button>

      </form>
      <DevTool control={control} />
    </div>
  )

}

export default AddBook








