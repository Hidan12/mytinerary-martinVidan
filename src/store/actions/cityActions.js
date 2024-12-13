import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const url = "https://mytinerary-back-martinvidan.onrender.com/"
export const setCity = createAsyncThunk("SET_CITY", async (search)=>{
    let cities = []
    if (search != "") {
        cities = await axios.get(`${url}api/city/allCity?search=${search}`)
    }else{
        cities = await axios.get(`${url}api/city/allCity`) 
    }
    return cities.data.cities
})

export const searchCity = createAction("SEARCH_CITY")