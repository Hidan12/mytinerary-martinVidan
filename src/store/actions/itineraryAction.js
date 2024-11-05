import { createAction,  createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const setItineraries = createAsyncThunk("SET_ITINERARIES", async(city)=>{
    try {
        const itineraries = await axios.get(`http://localhost:8080/api/itinerary/itinerariesByCity?city=${city}`)        
        return itineraries.data.itineraries
    } catch (error) {
        console.log(error)
    }
})

export const likeItinerary = createAsyncThunk("LIKE_ITINERARY", async(idItinerary, likeCounter)=>{
    const body = {_id:idItinerary, likes:likeCounter}
    try {
        const response = axios.put("http://localhost:8080/api/itinerary/updatedLike", body)
        if (response.modifiedCount) return true
        return false
    } catch (error) {
        console.log(error)
    }
})

export const selectItinerary = createAction("SELECT_ITINERARY")