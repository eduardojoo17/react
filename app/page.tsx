import CartaoPerfil from "@/components/CartaoDePerfil";
import Rodape from "@/components/Rodape";
import Titulo from "@/components/Titulo";


export default function Home() {
  let nome: string = "Ana"
  let idade: number = 20

  return (
    <div >
      <Titulo/>
      
      <div className="flex items-start gap-1">
        <CartaoPerfil/>
        <CartaoPerfil/>
        <CartaoPerfil/>
      </div>

      <p>2 + 2 ={2+2}</p>
      
      <h2>"Olá,{nome}"</h2>

      <h1 className="font-serif">{nome} tem {idade} anos</h1>

      <Rodape/>
    </div>

  );


}

