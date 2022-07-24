import React from 'react';
import SmartForm from '../../components/SmartForm';

function Home(){
    /** List Of Validation **/
    /** matchRegexp ,isEmail ,isEmpty, required, trim,isNumber,isFloat,isPositive,minNumber,maxNumber **/ 
    const formFileds = [
        {type:"text",index:"username",label:"User Name",validator:'required'},
        {type:"email",index:"useremail",label:"Email",validator:'required'},
        {type:"number",index:"userregno",label:"Register No",validator:'required'},
        {type:"password",index:"userpassword",label:"Password",validator:'required'},
        {type:"submit",index:"submit",label:"Submit"}
    ]
    return(
        <>
            <SmartForm  formElements={formFileds}   />
        </>
    )
}

export default Home;