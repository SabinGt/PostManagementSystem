import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import axios from 'axios';
import * as Yup from 'yup'
import {useNavigate} from "react-router-dom";

function PostForm() {
    let navigate = useNavigate();
    const initialValues = {
        title: "",
        postText:"",
        username:"",
    };
    const validationSchema = Yup.object().shape({
        title:Yup.string().required("You must provide title to post"),
        postText:Yup.string().required(),
        username:Yup.string().min(3).max(50).required()
    })

    const onSubmit = (data) => {
        axios.post("http://localhost:4000/posts", data).then((response)=>{
            navigate('/');
        })
    }
    
  return (
    <div className='createPostPage'>
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
            <Form className="formContainer">
                <label>Title: </label>
                <ErrorMessage name="title" component="span"></ErrorMessage>
                <Field 
                autocomplete = "off"
                id="inputCreatePost"
                 name="title" 
                 placeholder="(Enter title)"
                 />
                 <label>Post: </label>
                 <ErrorMessage name="postText" component="span"></ErrorMessage>
                <Field 
                autocomplete = "off"
                id="inputCreatePost"
                 name="postText" 
                 placeholder="(Enter post)"
                 />
                 <label>Username: </label>
                 <ErrorMessage name="username" component="span"></ErrorMessage>
                <Field 
                autocomplete = "off"
                id="inputCreatePost"
                 name="username" 
                 placeholder="(Enter username)"
                 />
                 <button type = "submit">Create Post</button>
            </Form>
        </Formik>
    </div>
  )
}

export default PostForm