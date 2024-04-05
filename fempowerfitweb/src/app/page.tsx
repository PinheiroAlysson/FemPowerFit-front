'use client';

import NavBar from "@/componentes/NavBar";
import Services from "../componentes/Services/page";
import About from "../componentes/About/page";
import Home from "../componentes/Home/page";
import { useState } from "react";
import { LoginModal } from "@/componentes/LoginModal";

import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <>
      <nav id="nav" className="fixed w-full  z-10 pt-16">
        <div className='mx-20 flex justify-between items-center'>
            <ul className="flex space-x-4">
                <li><Link href="#home" className='hover:underline underline-offset-8 decoration-red-300'>Home</Link></li>
                <li><Link href="#about" className='hover:underline underline-offset-8 decoration-red-300'>About</Link></li>
                <li><Link href="#services" className='hover:underline underline-offset-8  decoration-red-300'>Services</Link></li>
            </ul>
            <Image src='/logo.png' alt="logo" width={200} height={100} className=''/>
            <div className="space-x-4">
                <button onClick={() => setIsLoginOpen(true)} className="border border-red-300 px-10 rounded-lg h-10 transition-all hover:scale-105 duration-150 ease-linear">Login</button>
                <button className='border border-red-300 px-10 rounded-lg h-10 transition-all hover:scale-105 duration-150 ease-linear'>Sign-in</button>

            </div>
        </div>
      </nav>

      {/* <NavBar setIsLoginOpen={setIsLoginOpen} /> */}
      
      <main>
          <div id="home" className='min-h-screen flex-col items-center'>
              <div className="banner" >
                  <div className=' ml-36'>
                      <h1  className="container text-red-300 text-7xl font-serif italic pt-96">Transforme </h1>
                      <h2 className='text-2xl mt-3'>Sua Jornada de Bem-estar</h2>
                      <p>
                          Comece hoje sua caminhada 
                      
                      </p>
                      <p> para uma vida mais saudável,</p>
                      <p>equilibrada e fortalecida</p>
                      <button  className="mt-10 border border-red-300 px-10 rounded-lg h-10">Saiba mais</button> <h1></h1>

                  </div>
              </div>
          </div>
          
          <div id="about" className="flex min-h-screen flex-col items-center">
            <h1 className="text-4xl font-serif mt-40 ">ABOUT</h1>
            <div className=" p-10  grid-cols-5 grid w-full " >

              {/* {suplementos.map((suplemento) => {
                return (
                  <div>
                    <h2>{suplemento.title}</h2>
                    <p>{suplemento.body}</p>
                    <p>Usuario - {suplemento.userId}</p>
                  </div>
                )
              })} */}
            </div>
          </div>

          <div id="services" className="min-h-screen flex-col items-center">

            <h1>Services</h1>

          </div>
        {/* <LoginModal setIsLoginOpen={setIsLoginOpen} isOpen={isLoginOpen} /> */}
      </main>
      
      <footer>
      </footer>   
    </>
  );
}
