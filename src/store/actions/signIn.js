import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://mytinerary-back-martinvidan.onrender.com/"

const signIn = createAsyncThunk("SIGN_IN", async (user, {rejectWithValue})=>{
    try {
        const sign = await axios.post(`${url}api/login/signIn`, user)
        return sign.data
    } catch (error) {
        if (error.response && error.response.data) {
            return rejectWithValue(error.response.data) 
        }
        return error
    }
})
const signOut = createAsyncThunk("SIGN_OUT", async(token)=>{
    try {
        const out = await axios.get(`${url}api/login/signOut`, {headers: {Authorization: `Bearer ${token}`}})
        return out.data
    } catch (error) {
        return error
    }
})
const verifyToken = createAsyncThunk("VERIFY_TOKEN", async (token)=>{
    try {
        const verify = await axios.get(`${url}api/login/checkToken`, {headers: {Authorization: `Bearer ${token}`}})
        return verify.data
    } catch (error) {
        return error
    }
})
const setUser = createAction("SET_USER")
const clearSignIn = createAction("CLEAR_SIGN_IN")

export {signIn, signOut, verifyToken, setUser, clearSignIn}