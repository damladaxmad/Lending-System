 
import { createSlice, configureStore } from '@reduxjs/toolkit';
import CustomerList from '../Componants/CustomerList';

class Customer {
    constructor(id, name, number, money, description, date){
        this.id = id;
        this.name = name;
        this.number = number;
        this.money = money;
        this.description = description;
        this.date = date;
    }
}

class Faahfahin {
    constructor(descNumber, descText, descAmount, descDate){
        this.descNumber = descNumber;
        this.descText = descText;
        this.descAmount = descAmount;
        this.descDate = descDate;
    }
}


let customers = [
  new Customer(
    "1",
    "Jaamac Jakab",
    "-7727377",
    "$899",
    [
     new Faahfahin("1", "dfgfds", "3", "3/3/3333"),
     new Faahfahin("2", "dfgfds", "3", "3/3/3333"),
     new Faahfahin("3", "dfgfds", "3", "3/3/3333"),
    ],
    "3/5/333",
  ),
  new Customer(
    "1",
    "Caasho Cali",
    "-7727377",
    "$899",
    [
     new Faahfahin("1", "dfgfds", "3", "3/3/3333"),
     new Faahfahin("2", "dfgfds", "3", "3/3/3333"),
     new Faahfahin("3", "dfgfds", "3", "3/3/3333"),
    ],
    "3/5/333",
  ),

]



const initialState = { customerInfo: customers };

const counterSlice = createSlice({
  name: 'central',
  initialState,
  reducers: {
    addNewCustomer(state, action) {
     console.log(action.payload)
      
    },
  }
});

const store = configureStore({
  reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;