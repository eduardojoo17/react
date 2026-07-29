import Titulo from "./Titulo"

export default function Header(){
    return( <div>
      <header className="flex flex-col gap-4 m-4 py-3 px-6 font-serif text-amber-50 bg-amber-950 rounded-md shadow-md font-bold"><div className=" flex justify-center border-2 p-10"><Titulo/></div>
      <nav><a className="bg-amber-700 gap-2 m-2 rounded-md py-1 px-2" href="/">Inicio - exercicios</a><a className="bg-red-600 m-2 rounded-md py-1 px-2" href="/turma">Continuação - turma</a><a className="bg-green-800 m-2 rounded-md py-1 px-2" href="/prop">prop - segunda lista de exercicios</a><a className="bg-blue-800 m-2 rounded-md py-1 px-2" href="/lista">Lista 14 </a></nav></header>
    </div> 
    )}