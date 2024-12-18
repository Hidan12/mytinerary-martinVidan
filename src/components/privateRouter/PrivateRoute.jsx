import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children})=>{
    const {token} = useSelector(state => state.loginReducer)
    if (!token) return <Navigate to="/" replace/>

    return children
}

export {PrivateRoute}