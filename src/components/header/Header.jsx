import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './header.css'
import { useEffect, useState } from 'react'

const Logo = ()=>{
    return (
        <div className='flex items-center'>
            <div className='w-20 h-[10vh]'>
                <img src={logo} className='w-full h-full object-cover'  alt="" />
            </div>
            <div>
                <p className='text-white font-bold text-2xl'>My Tinerary</p>
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
    return(
        <div className='drop-down-container'>
            <NavLink to={"/home"} className={"text-white"} onClick={()=>handleClickButton()}>
                Home
            </NavLink>
            <NavLink to={"/citys"} className={"text-white"} onClick={()=>handleClickButton()}>
                Citys
            </NavLink>
            <p className='text-white'>{!login ? "Log in":"Log out"}</p>
            
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
      }, []);

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
                    <NavLink to={"/home"} className={"text-white hover:bg-[#2ECC71] rounded-lg p-2"}>Home</NavLink>
                    <NavLink to={"/citys"} className={"me-2 text-white hover:bg-[#2ECC71] rounded-lg p-2"}>Citys</NavLink>
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