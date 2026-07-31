"use client";
import { useState } from "react";

export default function Receba3() {
  setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="flex flex-col gap-2 m-4 p-4 bg-cyan-700 border-4">
      <p className="bg-black text-amber-50 text-center"> </p>
      <input
        name="nome"
        onChange={(e) => {
          setForm({ ...form, nome: e.target.value });
        }}
      />

      <p className="bg-black text-white ">{form.nome}</p>

      <input
        name="endereco"
        onChange={(e) => {
          setForm({ ...form, endereco: e.target.value });
        }}
      />

      <p className="bg-amber-800 text-white">{form.endereco}</p>

      <input
        name="cpf"
        onChange={(e) => {
          setForm({ ...form, cpf: e.target.value });
        }}
      />
      <p className="bg-amber-950 text-white ">{form.cpf}</p>
    </div>
  );
}
