'use client';

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import Services from "../componentes/Services";
import About from "../componentes/About";
import Home from "../componentes/Home";
import NavBar from "@/componentes/NavBar";
import { LoginModal } from "@/componentes/LoginModal";
import { CreateAcountModal } from "@/componentes/CreateAcountModal";

export default function Page() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCreateAcountOpen, setIsCreateAcountOpen] = useState(false);
  return (
    <>
      <header>
        <NavBar setIsLoginOpen={setIsLoginOpen} setIsCreateAcountOpen={setIsCreateAcountOpen} />
      </header>
      {/* <div id="home" className='min-h-screen flex-col items-center'>
        <div className="banner">
          <div className=' ml-36'>
            <h1 className="container text-red-300 text-7xl font-serif italic pt-96">Transforme</h1>
            <h2 className='text-2xl mt-3'>Sua Jornada de Bem-estar</h2>

            <p>
              Comece hoje sua caminhada
            </p>
            <p> para uma vida mais saudável,</p>
            <p>equilibrada e fortalecida</p>

            <button className="mt-10 border border-red-300 px-10 rounded-lg h-10">Saiba mais</button>
          </div>
        </div>
      </div> */}
      <Home />

      {/* <div id="about" className="flex min-h-screen flex-col items-center">
        <h1 className="text-4xl font-serif mt-40">ABOUT</h1>

        <div className=" p-10  grid-cols-5 grid w-full " >

          {suplementos.map((suplemento) => {
              return (
                <div>
                  <h2>{suplemento.title}</h2>
                  <p>{suplemento.body}</p>
                  <p>Usuario - {suplemento.userId}</p>
                </div>
              )
            })}
        </div>
      </div> */}
      <About />

      {/* <div id="services" className="min-h-screen flex-col items-center">
        <h1>Services</h1>
      </div> */}
      <Services />

      <LoginModal setIsLoginOpen={setIsLoginOpen} isOpen={isLoginOpen} />
      <CreateAcountModal setIsCreateAcountOpen={setIsCreateAcountOpen} isOpen={isCreateAcountOpen} />
    </>
  );
}
