const InputLabel = ({text, id, handler})=>{
    return(
        <div className="relative w-[80%]  group">
            <input id={id} type={id == "password" ? "password" : id == "mail" ? "email" : "text"} onChange={(e)=> handler(e.target.value)} className="w-full text-center rounded-lg border-b border-gray-300 focus:border-b-2 focus:border-black outline-none pt-4 peer" required/>
            <label htmlFor={id} className="absolute top-[8%] rounded-lg ms-3 left-0 text-gray-500 transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-black">{text}</label>
        </div>
    )
}

export {InputLabel}