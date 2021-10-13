import React, { useContext, useState, useEffect } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import MyContext from "../context-api/my-context";
import {
  Portal,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemIcon,
} from "@material-ui/core";
import { useSelector, useDispatch, } from "react-redux";
import { PersonalVideo } from "@material-ui/icons";

const Details = (props) => {
  const [show, setShow] = useState(false);
  const [lends, setLends] = useState([])

  //saving prop values
  const avatarIcon = props.value.name;
  const name = props.value.name;
  const number = props.value.number;
  const money = props.value.money;

  useEffect(()=>{
    const fetchCustomers = async () =>{
      const response = await fetch('https://lending-b64d6-default-rtdb.firebaseio.com/customers.json')
    const responseData = await response.json()
    const loadedLend = []

    for (const key in responseData){
      if (responseData[key].id === props.value.id){
      for (const data in responseData[key].lend){
        loadedLend.push({
          lendMoney: responseData[key].lend[data].money,
          lendDesc: responseData[key].lend[data].description,
          lendDate: responseData[key].lend[data].date
        })
      }
    }
    
    }
    setLends(loadedLend)
    }
   
    fetchCustomers()
  }, [props.value.id, lends])

  return (
    <div
      style={{
        height: "80%",
        width: "600px",
        marginLeft: "30px",
      }}
    >
      <h3 style={{ marginLeft: "10px", color: "#041E42" }}>
        {" "}
        Customer Details:
      </h3>
      <div
        style={{
          boxShadow: "0 1px 8px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div>
        <List>
            <ListItem>
              <Avatar
                style={{
                  backgroundColor: "#041E42",
                  marginRight: "24px",
                  width: "50px",
                  height: "50px",
                  fontSize: "22px",
                }}
              >
                {avatarIcon === "" ? "U" : avatarIcon[0].toUpperCase()}
              </Avatar>
              <ListItemText
                primary={name === "" ? "Unknown" : name}
                secondary={number === "" ? "Here Shows Number" : number}
                style={{ fontWeight: "bold" }}
              />
              <ListItemIcon>
                {" "}
                <Amount amount={money === "" ? "000" : money} />{" "}
              </ListItemIcon>
            </ListItem>
          </List>
        </div>
        <Divider
          style={{ backgroundColor: "lightGray", width: "90%", margin: "auto" }}
        />

        <p style={{ marginLeft: "10px" }}> Description:</p>
        <div
          style={{
            height: "250px",
            margin: "auto",
            width: "590px",
            overflowY: "scroll",
            marginBottom: "10px",
            marginTop: "10px",
            backgroundColor: "white", //"#F9F6EE"
            //   boxShadow: "0 1px 8px rgba(0, 0, 0, 0.5)"
          }}
        >
       {lends && <List
            style={{ marginLeft: "0px" }}
            onClick={(e) => console.log("list pressed")}
          >
            {lends.map((lend, index) => (
              <ListItem key = {Math.random()}>
                <Avatar
                  style={{ backgroundColor: "#041E42", marginRight: "24px" }}
                >
                  {index + 1}
                </Avatar>
                <ListItemText
                  primary={
                    lend.lendDesc === ""
                      ? "Item being borrowed"
                      : lend.lendDesc
                  }
                  secondary={
                    lend.lendDate === "" ? "D/MM/YYYY" : lend.lendDate
                  }
                />
                <ListItemIcon>
                  {" "}
                  <Amount amount={lend.lendMoney === "" ? "000" : lend.lendMoney} />{" "}
                </ListItemIcon>
                <ListItemIcon style={{ cursor: "pointer" }}>
                  {" "}
                  <DeleteIcon
                    style={{ color: "#041E42", marginLeft: "20px" }}
                  />
                  ;{" "}
                </ListItemIcon>
              </ListItem>
            ))}
          </List>}
        </div>

        <Button
          style={{
            marginBottom: "20px",
            marginTop: "10px",
            marginLeft: "200px",
            width: "180px",
            backgroundColor: "#041E42",
          }}
          variant="contained"
          color="primary"
          onClick={() => {
            setShow(true);
            props.showModal();
          }}
        >
          Edit Customer
        </Button>
      </div>
    </div>
  );
};
const Amount = (props) => {
  return (
    <div
      style={{
        width: "50px",
        height: "25px",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        padding: "8px",
        backgroundColor: "#c04000",
        borderRadius: "12px",
        color: "white",
      }}
    >
      {" "}
      ${props.amount}
    </div>
  );
};
const DeleteIcons = () => {
  <DeleteIcon style={{ color: "#041E42", marginLeft: "50px" }} />;
};

export default Details;
