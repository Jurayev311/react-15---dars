  import React from "react";
  import cars from "../../assets/image.png";
  import CountUp from "react-countup";
import { Link } from "react-router-dom";

  const Hero = () => {
    return (
      <section className="relative w-full min-h-screen bg-gradient-to-r from-gray-900 to-black text-white py-20 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Orzuingizdagi avtomobilni toping
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Eng so‘nggi modellardan tortib, eng yaxshi narxlarda sifatli
              avtomobillar. Biz bilan tez va ishonchli avtoulov xaridini amalga
              oshiring!
            </p>

            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-blue-700 transition-all">
                Batafsil ma'lumot
              </button>
              <div>
              <Link to={'/admin/cars'}>
              <button className="bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-600 transition-all">
                Avtomobillarni ko'rish
              </button>
              </Link>
              </div>
            </div>

            <div className="mt-8 flex gap-8 justify-center md:justify-start text-white/80">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white"><CountUp start={0} end={10000} duration={1} /></h3>
                <p className="text-sm">Mamnun mijozlar</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white"><CountUp start={0} end={500} duration={2} />+</h3>
                <p className="text-sm">Turlar</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white"><CountUp start={0} end={24} duration={3} />/<CountUp start={0} end={7} duration={3} /></h3>
                <p className="text-sm">Xizmat</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center animate-slideIn">
            <img
              src={cars}
              alt="Biz haqimizda"
              className="rounded-2xl shadow-lg border-4 border-gray-700 hover:scale-105 transition-transform duration-300 
      w-[90%] md:w-auto max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl"
            />
          </div>
        </div>
      </section>
    );
  };

  export default Hero;
