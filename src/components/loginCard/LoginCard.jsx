import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signIn } from "../../store/actions/signIn"
import { InputLabel } from "../inputAndLabel/InputLabel"




const LoginCard = ({handlerLoginButon})=>{
    const {dark} = useSelector(state => state.reducerTheme)
    let [mail, setMail] = useState("")
    let [password, setPassword] = useState("")
    const [login, setLogin] = useState(false)
    const dispatch = useDispatch()
    const [clickByGoogle, setClickByGoogle] = useState(false)
    const {user, token, loading, error, errorField} = useSelector(state => state.loginReducer)
   
   
   const handlerMail = (e)=>{
    setMail(m => m = e)
   } 
   const handlerPassword = (e)=>{
    setPassword(p => p = e)
   }
    const handlerlogin = (e)=>{
        e && (e.preventDefault())
        setLogin(l => l = !l)   
    }
   
    
    useEffect(()=>{
        const test = async()=>{
            window.location.href = "http://localhost:8080/api/login/signin/google"
        }
        if (clickByGoogle) {
            test()
        }
    },[clickByGoogle])


    useEffect(()=>{
        if (login && !user.mail && !loading ) {
            console.log(error);
            dispatch(signIn({mail: mail, password: password}))
            handlerlogin()
        }
        if (!loading && user.mail) {
            handlerLoginButon()  
        }
    },[login, user])
    return(
        <div className="absolute top-[30vh] flex  justify-center w-full h-full">
            <form onSubmit={(e)=>handlerlogin(e)} className={`sticky top-[20vh] w-[95vw] sm:w-[65vw] md:w-[40vw] flex flex-col items-center justify-between gap-5 h-[70vh] md:h-[65vh] lg:h-[55vh] rounded-lg ${dark ? "bg-blue-800": "bg-[#1B8AE4]"}`}>
                <div className="w-full grid grid-cols-3 justify-items-center pt-2">
                    <div></div>
                    <p className="font-semibold text-white">LOG IN</p>
                    <button onClick={()=> handlerLoginButon()} className="ms-[59%] text-white ">X</button>
                </div>
                <InputLabel text={"Mail"} handler={handlerMail} id={"mail"} />
                {errorField && errorField.length > 0 && errorField.some(er => er.mail) && (<p className="text-white">{errorField.map(er => er.mail )}</p>) }
                <InputLabel text={"Password"} handler={handlerPassword} id={"password"} />
                {errorField && errorField.length > 0 && errorField.some(er => er.password) && (<p className="text-white">{errorField.map(er => er.password )}</p>) }
                {loading ? <p className="animate-pulse text-teal-200">Loading...</p>: ""}
                <div className="grid grid-cols-3 justify-items-center items-center w-[80%]">
                    <button className="p-2 rounded-md font-bold bg-slate-50 hover:bg-slate-300" type="submit">Sign In</button>
                    <p className="font-bold text-white">OR</p>
                    <button onClick={()=>setClickByGoogle(true)} className="p-2 rounded-md font-bold bg-slate-50 hover:bg-slate-300 group">Login by <span className="text-blue-600 ">G</span><span className="text-red-600">o</span><span className="text-yellow-500">o</span><span className="text-blue-500">g</span><span className="text-green-600">l</span><span className="text-red-600">e</span></button>
                </div>
                <div className="w-full flex justify-center">
                </div>
            </form>
        </div>
    )

}

export {LoginCard}