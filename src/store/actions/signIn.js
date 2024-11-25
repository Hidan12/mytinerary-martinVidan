import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const signIn = createAsyncThunk("SIGN_IN", async (user, {rejectWithValue})=>{
    try {
        const sign = await axios.post("http://localhost:8080/api/login/signIn", user)
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
        const out = await axios.get("http://localhost:8080/api/login/signOut", {headers: {Authorization: `Bearer ${token}`}})
        return out.data
    } catch (error) {
        return error
    }
})
const verifyToken = createAsyncThunk("VERIFY_TOKEN", async (token)=>{
    try {
        const verify = await axios.get("http://localhost:8080/api/login/checkToken", {headers: {Authorization: `Bearer ${token}`}})
        return verify.data
    } catch (error) {
        return error
    }
})
const setUser = createAction("SET_USER")
const clearSignIn = createAction("CLEAR_SIGN_IN")

export {signIn, signOut, verifyToken, setUser, clearSignIn}