import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Lending from './Pages/Lending';
import People from './Pages/People';
import Dashboard from './Pages/Dashboard';
import Layout from './Componants/Layout';
import './App.css';
import MyContext from './context-api/my-context';
import SignupAndLogin from './Componants/SignupAndLogin/SignupAndLogin';


function App() {
  const [customers, setCustomers] = useState([])
  const [login, setLogin] = useState(false)

  // xalka berri: kaliya dheh ii sii qofka aad rabto details kiisa id-giisa
  // kedib adiga iskaa uga doono database ka
 

  useEffect(()=>{
    const fetchCustomers = async () =>{
      const response = await fetch('https://lending-b64d6-default-rtdb.firebaseio.com/customers.json')
    const responseData = await response.json()
    const loadedCustomers = []
    for (const key in responseData){
      loadedCustomers.push({
        id: key,
        name: responseData[key].name,
        number: responseData[key].number,
        money: responseData[key].total,
        lend: responseData[key].lend
      })
    }
    setCustomers(loadedCustomers)
    }

    fetchCustomers()
  }, [])

  const submitHandler = () =>{
    setLogin(true)
  }

  // popup form handler
  const newLendHandler = (newLend) =>{
   
  }

  return (
    <MyContext.Provider
    value={{customers: customers}}>
    <div className="App">
      <Router>
    {login ? <Layout>
      <Switch>
        <Route exact path="/">
          <People addNewlend = {newLendHandler}/>
        </Route>
        <Route path="/lending">
          <Lending onSubmit = {submitHandler}/>
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
      </Layout> : <SignupAndLogin onSubmit = {submitHandler}/>}
    </Router>
    </div>
    </MyContext.Provider>
  );
}

export default App;
