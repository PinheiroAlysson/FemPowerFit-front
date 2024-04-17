'use client';

import { api } from "@/helper/api";
import { useEffect, useState } from "react";

interface Suplemento {
  body: string;
  userId: number;
  id: number;
  title: string;
  
}

export default function About()  {
  const [suplementos, setSuplementos] = useState<Suplemento[]>([]);

  const listaSuplementos =async () => {
    const suplementos =await api<Suplemento[], null>('posts')
    setSuplementos(suplementos)
  }
  
  useEffect(() => {
    // listaSuplementos()
  }, [])

  return ( 
    <div id="about" className="flex min-h-screen flex-col items-center">
      <h1 className="text-4xl font-serif mt-40">ABOUT</h1>

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
  );
};