import './cardCarrusel.css'


const Card = ({info}) =>{    
    return(
        <div className='conteiner-card border-2 overflow-hidden group border-transparent'>
            <div className={'container-img group-hover:scale-125 transition-transform duration-300'}>
                <img src={info.img} className={"w-full h-full object-cover"} alt="" />
            </div>
            <div className={'carrusel-title'}>
                <p className={"md:text-2xl text-white bg-black/50 border rounded-lg"}>{info.city}</p>
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