import { NavLink } from "react-router-dom";
import { Carrusel } from "../components/carrusel/carrusel";

const CardAction = ({ info }) => {
  return (
    <div className="w-1/2 h-1/2 overflow-hidden relative group">
      <img
        src={info.img}
        className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300"
        alt=""
      />
    </div>
  );
};

const CallToAction = ({ info }) => {
  return (
    <div className="w-full h-full flex flex-wrap">
      {info.map((card, index) => (
        <CardAction key={index + card.city} info={card} />
      ))}
    </div>
  );
};

const Welcome = () => {
  return (
    <div className="h-[85vh] w-full">
      <div className="relative h-full w-full">
        <img
          src={
            "https://i.pinimg.com/originals/03/e1/d3/03e1d3538a37f81161da7fcda166fb3b.gif"
          }
          className="w-full h-full object-cover"
          alt=""
        />
        <div className=" absolute top-[20vh] left-[25%] md:top-[38vh] w-1/2">
          <p className=" text-2xl text-center text-white bg-black/50">
            <span className="me-2 text-2xl font-bold text-white">
              My Tinerary:
            </span>
            Find your perfect trip, designed by insiders who know and love their
            cities!
          </p>
        </div>
      </div>
    </div>
  );
};

const sliderCarrusel = [
  [
    {
      img: "https://viajes.nationalgeographic.com.es/medio/2021/01/26/templo-de-asakusa_46a4b335_1200x630.jpg",
      city: "Tokyo, japon",
    },
    {
      img: "https://www.panavision-tours.com/viajes/bangkok-tailandia/bangkok.jpg",
      city: "Bangkok, Tailandia",
    },
    {
      img: "https://colombianabroad.com/wp-content/uploads/seul-alojamiento-feature-1024x768.jpg",
      city: "Seul, Corea del Sur",
    },
    {
      img: "https://drivemefoody.com/wp-content/uploads/china-beijing-forbidden-city-hall-supreme-harmony-close.jpg",
      city: "Pekin, China",
    },
  ],
  [
    {
      img: "https://historia.nationalgeographic.com.es/medio/2019/12/11/coliseo-roma_2924b6ae_1280x720.jpg",
      city: "Roma, Italia",
    },
    {
      img: "https://www.spain.info/.content/imagenes/cabeceras-grandes/madrid/calle-gran-via-madrid-s333961043.jpg",
      city: "Madrid, España",
    },
    {
      img: "https://res.cloudinary.com/lastminute-contenthub/s--3sy466uV--/c_limit,h_999999,w_768/f_auto/q_auto:eco/v1/DAM/Photos/Destinations/Europe/Portugal/Lisbon/lisboa_186440843",
      city: "Lisboa, Portugal",
    },
    {
      img: "https://viajes.nationalgeographic.com.es/medio/2017/02/09/shutterstock-302415089_6b607cdb.jpg",
      city: "Berlin, Alemania",
    },
  ],
  [
    {
      img: "https://deih43ym53wif.cloudfront.net/large_cathedral-cordoba-argentina-shutterstock_1140671330_a570eb940e.jpeg",
      city: "Cordoba, Argentina",
    },
    {
      img: "https://cdn.colombia.com/images/v2/turismo/sitios-turisticos/medellin/Plaza-Botero-y-el-centro-de-Medellin-800.jpg",
      city: "Medellin, Colombia",
    },
    {
      img: "https://media.tacdn.com/media/attractions-content--1x-1/12/29/06/2b.jpg",
      city: "Cancun, Mexico",
    },
    {
      img: "https://dfsud.com/dfsud/site/artic/20240724/imag/foto_0000000220240724093103/x64e76978cb654.jpg.pagespeed.ic.SAh8eEbneU.jpg",
      city: "Bariloche, Argentina",
    },
  ],
];

const Home = () => {
  const infoCity = [
    {
      img: "https://img.freepik.com/foto-gratis/mercado-bahia-miami_23-2151599511.jpg",
      city: "Maiami",
    },
    {
      img: "https://mercomillas.com.ar/wp-content/uploads/2023/02/paises-asiaticos-scaled.jpg",
      city: "Japon",
    },
    {
      img: "https://bogota.gov.co/sites/default/files/2024-02/bogota-inteligente-1.jpg",
      city: "Bogota",
    },
    {
      img: "https://www.nuriacalvo.com/wp-content/uploads/2024/02/Tres-ciudades-deslumbrantes-tras-el-anochecer-4.jpg",
      city: "Paris",
    },
  ];

  return (
    <div className="min-h-[70vh] w-full ">
      <Welcome />
      <div className=" relative flex flex-col md:flex-row md:items-center w-full h-[85vh] items-center bg-[#00AEEF]">
          <img src="https://mercomillas.com.ar/wp-content/uploads/2023/02/paises-asiaticos-scaled.jpg" className="absolute top-0 w-full h-full object-cover" alt="" />
        <div className="h-[35%] w-full md:w-1/2 md:h-full md:flex md:items-center z-10 mt-4">
          <h1 className="text-white ms-5 md:text-2xl font-bold bg-black/50">
            Dive into the Urban Magic and Discover the Most Fascinating Cities
            in the World! 
            <span>
              <NavLink
                className={"text-[#FFD700] bg-black/50 mx-2 hover:text-[#FF7F50] hover:bg-[#2ECC71] rounded-lg"}
                to={"/citys"}
              >
                Click here
              </NavLink>
            </span>
            to explore and be amazed by their charms
          </h1>
        </div>
        <div className="z-10">
          <p className="text-2xl text-white text-center bg-black/50">Popular My tineraries</p>
          <div className="h-[42vh] w-[100vw] md:w-[48vw] md:h-[70vh] relative">
            <Carrusel slider={sliderCarrusel} />
          </div>
        </div>
      </div>
      
    </div>
  );
};
export { Home };
