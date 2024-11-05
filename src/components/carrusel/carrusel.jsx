import { useEffect, useState } from "react"
import { CardCarrusel } from "../cardCarrusel/cardCarrusel"
import './carrusel.css'

const Transition = ({currentObjet, nextObjet, id, clickNext, clickBack})=>{
    let animation = ""
    if((clickNext && !clickBack) || (!clickNext && !clickBack)){  
        animation = "contain-cards-transition-next"
    }else{
        animation = "contain-cards-transition-Back"
    }
    const bindingObject = [currentObjet, nextObjet]
    return(
        <>
          {bindingObject.map((c, index) => <CardCarrusel key={(id+index)}  data={c} clasStyle={animation} /> )}                
        </>
        
    )
}

function generarNumeroAleatorio() {
    const min = 1;
    const max = 1000000;
    const numeroAleatorioA = Math.floor(Math.random() * (max - min + 1)) + min;
    const numeroAleatorioB = Math.floor(Math.random() * ((max*2) - (min*4) + 1)) + (min*4)
    return numeroAleatorioA * numeroAleatorioB;
}

const Carrusel = ({ slider }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [clickNext, setClickNext] = useState(false);
    const [clickBack, setClickBack] = useState(false);
    const [random, setRandom] = useState(generarNumeroAleatorio());
    const [time, setTime] = useState(0);
  
    const handlerPaginationForward = () => {
      setCurrentPage(prevPage => (prevPage + 1) % slider.length);
      setRandom(generarNumeroAleatorio());
    };
  
    const handlerPaginationBack = () => {
      setCurrentPage(prevPage => (prevPage - 1 + slider.length) % slider.length);
      setRandom(num => num = generarNumeroAleatorio());
    };
  
    const handlerClickNext = () => {
      setClickBack(b => b = false);
      setClickNext(n => n = true);
      handlerPaginationForward();
      setTime(t => t = 0);
    };
  
    const handlerClickBack = () => {
      setClickNext(n => n = false)
      setClickBack(b => b = true);
      handlerPaginationBack();
      setTime(t => t = 0);
    };
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setClickNext(n => n = false);
        setClickBack(b => b = false);
        handlerPaginationForward();
        setTime(prevTime => prevTime + 1);
    }, 9000);

    return () => clearTimeout(timer);
    
    }, [time]);
  
    const oldPage = slider[(currentPage - 1 + slider.length) % slider.length];
  
    return (
      <div className="container-main">
        <button className="buttom-left-carrusel " onClick={handlerClickBack}>
        {'<'}
        </button>
        <div className="container-cards-carrusel no-scrollbar">
          <Transition id={random} currentObjet={oldPage} nextObjet={slider[currentPage]} clickNext={clickNext} clickBack={clickBack} />
        </div>
        <button className="buttom-right-carrusel " onClick={handlerClickNext}>{">"}</button>
      </div>
    );
  };
  export {Carrusel}