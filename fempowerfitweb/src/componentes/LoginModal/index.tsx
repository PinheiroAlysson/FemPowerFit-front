import { Dispatch, SetStateAction } from "react";

interface LoginModalProps {
  setIsLoginOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export function LoginModal({ isOpen, setIsLoginOpen }: LoginModalProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/80">
      {/* muda a largura do modal */}
      <div className="relative w-6/12 my-6 mx-auto"> 
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">

          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            <h3 className="text-3xl font-semibold">Login</h3>
            <button
              className="bg-transparent border-0 text-gray-300 float-right text-3xl font-bold"
              onClick={() => setIsLoginOpen(false)}
            >
              x
            </button>
          </div>

          <div className="relative p-6 flex-auto">
            Corpo do seu modal
          </div>

          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => setIsLoginOpen(false)}
            >
              Fechar
            </button>

            <button
              className="border border-red-300 px-10
              rounded-lg h-10 transition-all hover:bg-red-300
              hover:text-black duration-150 ease-linear"
              type="button"
              onClick={() => setIsLoginOpen(false)}
            >
              Enviar
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}