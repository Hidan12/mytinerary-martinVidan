import { useSelector } from "react-redux"
import { CreateUserModal } from "../components/createUser/CreateUser"

const CreateUser = ()=>{
    const {dark} = useSelector(state => state.reducerTheme)
    return(
        <div className={`min-h-[72vh] ${dark ? "bg-black" : "bg-slate-50"}`}>
            <CreateUserModal />
        </div>
    )

}

export {CreateUser}