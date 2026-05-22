"use client";

import { useState } from "react";
import * as VivaIcons from "./components/VivaIcons";

const styleIcone = "text-rose-400 size-10";

export default function Laboratorio() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  // pega todos os nomes exportados automaticamente
  const icones = Object.keys(VivaIcons);

  // aplica filtro conforme o texto digitado
  const listaDeIcones = icones
    .filter((nome) => nome.toLowerCase().includes(search.toLowerCase()))
    .map((icone) => {
      const IconeComp = (VivaIcons as Record<string, React.ElementType>)[icone];
      return { nameIcon: icone, icon: <IconeComp className={styleIcone} /> };
    });

  return (
    <div className="w-dvw ">
      <div className="w-full h-200 flex flex-col items-center justify-center mt-10 gap-5">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-800 p-5 rounded-2xl active:opacity-65 mx-auto"
        >
          Abrir modal Icones
        </button>

        {isOpen && (
          <div className="w-[90dvw] h-[80dvh] overflow-auto bg-gray-500/20 mx-auto rounded-lg  relative">
            {/* Input de pesquisa */}
            <div className="w-full  sticky top-0 left-0 bg-black/20 z-10 backdrop-blur-2xl flex items-center justify-center p-5">
              <input
                type="text"
                placeholder="Pesquisar ícone..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-4 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
            </div>

            {/* Lista de ícones filtrada */}
            <ol
              className="grid grid-cols-3 gap-10 flex-wrap items-center justify-center p-5"
              type="i"
            >
              {listaDeIcones.map((icon, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  {icon.icon}
                  {icon.nameIcon}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
