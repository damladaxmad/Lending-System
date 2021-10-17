import { NextWeek } from '@material-ui/icons';
import React, {useState} from 'react'
import CustomerList from '../Componants/CustomerList';
import Details from '../Componants/Details';
import PopupForm from '../Componants/PopupForm';
const People = (props) =>{

    let details = {}

    const [newLend, setNewLend] = useState([])
    const [show, setShow] = useState(false)

    const showModal = () =>{
        setShow(true)
    }
    const hideModal = () =>{
        setShow(false)
    }
    const handleDetails = (details) =>{
        console.log("details")
        details = details
        console.log(details)
    }

    const addLend = (newLend) =>{
        setNewLend(newLend)
        props.addNewlend(newLend)
    }

    return <div style = {{display: "flex", flexDirection: "row",
    justifyContent: "space-between"}}>
        
     <Details newLend = {newLend} value = {details} showModal = {showModal}/>
        {show && <PopupForm addLend= {addLend} hideModal = {hideModal}/>}
        
     <CustomerList giveDetails = {handleDetails}/>
    </div>
}

export default People;