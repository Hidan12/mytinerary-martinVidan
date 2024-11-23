import { useDispatch } from "react-redux"
import { selectItinerary } from "../../store/actions/itineraryAction"
import './cardInfoStyle.css'

export const CardInfoItinerary = ({itinerary, handlerClickActivity}) =>{
    const dispatch = useDispatch()
    console.log(itinerary);
    
    let cost = new Array(itinerary.price).fill(
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cash w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" viewBox="0 0 16 16">
            <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
            <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z"/>
        </svg>
    )
    return (
        <div className="conteiner-card-itinerary group">
            <div className="w-full h-1/2 relative">
                <img src={itinerary.photoItinerary} className="photo-itinerary" alt="" />
                <div className="absolute top-0 w-full h-full grid grid-cols-2">
                    <div className="">
                        <p className="p-2 font-semibold bg-black/50 rounded-tl-lg text-white">{itinerary.nameItinerary}</p>
                    </div>
                    <img src={itinerary.user.photo} className=" photo-user-itinerary" alt={itinerary.nameUser} />
                </div>
            </div>
            <div className="w-full h-1/2 grid grid-cols-2  relative">
                <p className="text-black flex items-center ps-2">
                    {itinerary.hashtags.map(h => `${h} `)}
                </p>
                <div className="flex flex-col-reverse justify-start ms-[65%] md:ms-[70%] items-center p-2">
                    <p className="text-black">{itinerary.likes}</p>
                    <button className="w-[4vh] h-[4vh] text-blue-700 hover:text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-heart w-full h-full" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                        </svg>
                    </button>
                </div>
                <div className="contein-itinerary-plain group-hover:animate-moveplain">
                    <div className="border-y-2 border-dashed border-black w-[80%]" ></div>
                    <span className="text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-airplane-engines-fill w-5 h-5 rotate-90" viewBox="0 0 16 16">
                            <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0"/>
                        </svg>
                    </span>
                </div>
                <p className="text-black p-2 flex items-center">Duration: {itinerary.duration + " HS"}</p>
                <div className="flex items-center text-black gap-3 ms-[20%] lg:ms-30%">
                    Cost:
                    <div className=" flex flex-wrap text-green-600">
                        {cost.map((svg, index) => (
                            <span key={index}>{svg}</span>
                        ))}
                    </div>
                </div>
                <div className="col-span-2 flex justify-start items-center">
                        <button onClick={()=>{dispatch(selectItinerary(itinerary), handlerClickActivity())}} className="px-10 py-3 mb-2 rounded-xl bg-blue-600 hover:bg-blue-800 text-white">
                            ACTIVITIES
                        </button>
                </div>
            </div>
        </div>
    )
}