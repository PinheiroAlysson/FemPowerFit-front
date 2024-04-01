import NavBar from "@/app/componentes/NavBar"


export default function About: React.FC = () => { 
    return ( 
      <main className="flex min-h-screen flex-col items-center">
        <NavBar active="about" />
  
        <h1>About</h1>

      </main>
  
      
    );
  };