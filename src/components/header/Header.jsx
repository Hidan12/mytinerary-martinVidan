import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './header.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCity } from '../../store/actions/cityActions.js'
import { setTheme } from '../../store/actions/themeAction.js'
const Logo = ()=>{
    return (
        <div className='flex items-center'>
            <div className='w-20 h-[10vh]'>
                <img src={logo} className='w-full h-full object-cover'  alt="" />
            </div>
            <div>
                <p className='text-white font-serif font-bold text-2xl'>My Tinerary</p>
            </div>
        </div>
)
}


const BurgerMenu = ({handleClickButton})=>{
    return (
        <div className='burger-container'>
            <button onClick={()=> handleClickButton()} className='w-10 h-1/2 hover:bg-slate-500'>
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
            </button>
        </div>
    )
}

const DropdownMenu = ({handleClickButton, login})=>{
    const {dark} = useSelector(state => state.reducerTheme)
    const dispatch = useDispatch()
    return(
        <div className='drop-down-container'>
            <NavLink to={"/home"} className={"text-black font-semibold text-2xl px-4"} onClick={()=>handleClickButton()}>
                Home
            </NavLink>
            <NavLink to={"/cities"} className={"text-black font-semibold text-2xl px-4"} onClick={()=>handleClickButton()}>
                Cities
            </NavLink>
            <button className='text-black text-left font-semibold text-2xl px-4' onClick={()=>dispatch(setTheme())}>
                {dark ? "Dark" : "White"}
            </button>
            <p className='text-black font-semibold text-2xl px-4'>{!login ? "Log in":"Log out"}</p>
            
        </div>
    )
}

const ButtonLogin = ({login})=>{
    
    return (
        <>
        {!login ? 
            <button className='w-6 h-6 text-red-500 hover:text-[#2ECC71]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-fill-exclamation" viewBox="0 0 16 16">
                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0V11a.5.5 0 0 0-.5-.5m0 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                </svg>
            </button>
            :
            <button className='w-6 h-6 text-[#2ECC71] hover:text-red-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-fill-check" viewBox="0 0 16 16">
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
                </svg>
            </button>}
        </>
    )
}

const Header = () =>{
    const {dark} = useSelector(state => state.reducerTheme)
    const {search} = useSelector(state => state.cityReducer)
    const dispatch = useDispatch()

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });    
      const [buttonBurguer, setButtonBurguer] = useState(false)
      const [login, setLogin] = useState(false)
    
      useEffect(() => {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
        window.addEventListener('resize', handleResize);
        handleResize();
      }, [])

      useEffect(()=>{
        dispatch(setCity(search))
      },[search])

      const handleClickButton = ()=>{
        setButtonBurguer(cl => cl = !cl)
      }
    
    return(
        <>
            <div className="container-header">
                <Logo></Logo>
                {
                    windowSize.width < 768 ? <BurgerMenu handleClickButton={handleClickButton}></BurgerMenu> : 
                    <div className='flex justify-end items-center me-2 gap-4'>
                        <button onClick={()=>dispatch(setTheme())} className="group flex items-center  justify-between p-4 md:w-[11vw] lg:w-[8vw] text-white rounded-md">
                            <div className="overflow-hidden md:w-[3vw] md:h-[3vw] lg:w-[3vw] lg:h-[3vw] rounded-full transition-transform duration-300 relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className={`bi bi-moon-stars-fill w-full h-full text-white bg-black absolute transition-transform duration-300 ${dark ? "translate-y-0" : "-translate-y-full"}`}
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className={`bi bi-sun-fill text-yellow-400 w-full h-full bg-white absolute transition-transform duration-300 ${dark ? "translate-y-full" : "translate-y-0"}`}
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                                </svg>
                            </div>
                            {dark ? " Dark": "White"}
                        </button>
                    <NavLink to={"/"} className={({ isActive }) => (isActive ? 'text-white bg-[#068090] rounded-lg p-2' : 'text-white hover:bg-[#068090] rounded-lg p-2')}>Home</NavLink>
                    <NavLink to={"/cities"} className={({ isActive }) => (isActive ? 'text-white bg-[#068090] rounded-lg p-2' : 'text-white hover:bg-[#068090] rounded-lg p-2')}>Cities</NavLink>
                    <ButtonLogin login={login}></ButtonLogin>
                </div>
                }
                <div className='relative w-[100vw]'>
                    {
                        buttonBurguer && windowSize.width < 768 ? <DropdownMenu handleClickButton={handleClickButton} login={login}></DropdownMenu> : ""
                    }
                </div>
            </div>
        </>
        
    )
}
export  {Header}