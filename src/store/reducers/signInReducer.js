import { createReducer } from "@reduxjs/toolkit"
import { clearSignIn, setUser, signIn, signOut, verifyToken } from "../actions/signIn"

const initialState = {
    user: {},
    token: "",
    loading: false,
    error: false,
    errorField: []
}

const signInReducer = createReducer(initialState, (builder)=>{
    builder.addCase(signIn.pending, (state)=>{
        state.loading = true
        state.token = ""
        state.error = false
        state.errorField = []
        state.user = {}
    })
    .addCase(signIn.fulfilled, (state, action)=>{
        state.loading = false
        state.error = false
        state.errorField = []
        state.token = action.payload.token
        state.user = action.payload.user
        localStorage.setItem('userItinerary', JSON.stringify({ token:action.payload.token }))
    })
    .addCase(signIn.rejected, (state, action)=>{
        if (action.payload && action.payload.message){
            state.errorField = action.payload.message
        }
        state.loading = false
        state.token = ""
        state.error = true
        state.user = {}
    })
    .addCase(setUser, (state, action)=>{
        state.loading = false
        state.error = false
        state.token = action.payload.token
        state.user = action.payload.createUser
        localStorage.setItem('userItinerary', JSON.stringify({ token:action.payload.token }))
    })
    .addCase(signOut.pending, (state)=>{
        state.loading = true
        state.token = ""
        state.error = false
        state.user = {}
    })
    .addCase(signOut.fulfilled, (state, action)=>{
        state.loading = false
        state.error = false
        state.token = ""
        state.user = {}
        localStorage.removeItem('userItinerary')
    })
    .addCase(signOut.rejected, (state, action)=>{
        state.loading = false
        state.token = ""
        state.error = true
        state.user = {}
        localStorage.removeItem('userItinerary')
    })
    .addCase(verifyToken.pending, (state)=>{
        state.loading = true
        state.token = ""
        state.error = false
        state.user = {}
    })
    .addCase(verifyToken.fulfilled, (state, action)=>{
        state.loading = false
        state.error = false
        state.user = action.payload.user
        state.token = JSON.parse(localStorage.getItem('userItinerary')).token
    })
    .addCase(verifyToken.rejected, (state, action)=>{
        state.loading = false
        state.token = ""
        state.error = true
        state.user = {}
        localStorage.removeItem('userItinerary')
    }) 
    .addCase(clearSignIn, (state, action)=>{
        state.loading = false
        state.token = ""
        state.error = false
        state.user = {}
        state.errorField = []
    })
})
export default signInReducer