import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const setCity = createAsyncThunk("SET_CITY", async (search)=>{
    let cities = []
    if (search != "") {
        cities = await axios.get(`http://localhost:8080/api/city/allCity?search=${search}`)
    }else{
        cities = await axios.get("http://localhost:8080/api/city/allCity") 
    }
    return cities.data.cities
})

export const searchCity = createAction("SEARCH_CITY")