import NavBar from "@/componentes/NavBar"
import Link from "next/link"
import { Button } from "@nextui-org/button";
import { getSuplementos } from "../actions/suplemento/getSuplementos";


interface Suplemento {
    id: number,
    nome: string,
    imagem: string
}

export default async function Suplementos() {
    
    const suplemento: Suplemento[] = await getSuplementos()

    return(
        <main className="flex min-h-screen flex-col items-center">
            <section className="flex flex-col gap-2 bg-slate-800 min-w-[600px] mt-4 p-2 rounded">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Suplementos Cadastrados</h2>
                    <Link href="/suplemento/new">
                    </Link>
                </div>

                
            </section>
        </main>
    )
}