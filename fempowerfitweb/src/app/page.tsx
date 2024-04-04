'use client';;

import NavBar from "@/componentes/NavBar";
import Services from "../componentes/Services/page";
import About from "../componentes/About/page";
import Home from "../componentes/Home/page";
import { useState } from "react";
import { LoginModal } from "@/componentes/LoginModal";



export default function Page() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <>
      <NavBar setIsLoginOpen={setIsLoginOpen} />
      
      <main>
        <Home />
        <About/>
        <Services />
        <LoginModal setIsLoginOpen={setIsLoginOpen} isOpen={isLoginOpen} />
      </main>
      
      <footer>
      </footer>   
    </>
  );
}
