import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://mytinerary-back-martinvidan.onrender.com/"
const createUser = createAsyncThunk("CREATE_USER", async (user, { rejectWithValue })=>{
    try {
        user.online = true
        user.typeUser = 3

        const create = await axios.post(`${url}api/user/create`, user)
        return create.data

    } catch (error) {
        if (error.response && error.response.data) {
            return rejectWithValue(error.response.data) 
        }
        return error
    }
})
const clearCreateUser = createAction("CLEAR_CREATE_USER")
export {createUser, clearCreateUser}