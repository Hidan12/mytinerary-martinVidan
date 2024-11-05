import { createReducer } from "@reduxjs/toolkit"

import { selectItinerary, setItineraries } from "../actions/itineraryAction"

const initialState = {
    itineraries: [],
    slecitinerary:{},
    loadingItineraries: true,
    errorItineraries: false,
}

const reducerItinerary = createReducer(initialState, (builder)=>{
    builder.addCase(setItineraries.pending, (state)=>{
        state.loadingItineraries = true
    })
    .addCase(setItineraries.fulfilled, (state, action)=>{
        state.loadingItineraries = false
        state.itineraries = action.payload
    })
    .addCase(setItineraries.rejected, (state, action)=>{
        state.loadingItineraries = false
        state.errorItineraries = true
    })
    .addCase(selectItinerary, (state, action)=>{
        state.slecitinerary = action.payload
    })
})

export default reducerItinerary