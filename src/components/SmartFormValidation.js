
export default  function InputValidate(props) {
    const fieldid = props;
    console.log("Filedid : ",fieldid);
    const inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
      document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
      document.getElementById("demo").innerHTML = "Input OK";
    } 
  }
