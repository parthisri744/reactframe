import InputValidate from "./SmartFormValidation"
import { useState } from "react";


export function InputButton(){
    return(
        <>
            <button className="button is-primary is-outlined">Outlined</button>
        </>
    )
}

export function InputCheckBox(){
    return(
        <>
            <h1>Welcome CheckBox</h1>
        </>
    )

}

export function InputColor(){
    return(
        <>
        
        </>
    )

}

export function InputDate(){
    return(
        <>
        
        </>
    )

}

export function InputDateTimeLocal(){
    return(
        <>
        
        </>
    )

}

export function InputEmail(){
    return(
        <>
        
        </>
    )

}

export function InputFile(){
    return(
        <>
        
        </>
    )

}

export function InputImage(){
    return(
        <>
        
        </>
    )

}

export function InputMonth(){
    return(
        <>
        
        </>
    )

}

export function InputNumber(){
    return(
        <>
        
        </>
    )

}


export function InputPassword(){
    return(
        <>
        
        </>
    )

}

export function InputRadioButton(){
    return(
        <>
        
        </>
    )

}

export function InputRange(){
    return(
        <>
        
        </>
    )

}
export function InputReset(){
    return(
        <>
        
        </>
    )

}

export function InputSearch(){
    return(
        <>
        
        </>
    )

}

export function InputSubmit(){
    return(
        <>
            <button className="button is-primary is-outlined">Outlined</button>
        </>
    )

}

export function InputTel(){
    return(
        <>
        
        </>
    )

}

export function InputText(props){
    const {label,name,validate } = props;
    const [errorclass,setErrorClass] = useState("input is-info");

   const  validateForm = event =>{
    Object.entries(validate).forEach(([key,value])=>{
        event.target.setAttribute(key,value)
    })
    const inpObj = document.getElementById(name);
    if (!inpObj.checkValidity()) {
        setErrorClass("input is-danger");
        document.getElementById(name+"_error").innerHTML = inpObj.validationMessage;
      } else {
        document.getElementById(name+"_error").innerHTML = "";
        setErrorClass("input is-success");
      } 
    }
   const onTrigger = event => {
      props.parentacallback(event);
    }
    return(
        <>
        <div className="field control">
            <label className="">{label}</label>
            <div className="control">
                  <input className={errorclass}   type="number" autoComplete="off" id={name}  name={name} onClick={validateForm} onChange={onTrigger} placeholder="Text input" />
                  <p id={name+"_error"} className="help is-danger"></p>
            </div>
        </div>
        </>
    )
}

export function InputTime(){
    return(
        <>
        
        </>
    )
}

export function InputUrl(){
    return(
        <>
        
        </>
    )

}

export function Inputweek(){
    return(
        <>
        
        </>
    )

}

export function Form(){
return(
    <>
    <form>
        
    </form>
    </>
)

}

// function validateForm(name){
//     console.log("Name : ",name);
//     // 
// }