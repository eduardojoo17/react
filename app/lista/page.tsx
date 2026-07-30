
import Alert from "@/components/Alert";
import Contar from "@/components/Contar";
import Header from "@/components/Header";
import MostrarEsconder from "@/components/MostrarEsconder";

export default function page(){
    return(
        <div className="flex flex-col">
            <Header/>
            <Alert/>
            <Contar/>
            <MostrarEsconder/>
        </div>
    );
}