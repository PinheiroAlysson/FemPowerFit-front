import NavBar from "@/app/componentes/NavBar";
import Services from "./pages/Services/page";
import About from "./pages/About/page";
import Home from "./pages/Home/page";



export default function Page() {
  return (
    <>
   
      <NavBar  />  

      <main>
      <Home />
      <About/>
      <Services />
     
     
      </main>

      <footer>

      </footer>
   

    

     
    </>
  );
}
