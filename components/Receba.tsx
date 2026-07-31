"use client";
import { useState } from "react";

export default function Receba() {
  const [nome, setNome] = useState<string>("");
  const [ender, setEnder] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");

  return (
    <div className="flex flex-col gap-2 m-4 p-4  bg-cyan-200 border-4">
      <p className="bg-black text-amber-50 text-center">
        3 inputs com 3 states individuais
      </p>
      <input
        className="border  "
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <p className="bg-black text-white ">{nome}</p>
      <input
        className="border   "
        value={ender}
        onChange={(e) => setEnder(e.target.value)}
      />
      <p className="bg-amber-800 text-white">{ender}</p>
      <input
        className="border  "
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      <p className="bg-amber-950 text-white ">{cpf}</p>
    </div>
  );
}
