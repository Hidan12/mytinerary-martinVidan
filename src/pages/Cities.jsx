import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { searchCity } from '../store/actions/cityActions'
import { useState } from 'react'


const Card = ({city})=>{
    const navigate = useNavigate()
    const [imgSrc, setImgSrc] = useState(city.imgCity)
    const NoImg = "https://concepto.de/wp-content/uploads/2018/08/Londres-e1533855310803.jpg"
    const handlerNavigate = ()=>{
        navigate("/detail", {state:city})
    }
    const handlerErrorImg = ()=>{
        setImgSrc(NoImg)
    }
    return(
        <div className='w-full h-[35vh] border border-blue-300 relative overflow-hidden group hover:shadow-blue-700 hover:shadow-[-1px_0px_39px_0px] hover:border-2 hover:border-blue-700'>
            <img src={imgSrc} onError={()=> handlerErrorImg()} className='w-full rounded-2xl h-full object-cover group-hover:scale-125 transition-transform duration-300' alt="" />
            <p className=' absolute ms-2 top-2 bg-black/50 text-white p-2 rounded-lg'>📍 {city.cityName}</p>
            <div className=' absolute bottom-2 w-full flex justify-center'>
                <button className='p-2 text-white rounded-lg bg-blue-800/70 hover:bg-blue-800' onClick={()=> handlerNavigate()}>
                    More info
                </button>
            </div>
            
        </div>
    )
}

const LoadingCard = ()=>{
    let cards = Array.from({length:4})
    return(
        <div className='w-[90%] grid grid-cols-2 md:grid-cols-4 gap-3 '>
            {cards.map((_, index) => (
                <div key={index} className='w-full h-[30vh] relative animate-pulse border border-sky-500'>
                    <div className='w-[20%] p-5 absolute top-2 rounded-lg bg-black/50 animate-pulse'></div>
                    <div className='w-[20%] p-5 absolute bottom-2 rounded-lg bg-blue-800/50 animate-pulse'></div>
                </div>
            ))}
        </div>
        
    )
}


const Cities = ()=>{
    const {dark} = useSelector(state => state.reducerTheme)
    const {cities, search, loading} = useSelector(state => state.cityReducer)
    const dispatch = useDispatch()
    
    return(
        <section className={`min-h-[72vh] ${dark ? "bg-black" : "bg-slate-300"}`}>
            <h1 className={`${dark ? "text-white": "text-black"} font-bold text-2xl text-center py-5`}>Cities</h1>
            <div className='flex justify-center items-center '>
                <input type="text" value={search} className='h-[8vh] border text-center md:w-[30vw] border-blue-600 focus:border-blue-800 focus:outline-none focus:border-4 rounded-lg' placeholder='✈ Search City' onChange={(e)=> dispatch(searchCity(e.target.value))} />
            </div>
            <div className='flex w-full justify-center items-center py-4'>
                {!loading ?              
                    <div className={`w-[90%] ${cities.length > 0 ? "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-5": "" }`}>
                        { cities.length > 0 ? cities.map((c, index) => <Card key={c.cityName+index} city={c}/>)
                            : 
                            <p className='text-center font-bold text-2xl text-white'>The city you were looking for was not found</p>
                        
                        }
                    </div> 
                    : 
                    <LoadingCard/>
                
            }

            </div>
            
        </section>
    )
}
export {Cities}