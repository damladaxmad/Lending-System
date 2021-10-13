
import { Button, Divider, TextField } from "@material-ui/core";
import React, {useState} from "react"



const SignupAndLogin = (props) => {
    const [isLogin, setIsLogin] = useState(true);

    const switchHandler = () => {
      setIsLogin((prevState) => !prevState);
    };

    const submitHandler = () =>{

        props.onSubmit()
    }

  return (
   <React.Fragment>
        <div style = {{display: "flex", margin: "auto",
    justifyContent: "center", alignItems: "center",
    flexDirection: "column", width: "40%", padding: "15px",
    marginTop: "120px",
    boxShadow: "0 1px 8px rgba(0, 0, 0, 0.5)"}}>

      <h3 style = {{marginTop: "5px"}}>{isLogin ? "Log In" : "Sign Up"}</h3>
      <form>
      {isLogin ? null : <TextField
        fullWidth
          label="Enter Name"
          type="text"
          variant="outlined"
          style={{
            width: "450px",
            marginBottom: "20px",
            marginLeft: "25px"
          }}
        //   onChange={(e) =>  setLend((prevState) => {
        //     return { ...prevState, money: e.target.value };
        //   })}
        /> }
        <TextField
        fullWidth
          label="Enter Email"
          type="email"
          variant="outlined"
          style={{
            width: "450px",
            marginBottom: "20px",
            marginLeft: "25px"
          }}
        //   onChange={(e) =>  setLend((prevState) => {
        //     return { ...prevState, money: e.target.value };
        //   })}
        />
        <TextField
        fullWidth
          label="Enter Password"
          type="password"
          variant="outlined"
          style={{
            width: "450px",
            marginBottom: "10px",
            marginLeft: "25px"
          }}
        //   onChange={(e) =>  setLend((prevState) => {
        //     return { ...prevState, description: e.target.value };
        //   })}
        />
        {/* <TextField
        fullWidth
          type="date"
          variant="outlined"
          style={{
            width: "450px",
            marginBottom: "10px",
            marginLeft: "25px"
          }}
        //   onChange={(e) =>  setLend((prevState) => {
        //     return { ...prevState, date: e.target.value };
        //   })}
        /> */}
        
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
          onClick =  {submitHandler}
        >
          {isLogin ? "Log In" : "Sign Up"}
        </Button>
        <p style = {{margin: "0", marginLeft: "178px", cursor: "pointer",
     color: "#c04000"}} onClick = {switchHandler}> {isLogin ? "Create A New Acount" : "Already Have an Account?"} </p>
      </form>
      </div>
      </React.Fragment>
  );
};

export default SignupAndLogin;
