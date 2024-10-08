import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './header.css'
import { useEffect, useState } from 'react'

const BurgerMenu = ({handleClickButton})=>{
    return (
        <div className='w-full h-full flex justify-end items-center'>
            <button onClick={()=> handleClickButton()} className='w-10 h-1/2 hover:bg-slate-500'>
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
            </button>
        </div>
    )
}

const DropdownMenu = ({handleClickButton})=>{
    return(
        <div className='bg-[#00AEEF] absolute top-0 right-0 z-20 w-[15vw] min-h-[8vh] flex flex-col'>
            <NavLink to={"/home"} className={"text-white text-center"} onClick={()=>handleClickButton()}>
                Home
            </NavLink>
            <NavLink to={"/citys"} className={"text-white text-center"} onClick={()=>handleClickButton()}>
                Citys
            </NavLink>
            
        </div>
    )
}

const Header = () =>{
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });    
      const [buttonBurguer, setButtonBurguer] = useState(false)
    
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
            <div className="sticky top-0 z-50 grid grid-cols-2 items-center  min-h-[15vh] bg-[#00AEEF]">
                <div className='flex items-center'>
                    <div className='w-20 h-[10vh]'>
                        <img src={logo} className='w-full h-full object-cover'  alt="" />
                    </div>
                    <div>
                        <p className='text-white font-bold text-2xl'>My Tinerary</p>
                    </div>
                </div>
                {
                    windowSize.width < 768 ? <BurgerMenu handleClickButton={handleClickButton}></BurgerMenu> : 
                    <div className='flex justify-end gap-4'>
                    <NavLink to={"/home"} className={"text-white hover:bg-[#2ECC71] rounded-lg p-2"}>Home</NavLink>
                    <NavLink to={"/citys"} className={"me-2 text-white hover:bg-[#2ECC71] rounded-lg p-2"}>Citys</NavLink>
                </div>
                }
        <div className='relative w-[100vw]'>
            {
                buttonBurguer && windowSize.width < 768 ? <DropdownMenu handleClickButton={handleClickButton}></DropdownMenu> : ""
            }
        </div>
        </div>
        </>
        
    )
}
export  {Header}