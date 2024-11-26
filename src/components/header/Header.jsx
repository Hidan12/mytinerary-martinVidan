import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './header.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCity } from '../../store/actions/cityActions.js'
import { setTheme } from '../../store/actions/themeAction.js'
import { LoginCard } from '../loginCard/LoginCard.jsx'
import { clearSignIn, signOut, verifyToken } from '../../store/actions/signIn.js'
const Logo = ()=>{
    return (
        <div className='flex items-center'>
            <div className='w-10 h-[5vh] md:w-20 md:h-[10vh]'>
                <img src={logo} className='w-full h-full object-cover'  alt="" />
            </div>
            <div>
                <p className='text-white font-serif md:font-bold text-sm  md:text-2xl'>My Tinerary</p>
            </div>
        </div>
)
}

const SelectThema = ()=>{
    const {dark} = useSelector(state => state.reducerTheme)
    const dispatch = useDispatch()
    return(
        <button onClick={()=>dispatch(setTheme())} className="group flex items-center  justify-between p-4 md:w-[8vw] lg:w-[6vw] text-white rounded-md">
            <div className="overflow-hidden md:w-[3vw] md:h-[3vw] lg:w-[3vw] lg:h-[3vw] rounded-full transition-transform duration-300 relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={` p-2 bi bi-moon-stars-fill w-full h-full text-white bg-black absolute transition-transform duration-300 ${dark ? "translate-y-0" : "-translate-y-full"}`}
                    viewBox="0 0 16 16"
                >
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={`p-2 bi bi-sun-fill text-yellow-400 w-full h-full bg-white absolute transition-transform duration-300 ${dark ? "translate-y-full" : "translate-y-0"}`}
                    viewBox="0 0 16 16"
                >
                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
            </div>
        </button>
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

const DropdownMenu = ({handleClickButton, handlerLogin})=>{
    const {token} = useSelector(state => state.loginReducer)
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
            {token ? 
                <button onClick={()=>dispatch(signOut(token))} className='text-black text-left font-semibold text-2xl px-4'>Log Out</button>
                : 
                <button className='text-black text-left font-semibold text-2xl px-4' onClick={()=>{handleClickButton(),handlerLogin()}}>Log In</button>}
            {!token ? <NavLink to={"/createUser"} onClick={()=>handleClickButton()} className='text-black font-semibold text-2xl px-4'>Create User</NavLink> : ""}
            
            
        </div>
    )
}

const ButtonLogin = ({ handlerLogin, handlersignOut})=>{
    const {user, token} = useSelector(state => state.loginReducer)
    console.log(user.name, "header--------------------------");
    
    return (
        <>
        {
            user && user.name ? 
            <button onClick={()=>handlersignOut(token)} className='text-white hover:underline decoration-teal-200 decoration-[5px] underline-offset-[8px] me-5'>
                Logout
            </button>
            :
            <NavLink to={"/createUser"} className={({ isActive }) => (isActive ? 'pe-4 text-white underline decoration-teal-400 decoration-[6px] rounded-lg p-2' : 'pe-4 text-white hover:underline decoration-teal-200 decoration-[6px] rounded-lg p-2')}>
                Create User
            </NavLink>
        }
        {!user.name ? 
            <button onClick={()=>handlerLogin()} className='text-white hover:underline decoration-teal-200 decoration-[5px] underline-offset-[8px] me-5'>
                Login
            </button>
            :
            <div className='flex items-center pe-5'>
                <img src={user.photo} className='md:w-[3vw] md:h-[3vw] lg:w-[3vw] lg:h-[3vw] rounded-full object-cover' alt="" />
            </div>
        }
        
        </>
    )
}









const Header = () =>{
    const navigate = useNavigate()
    const {user, token} = useSelector(state => state.loginReducer)
    const {search} = useSelector(state => state.cityReducer)
    const [clickLogin, setClicLogin] = useState(false)
    const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight});    
    const [buttonBurguer, setButtonBurguer] = useState(false)
    const dispatch = useDispatch()
    

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const tokenParams = params.get('token');  
        if (tokenParams) {
            localStorage.setItem('userItinerary', JSON.stringify({ token:tokenParams }))
            dispatch(verifyToken(tokenParams));
            navigate("/")
        }
      }, []);





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
    const handlersignOut = (token)=>{
        dispatch(signOut(token))
        alert('You have been logged out successfully!')
    }
    const handlerLogin = ()=>{
        if(clickLogin){
            dispatch(clearSignIn())
        }
        setClicLogin(l => l = !l)
    }
    if (windowSize.width < 767) {
        return(
            <div className='container-header'>
                <div className='ps-3'>
                    {user && user.photo ? <img src={user.photo} alt={user.name} className='w-[9vw] h-[9vw] rounded-full' /> : "" }
                </div>
                <Logo/>
                <BurgerMenu handleClickButton={handleClickButton}/>
                {buttonBurguer ? <DropdownMenu handlersignOut={handlersignOut} handlerLogin={handlerLogin} handleClickButton={handleClickButton}/>: ""}
                {clickLogin ? <LoginCard handlerLoginButon={handlerLogin} /> : ""}
            </div>
        )
    }
    return(
        <>
            <div className="container-header">
                <Logo></Logo>
                <div className='flex justify-center items-center me-2 gap-4'>
                        <SelectThema />          
                        <NavLink to={"/"} className={({ isActive }) => (isActive ? 'text-white underline decoration-teal-400 decoration-[6px] rounded-lg p-2' : 'text-white hover:underline decoration-teal-200 decoration-[6px] rounded-lg p-2')}>Home</NavLink>
                        <NavLink to={"/cities"} className={({ isActive }) => (isActive ? 'text-white underline decoration-teal-400 decoration-[6px] rounded-lg p-2' : 'text-white hover:underline decoration-teal-200 decoration-[6px] rounded-lg p-2')}>Cities</NavLink>
                </div>
                <div className='w-full flex justify-end'>
                    <ButtonLogin handlerLogin={handlerLogin} handlersignOut={handlersignOut}></ButtonLogin>
                </div>
                {clickLogin ? <LoginCard handlerLoginButon={handlerLogin} /> : ""}
            </div>
        </>
        
    )
}
export  {Header}