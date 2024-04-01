import NavBar from "@/app/componentes/NavBar";

export default function Home() {
  return ( 
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="home" />

      <h1>home</h1>

    </main>
  );
}
