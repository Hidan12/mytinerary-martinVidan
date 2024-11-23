import { createReducer } from "@reduxjs/toolkit"
import { clearCreateUser, createUser } from "../actions/signUpAction"

const initialState = {
    user: {},
    errorField: [],
    loadingCreate: false,
    errorCreate: false
}

const createUserReducer = createReducer(initialState, (builder)=>{
    builder.addCase(createUser.pending, (state, action)=>{
        state.loadingCreate = true
        state.errorField = []
        state.user = {}
        state.errorCreate = false
    })
    .addCase(createUser.fulfilled, (state, action)=>{
        state.errorField = []
        state.loadingCreate = false
        state.user = action.payload
        state.errorCreate = false
    })
    .addCase(createUser.rejected, (state, action)=>{
        if (action.payload && action.payload.message){
            state.errorField = action.payload.message
        }
        state.loadingCreate = false
        state.user = {}
        state.errorCreate = true
    })
    .addCase(clearCreateUser, (state, action)=>{
        state.errorField = []
        state.loadingCreate = false
        state.user = {}
        state.errorCreate = false
        state.errorField = []
    })
})

export {createUserReducer}