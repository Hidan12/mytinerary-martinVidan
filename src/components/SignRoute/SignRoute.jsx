import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const SignRoute = ({children})=>{
    const {token} = useSelector(state => state.loginReducer)
    if (token) return <Navigate to="/" replace/>

    return children
}

export {SignRoute}