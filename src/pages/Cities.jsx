import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Card = ({city})=>{
    const navigate = useNavigate()
    const NoImg = "https://cdn.getyourguide.com/img/fallback/tour.png/99.png"
    const handlerNavigate = ()=>{
        navigate("/detail", {state:city})
    }
    return(
        <div className='w-full h-[30vh] border border-blue-300 relative overflow-hidden group hover:shadow-red-600 shadow-[-1px_0px_39px_0px]'>
            <img src={city.imgCity || NoImg} className='w-full h-full object-cover group-hover:scale-125 transition-transform duration-300' alt="" />
            <p className=' absolute top-2 bg-black/50 text-white p-2 rounded-lg'>📍 {city.cityName}</p>
            <button className='absolute bottom-2 p-1 text-white rounded-lg bg-blue-800/70 hover:bg-blue-800' onClick={()=> handlerNavigate()}>
                More info
            </button>
            
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
    const [cities, setCities] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const addCities = async ()=>{
            try {
                let data = undefined
                if (search == "") {
                    data = await fetch("http://localhost:8080/api/city/allCity")
                }else{
                    data = await fetch(`http://localhost:8080/api/city/allCity?search=${search}`)
                }
                const dataCities = await data.json()
                setCities(c => c = dataCities)
                setLoading(l => l = true)
            } catch (error) {
                console.log(error)
            }
        }
        addCities()
        
    },[search])

    const handlerSearch = (e)=>{   
        setSearch(v => v = e.target.value)
    }
    
    return(
        <section className="min-h-[70vh] bg-gradient-to-b from-[#5D3EF0] to-[#D13EF0]">
            <h1 className="text-white font-bold text-2xl text-center py-5">Cities</h1>
            <div className='flex justify-center items-center '>
                <input type="text" className='h-[8vh] border md:w-[30vw] border-blue-600 rounded-lg' placeholder='✈ Seach' onChange={(e)=> handlerSearch(e)} />
            </div>
            <div className='flex w-full justify-center items-center py-4'>
                {loading ?              
                    <div className={`w-[90%] ${cities.length > 0 ? "grid grid-cols-2 md:grid-cols-4 gap-3": "" }`}>
                        { cities.length > 0 ? cities.cities.map(c => <Card key={c.cityName} city={c}/>)
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