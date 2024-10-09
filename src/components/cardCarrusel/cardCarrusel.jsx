import './cardCarrusel.css'


const Card = ({info}) =>{    
    return(
        <div className='conteiner-card group'>
            <div className={'conteiner-card-img group-hover:scale-125'}>
                <img src={info.img} className={"w-full h-full object-cover"} alt="" />
            </div>
            <div className={'carrusel-title'}>
                <p className={"p-1 text-sm md:text-2xl text-white bg-black/50 border rounded-lg"}>{info.city}</p>
            </div>
        </div>
    )
}


const CardCarrusel = ({data, clasStyle})=>{
    return(
        <div className={clasStyle}>
            {data.map((card, index) => 
                (<Card key={index} info={card}/>)
            )}
        </div>
    )
}
export {CardCarrusel}