import React, {useEffect, useState} from "react";
import db from "../store/firebase.confing"
import {onSnapshot, collection, setDoc, doc} from "firebase/firestore"
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from '@material-ui/icons'
import {useSelector, useDispatch} from "react-redux"
import MyContext from "../context-api/my-context";

import {
  List,
  Button,
  ListItem,
  ListItemText,
  Avatar,
  ListItemIcon,
} from "@material-ui/core";

const CustomerList = (props) => {
  const [data, setData] = useState([{
    name: "Xasno Ali",
    number: "061661677",
    total: "6767"
  }])
  useEffect(()=>{
    //snapshot method takes two paras, a callback function which returns 
    // snapshot object and one which gets the data collection from your db
    onSnapshot(collection(db, "customers"), (snapshot)=>{
      const data = snapshot.docs.map(doc => doc.data())
      // (data.map(dat => dat.name))
      // setAge(data.map(dat => dat.age))
   
      setData(data)
    })

    setDoc(doc(db, "customers", "last"), {
      name: "Jakab Jukub",
      number: 5555555,
      total: 787
    });
  })

  const addCustomer = () => {
    setDoc(doc(db, "customers", "added"), {
      name: "Qalbi Xaaran",
      number: 444455,
      total: 444
    });
   
  }

  return (
    <div>
      <div style = {{display: "flex", justifyContent: "space-around",}}>
      <h3 style={{ marginLeft: "0px", color: "#041E42", }}> List Of Customers:</h3>
      <Button style = {{height: "30px", width: "50px", marginTop: "15px",
    backgroundColor: "#041E42", color: "white"}}variant = "contained"
    onClick = {addCustomer}>Add</Button>
      </div>
      <div
        style={{
          height: "470px",
          width: "350px",
          overflowY: "scroll",
          marginBottom: "10px",
          marginTop: "0px",
          backgroundColor: "white", //"#F9F6EE"
          boxShadow: "0 1px 8px rgba(0, 0, 0, 0.5)"
        }}
      >
        <List style = {{cursor: "pointer"}} >
          {data.map((cst) => (
            <ListItem key = {cst.id} onClick = {() => props.giveDetails(cst)}>
              <Avatar
                style={{ backgroundColor: "#041E42", marginRight: "12px" }}
                
              >
              {cst.name[0].toUpperCase()}
              </Avatar>
              <ListItemText primary = {cst.name} secondary = {cst.number}/>
              <ListItemIcon style = {{}}> <Amount amount = {cst.total}/> </ListItemIcon>
            </ListItem>
           ))} 
        </List>
      </div>
    </div>
  );
};

const Amount = (props) =>{
    return <div style = {{
        width: "50px",
        height: "25px",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        padding: "8px", backgroundColor: "#c04000",
        borderRadius: "12px",
        color: "white"
    }}> ${props.amount}</div>
}
export default CustomerList;
