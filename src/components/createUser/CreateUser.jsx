import axios from "axios"
import { useEffect, useState } from "react"
import { InputLabel } from "../inputAndLabel/InputLabel"
import { useDispatch, useSelector } from "react-redux"
import { clearCreateUser, createUser } from "../../store/actions/signUpAction"
import { setUser } from "../../store/actions/signIn"


const CardCreateUser = ({data}) =>{
    const {user, loadingCreate, errorCreate, errorField} = useSelector(state => state.createUserReducer)
    const [countryData, setCountryData] = useState([])
    const [firstName, setFirstName] = useState(data ? data.name : "")
    const [lastName, setLastName] = useState(data ? data.lastName : "")
    const [mail, setMail] = useState(data ? data.mail : "")
    const [password, setPassword] = useState("")
    const [country, setCountry] = useState(data ? data.Country : "")
    const [photo, setPhoto] = useState(data ? data.photo : "")
    const [clickCreate, setClickCreate] = useState(false)
    const dispatch = useDispatch()
    const handlerFristName = (e)=>{
        setFirstName(f => f = e)
    }
    const handlerLastName = (e)=>{
        setLastName(l => l = e)
    }
    const handlerMail = (e)=>{
        setMail(m => m = e)
    }
    const handlerPassword = (e)=>{
        setPassword(p => p = e)
    }
    const handlerCountry = (e)=>{
        setCountry(c => c = e)
    }
    const handlerPhoto = (e)=>{
        setPhoto(p => p = e)
    }
    const handlerClickCreate = (e)=>{
        e && (e.preventDefault()) 
        setClickCreate(c => c = !c)
    }

    useEffect(()=>{
        const infoContry = async ()=>{
            try {
                const infoContry = await axios.get("https://restfulcountries.com/api/v1/countries", {headers: {Authorization: `Bearer yucFUmk3qnTZS4vMqYJG6biSYCpYF03w2mVDgp9h`}})
                setCountryData(d => d = infoContry.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        infoContry()
        dispatch(clearCreateUser())
    },[])

    useEffect(()=>{
        if (!user.createUser && !loadingCreate && clickCreate) {
            dispatch(createUser({name: firstName, lastName:lastName, mail:mail, password:password, Country:country, photo:photo}))
            handlerClickCreate()
        }
        if (user.createUser) {
            dispatch(setUser(user))
        }
    },[clickCreate, user])

    return(
        <form onSubmit={(e)=> handlerClickCreate(e)} className="w-full flex flex-col gap-2 justify-center items-center">
            <InputLabel text={"First Name"} id={"firstName"} handler={handlerFristName}/>
            {errorField && errorField.length > 0 && errorField.some(er => er.hasOwnProperty("name")) && (<p className="text-white">{errorField.map(er => er.name )}</p>) }
            <InputLabel text={"Last Name"} id={"lastName"} handler={handlerLastName}/>
            {errorField && errorField.length > 0 && errorField.some(er => er.hasOwnProperty("lastName")) && (<p className="text-white">{errorField.map(er => er.lastName )}</p>) }
            <InputLabel text={"Mail"} id={"mail"} handler={handlerMail}/>
            {errorField && errorField.length > 0 && errorField.some(er => er.hasOwnProperty("mail")) && (<p className="text-white">{errorField.map(er => er.mail )}</p>) }

            <select className="w-[80%] h-11 text-gray-500" onChange={(e)=> handlerCountry(e.target.value)}>
                <option value="">Select your country</option>
                {countryData.length > 0 ? countryData.map((dat, index) => <option key={index} value={dat.name}>{dat.name}</option>) : ""}
            </select>
            {errorField && errorField.length > 0 && errorField.some(er => er.hasOwnProperty("Country")) && (<p className="text-white">{errorField.map(er => er.Country )}</p>) }
            <InputLabel text={"Password"} id={"password"} handler={handlerPassword}/>
            {errorField && errorField.length > 0 && errorField.some(er => er.hasOwnProperty("password")) && (<p className="text-white">{errorField.map(er => er.password )}</p>) }
            <InputLabel text={"Photo Link"} id={"photoLink"} handler={handlerPhoto}/>
            {errorField && errorField.length > 0 && errorField.some(er => er.photo )&& (<p className="text-white">{errorField.map(er => er.photo )}</p>) }
            {errorCreate ? <p className="text-red-500">Error creating user, check your data</p>:""}
            <button type="submit"  className="p-2 rounded-lg font-bold bg-slate-50 hover:bg-slate-300">Create</button>            
        </form>
    )

}




const CreateUserModal = ()=>{
    const {dark} = useSelector(state => state.reducerTheme)
    const { errorField } = useSelector(state => state.createUserReducer)
    const handlerCreate = ()=>{
        window.location.href = "http://localhost:8080/api/login/signin/google"
    }
    return(
        <div className=" w-full py-5  top-[30vh] flex justify-center">
            <div className={`w-[80vw] rounded-xl sm:w-[60vw] md:w-[30vw] flex flex-col items-center justify-center gap-3 ${dark ? "bg-blue-800": "bg-[#1B8AE4]"}` } >
                <div className="flex justify-center items-center pt-3">
                    <p className="font-bold text-white">CREATE USER</p>
                </div>
                {errorField && errorField.some(er => er.registeredMail) && (<p className="text-white font-semibold">The email is already registered</p>)}
                 <CardCreateUser/>
                <div className="w-full flex justify-center items-center">
                    <div className="w-[45%] border-t-2 "></div>
                    <p className="W-[10%] text-center p-2 text-white font-bold">OR</p>
                    <div className="w-[45%] line-through border-t-2"></div>
                </div>
                <button onClick={()=>handlerCreate()} className="W-[80%] text-center pb-4 text-white font-semibold"> Create an account by <span className="text-blue-600 ">G</span><span className="text-red-600">O</span><span className="text-yellow-500">O</span><span className="text-blue-500">G</span><span className="text-green-600">L</span><span className="text-red-600">E</span></button>
            </div>
        </div>
    )
}

export {CreateUserModal}