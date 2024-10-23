import { useLocation, useNavigate } from "react-router-dom"

const Detail = () =>{
    const navigate = useNavigate()
    const location = useLocation()
    
    const handlerNavigate = ()=>{
        navigate(-1)
        
    }

    
    return (
        <div className="min-h-[70vh] bg-gradient-to-b from-indigo-500 to-[#006EAF]">
            <div className="w-full h-[85vh] relative">
                <img className="w-full h-full object-cover object-center" src={location.state.imgCity}  alt="" />
                <p className="absolute top-6 left-[43%] md:left-[45%] text-center font-bold md:text-3xl text-white bg-black/50 p-3 rounded-xl">{location.state.cityName}</p>
                <p className="absolute top-[30%] left-[20%] w-[70%] md:left-[25%] md:w-[50%] text-center font-bold md:text-2xl text-white bg-black/50 p-3 rounded-xl">{location.state.description}</p>
                <div className="absolute bottom-9 left-[29%] md:left-[40%] flex flex-col items-center justify-center gap-3">
                    <p className="font-bold md:text-xl text-white bg-black/50 p-3 text-center rounded-xl">site under construction</p>
                    <button onClick={()=>handlerNavigate()} className="p-3 bg-blue-700/60 text-white hover:bg-blue-900 rounded-xl">return to cities</button>
                </div>
            </div>
        </div>
    )
}

export {Detail}