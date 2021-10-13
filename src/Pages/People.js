import { NextWeek } from '@material-ui/icons';
import React, {useState} from 'react'
import CustomerList from '../Componants/CustomerList';
import Details from '../Componants/Details';
import PopupForm from '../Componants/PopupForm';
const People = (props) =>{

    const [details, setDetails] = useState({
        name: "",
        number: "",
        money: "",
        description: [],
        date: ""
    })

    const [newLend, setNewLend] = useState([])
    const [show, setShow] = useState(false)

    const showModal = () =>{
        setShow(true)
    }
    const hideModal = () =>{
        setShow(false)
    }
    const handleDetails = (details) =>{
        setDetails({
            name: details.name,
            number: details.number,
            money: details.money,
            description: details.lend,
            id: details.id
        })
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