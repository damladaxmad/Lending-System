import React, { useState } from "react"
import {counterActions} from "../store/DataStore"
import {useSelector, useDispatch} from "react-redux"
import { createContext } from "react";
import {
    Button,
    Divider,
    TextField,
  } from "@material-ui/core";

const Lending = (props) =>{

  const [formState, setState] = useState([{
    id: "",
    name: "",
    money: "",
    description: "", 
    date: "",
    number: "", 
}])

const submitHandler = () =>{
    console.log("submitted")
    props.onSubmit(formState)

}

    return <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div style = {{width: "80%", display: "block", gap: "10px",
    backgroundColor: "white", margin: "auto", boxShadow: "0 1px 8px rgba(0, 0, 0, 0.5)",
    paddingLeft: "55px", marginTop: "70px" }}>
          <h2> Lending Form</h2>
            <form onSubmit = {submitHandler}>
                <TextField onChange={(e) =>  setState((prevState) => {
      return { ...prevState, id: e.target.value };
    })}
                label = "Enter ID" type = "id" variant = "outlined" style = {{
                    width: "45%", marginRight: "20px", marginTop: "20px"
                }}/>
                <TextField onChange={(e) => setState((prevState) => {
      return { ...prevState, name: e.target.value };
    })}
                label = "Enter Name" variant = "outlined" style = {{
                    width: "45%", marginTop: "20px"
                }}/>
                <TextField onChange={(e) =>  setState((prevState) => {
      return { ...prevState, money: e.target.value };
    })}
                label = "Enter Money" type = "number" variant = "outlined" style = {{
                    width: "45%", marginRight: "20px", marginTop: "20px"
                }}/>
                <TextField onChange={(e) =>  setState((prevState) => {
      return { ...prevState, description: e.target.value };
    })}
                label = "Enter Description" variant = "outlined" style = {{
                    width: "45%", marginTop: "20px"
                }}/>
                <TextField  onChange={(e) =>  setState((prevState) => {
      return { ...prevState, date: e.target.value };
    })}
                type = "date" variant = "outlined" style = {{
                    width: "45%", marginRight: "20px", marginTop: "20px"
                }}/>
                <TextField onChange={(e) =>  setState((prevState) => {
      return { ...prevState, number: e.target.value };
    })}
                label = "Enter Number" variant = "outlined" style = {{
                    width: "45%", marginTop: "20px"
                }}/> 
                <Button onClick = {submitHandler} size = "large"style = {{
                    backgroundColor: "#041E42", marginTop: "30px", marginBottom: "30px", marginLeft: "286px"
                }} variant = "contained" color = "primary" >Register  Lending</Button>
               
            </form>

    </div>
    </div>
}

export default Lending;