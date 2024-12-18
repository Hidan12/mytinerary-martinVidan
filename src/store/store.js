import { configureStore } from "@reduxjs/toolkit";
import { cityReducer } from "./reducers/cityReducer.js";
import reducerItinerary from "./reducers/itinerary.js";
import { reducerTheme } from "./reducers/themeReducer.js";
import signInReducer from "./reducers/signInReducer.js";
import { createUserReducer } from "./reducers/signUp.js";



export const store = configureStore({
    reducer:{
        cityReducer: cityReducer, 
        reducerItinerary: reducerItinerary,
        reducerTheme: reducerTheme,
        loginReducer: signInReducer,
        createUserReducer: createUserReducer
    }
})