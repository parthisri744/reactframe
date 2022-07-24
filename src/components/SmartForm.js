import React from "react";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

  
class SmartForm extends React.Component {
    formData= [];
    fvalue = {};
    constructor(props){
        super(props)
        this.formData = props.formElements;
        this.generateState();
        this.state = {formvalue:this.fvalue,submitted: false}
        this.generateState();
    }

    generateState(){
        this.formData.map((value,key)=>{
           this.fvalue[value.index] = ""
        })
    }

    handleChange = (event) => {
        const { formvalue } = this.state;
        formvalue[event.target.name] = event.target.value;
        this.setState({ formvalue });
    }

    handleSubmit = () => {
        console.log("Form Submitted");
        this.setState({ submitted: true });
    }

    handleErrors = () => {
        console.log("Error Handler");
    }

    generateForm(){
        return this.props.formElements.map((value,key)=>{
            return this.generateFormElement(value,key);
        })
    }

    generateFormElement(value,key){
        switch(value.type){
            case "text" : return this.InputTextField(value,key);
            case "email" : return this.InputEmailField(value,key);
            case "number" :return this.InputNumberField(value,key);
            case "password" :return this.InputPasswordField(value,key);
            case "submit" : return this.InputSubmitField(value,key);
            default : console.log("Invalid Input");
        }
    }

    InputTextField(value,key){
        return(
                <Grid  item xs={4} sm={4} md={3} key={key}>
                     <TextValidator margin="normal"  fullWidth id={value.index} value={this.state.formvalue[value.index]}  label={"Enter "+value.label} 
                      name={value.index} autoComplete="off" validators={[value.validator]} onChange={this.handleChange} errorMessages={[`Please Enter  ${value.label}`]}/>
                </Grid>
        )
    }

    InputEmailField(value,key){
        return(
                <Grid  item xs={4} sm={4} md={3} key={key}>
                     <TextValidator margin="normal" type="email"  fullWidth id={value.index} value={this.state.formvalue[value.index]}  label={"Enter "+value.label} 
                      name={value.index} autoComplete="off" validators={[value.validator,"isEmail"]} onChange={this.handleChange} errorMessages={[`Please Enter  ${value.label}`,`Please Enter Valid ${value.label}`]}/>
                </Grid>
        )
    }

    InputNumberField(value,key){
        return(
                <Grid  item xs={4} sm={4} md={3} key={key}>
                     <TextValidator margin="normal" type="number" fullWidth id={value.index} value={this.state.formvalue[value.index]}  label={"Enter "+value.label} 
                      name={value.index} autoComplete="off" validators={[value.validator,"isNumber"]} onChange={this.handleChange} errorMessages={[`Please Enter  ${value.label}`,`Please Enter Valid ${value.label}`]}/>
                </Grid>
        )
    }

    InputPasswordField(value,key){
        return(
                <Grid  item xs={4} sm={4} md={3} key={key}>
                     <TextValidator margin="normal" type="password" fullWidth id={value.index} value={this.state.formvalue[value.index]}  label={"Enter "+value.label} 
                      name={value.index} autoComplete="off" validators={[value.validator]} onChange={this.handleChange} errorMessages={[`Please Enter  ${value.label}`]}/>
                </Grid>
        )
    }

    InputSubmitField(value,key){
        return(
                <Grid  item xs={12} sm={12} md={12} key={key}>
                     <Tooltip title={value.label} arrow>
                          <Button variant="contained" type="submit">{value.label}</Button>
                    </Tooltip>
                </Grid>
        )
    }
    /** List Of Validation **/
    /** matchRegexp ,isEmail ,isEmpty, required, trim,isNumber,isFloat,isPositive,minNumber,maxNumber **/ 
    render(){
        return(
            <>
             <ValidatorForm ref="form" onSubmit={this.handleSubmit} onError={this.handleErrors} >
                <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {this.generateForm()}
                </Grid>
             </ValidatorForm>
            </>
        )

    }
}

export default SmartForm;