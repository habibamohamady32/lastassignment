import { createStore } from '@reduxjs/toolkit'
import favouriteReducer from "./reducer";


const store=createStore(favouriteReducer)

export default store;