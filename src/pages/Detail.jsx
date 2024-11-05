import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { setItineraries } from "../store/actions/itineraryAction.js"
import { CardInfoItinerary } from "../components/CardInfoItinerary/CardInfoItinerary.jsx"
import { CardActivity } from "../components/CardActivity/CardActivity.jsx"


const NoItinerary = ({city})=>{
    return(
        <div className="w-full pt-[20vh]">
            <p className="text-center font-bold text-3xl text-white bg-black/50">
            There are no Itineraries in {city}. Be the first to create one, <button className="bg-blue-600/45 hover:bg-blue-700 rounded-lg p-1">click here</button> to create one.
            </p>
        </div>
    )
}




const Detail = () =>{
    const {dark} = useSelector(state => state.reducerTheme)
    const {itineraries, loading} = useSelector(state => state.reducerItinerary)
    const [clickActivity, setClickActivity] = useState(false)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(()=>{
        dispatch(setItineraries(location.state._id))
    },[])

    const handlerNavigate = ()=>{
        navigate(-1)
        
    }
    
    const handlerClickActivity = ()=>{
        setClickActivity(a => a = !a)
    }
    
    return (
        <div className={`min-h-[70vh] ${dark ? "bg-black": "bg-slate-300"}`}>
            <div className="w-full h-[85vh] relative">
                <img className="w-full h-full object-cover object-center" src={location.state.imgCity}  alt="" />
                <div className="absolute top-0 w-full h-full flex flex-col justify-around items-center">
                    <p className="text-center font-bold md:text-3xl text-white bg-black/50 p-3 rounded-xl">{location.state.cityName}</p>
                    <p className="w-[70%] md:w-[50%] text-center font-bold md:text-2xl text-white bg-black/50 p-3 rounded-xl">{location.state.description}</p>
                    <div className="flex flex-col items-center justify-center gap-3">
                        <button onClick={()=>handlerNavigate()} className="p-3 bg-blue-700/60 text-white hover:bg-blue-900 rounded-xl">RETURN TO CITIES</button>
                    </div>
                </div>
            </div>
            {clickActivity ? <CardActivity handlerClickActivity={handlerClickActivity}/> : ""}
            <div className="w-full min-h-[85vh]">
                {loading ? "": itineraries.length > 0 ? 
                    <div className=" grid grid-cols-1 gap-2 gap-y-6 p-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-y-5  md:p-11 justify-items-center">
                        {itineraries.map(i => <CardInfoItinerary key={i._id} handlerClickActivity={handlerClickActivity} itinerary={i}/>)} 
                    </div>
                    : 
                    <NoItinerary city={location.state.cityName}/>
                }   
            </div>
        </div>
    )
}

export {Detail}