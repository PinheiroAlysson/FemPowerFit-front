import Image from 'next/image';
import "./home.css"


export default function Home(){


    return  (


        <main id="home" className="min-h-screen flex-col items-center">
            
            <div className=''>
            <div className="banner" >
            <div className=' ml-36'>
            <h1  className=" container  text-red-300 text-7xl font-serif italic pt-96  ">Transforme </h1>
            <h2 className='text-2xl mt-3'>Sua Jornada de Bem-estar</h2>
                  <p>
                    Comece hoje sua caminhada 
                   
                  </p>
                  <p> para uma vida mais saudável,</p>
                  <p>equilibrada e fortalecida</p>
                  <button href="/" className="mt-10 border border-red-300 px-10 rounded-lg h-10 btn color:#754242">Saiba mais</button> <h1></h1>

            </div>
            </div>
           
            </div>
          
            
        </main>
    
    )


}