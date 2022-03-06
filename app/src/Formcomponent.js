import React, { useState } from "react";
import './App.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from "./actions/users";
import {
  useNavigate,
} from "react-router-dom";


const Formcomponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
   city:""
  });
    let navigate = useNavigate();

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

    const sumbitForm = async() =>{
        console.log(formData,"I am sumbiting")
         await axios.post('http://localhost:5000/user', formData)
      .then(res => console.log(res.data));
   
    }

  const { firstName, lastName, email,city } = formData;
  const dispatch = useDispatch();

    const clear = () => {
 
    setFormData({   firstName: "",
    lastName: "",
    email: "",
   city:"" });
  };

    const handleSubmit = async (e) => {
    e.preventDefault();

  
      dispatch(createUser(formData));
      clear();
   
  };

  return (
    <>
 <h2 onClick={() =>{   navigate("/userList");}}>
   Add Data
 </h2>
    <form onSubmit={handleSubmit}>
      <input
        value={firstName}
        onChange={e => updateFormData(e)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
      <input
        value={lastName}
        onChange={e => updateFormData(e)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      />
      <input
        value={email}
        onChange={e => updateFormData(e)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
           <input
        value={city}
        onChange={e => updateFormData(e)}
        placeholder="City"
        type="text"
        name="city"
        required
      />
  

      <button onClick={sumbitForm} type="submit">Submit</button>
    </form>
    </>
  );
};

export default Formcomponent;
