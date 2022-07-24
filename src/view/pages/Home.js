import * as React from 'react';
import { useState } from "react";
import {InputText,InputSubmit } from '../../components/SmartForm';

function Home(){

    const [formData,SetFormData] = useState({});

   const handlecallback = event => {
    const name = event.target.name;
    const value = event.target.value;
    SetFormData(values => ({...values, [name]: value}));
    console.log("Form Data ",formData);
    }

    return(
        <>
            <InputText label="Enter User Name"  name="username" validate={{required:true,min:12}} parentacallback={handlecallback} />
            <InputText label="Enter User Email"  name="useremail" validate={{required:true,min:12}} parentacallback={handlecallback}/>
            <InputText label="Enter User Password"  name="userpassword" validate={{required:true,min:12}} parentacallback={handlecallback}/>
            <InputText label="Enter User Register"  name="userreg" validate={{min:12}} parentacallback={handlecallback}/>      
        </>
    )
}
export default Home;
