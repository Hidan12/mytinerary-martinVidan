import { useSelector } from "react-redux"

export const CardActivity = ({handlerClickActivity})=>{
    const {slecitinerary} = useSelector(state => state.reducerItinerary)
    return(
        <div className="absolute w-full h-[200vh] flex justify-center">
            <div className="z-40 sticky  top-[20vh] h-[70vh] justify-centerh-full w-[90vw] sm:w-[80vw] lg:w-[70vw] bg-slate-300 flex flex-col items-center">
                <h2 className="text-center font-bold text-xl text-black">ACTIVITIES</h2>
                <div className="w-full h-[90%] relative">
                    <img src={slecitinerary.photoItinerary} className="w-full h-full object-cover" alt="" />
                    <div className="absolute top-0 w-full h-full flex flex-col justify-around items-center">
                        <p className="text-white bg-black/55 p-2 rounded-lg font-bold text-2xl text-center">IN DEVELOPMENT</p>
                        <button onClick={()=>handlerClickActivity()} className="p-2 rounded-lg text-white font-bold bg-red-600/70 hover:bg-red-700">
                            CLOSE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}