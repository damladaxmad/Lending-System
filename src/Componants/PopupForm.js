import MyModal from "../Modal/MyModal";
import { Button, Divider, TextField } from "@material-ui/core";
import React, {useState} from "react"

class Lend {
  constructor(money, description, date){
    this.money = money;
    this.description = description;
    this.date = date;
  }
}


const PopupForm = (props) => {
  const [lend, setLend] = useState([{
    money: "",
    description: "",
    date: ""
  }])


const buttonHandler = () =>{
  props.hideModal()
  props.addLend(lend)

}
  return (
    <MyModal>
        <div style = {{display: "flex", margin: "auto",
    justifyContent: "center", alignItems: "center",
    flexDirection: "column"}}>

      <h3>Add New lend </h3>
      <form>
        <TextField
        fullWidth
          label="Enter Money"
          type="number"
          variant="outlined"
          style={{
            width: "450px",
            marginBottom: "10px",
            marginLeft: "25px"
          }}
          onChange={(e) =>  setLend((prevState) => {
            return { ...prevState, money: e.target.value };
          })}
        />
        <TextField
        fullWidth
          label="Enter Description"
          type="id"
          variant="outlined"
          style={{
            width: "450px",
            marginBottom: "10px",
            marginLeft: "25px"
          }}
          onChange={(e) =>  setLend((prevState) => {
            return { ...prevState, description: e.target.value };
          })}
        />
        <TextField
        fullWidth
          type="date"
          variant="outlined"
          style={{
            width: "450px",
            marginBottom: "10px",
            marginLeft: "25px"
          }}
          onChange={(e) =>  setLend((prevState) => {
            return { ...prevState, date: e.target.value };
          })}
        />
        <Button
          style={{
            marginBottom: "15px",
            marginTop: "10px",
            marginLeft: "165px",
            width: "180px",
            backgroundColor: "#041E42",
          }}
          variant="contained"
          color="primary"
          onClick = {buttonHandler}
        >
          Add Lend
        </Button>
      </form>
      </div>
    </MyModal>
  );
};

export default PopupForm;
