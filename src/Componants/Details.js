import React, { useContext, useState, useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
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
import db from "../store/firebase.confing"
// import { doc, getDoc } from "firebase/firestore";
import {onSnapshot, collection, setDoc, doc} from "firebase/firestore"

const Details = (props) => {
  const [data, setData] = useState({
    name: "Xasno Ali",
    number: "061661677",
    total: "6767"
  })
  if (props.value !== ""){
    setData(props.value)
    console.log(props.value)
  }
  // useEffect(()=>{
  //   onSnapshot(collection(db, "customers"), (snapshot)=>{
  //     const data = snapshot.docs.map(doc => doc.data())
  //     data.map(dictum => {
  //       if (dictum.name === name){
  //         console.log(dictum)
  //         setData(dictum)
  //       }
  //     }
  //       )
  //     // setData(data)
  //   })
  // }, [name])
  const [show, setShow] = useState(false);
  const [lends, setLends] = useState([])

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
                {data.name[0].toUpperCase()}
              </Avatar>
              <ListItemText
                primary={data.name}
                secondary={data.number}
                style={{ fontWeight: "bold" }}
              />
              <ListItemIcon>
                {" "}
                <Amount amount={data.total} />{" "}
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
       {/* {lends && <List
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
          </List>} */}
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
