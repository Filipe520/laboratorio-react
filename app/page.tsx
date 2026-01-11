"use client";

import CardShort from "./components/CardShort";
import CardVideo from "./components/CardVideo";

const videos = [
  {
    id: "123",
    src: "https://images.unsplash.com/photo-1767738912566-9071adbe014b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "My $10,000 Gaming Setup Tour 2026 | RGB Everything!",
    duration: "18:24",
    views: "856K views.",
    timesTamp: "3 days ago",
    channel: "TeckLixo",
  },
];

const shorts = [
  {
    id: "1",
    url: "#",
    src: "/img/modelo-01.jpg",
    title:
      "Existe também o utilitário line-clamp no Tailwind, que serve para limitar o número de linhas de texto exibidas.",
    channel: "@chatgpt",
    timePublic: "2:25",
    views: "2.4",
    likes: "186",
    comment: "3.2",
  },
  {
    id: "2",
    url: "#",
    src: "/img/modelo-02.jpg",
    title:
      "Existe também o utilitário line-clamp no Tailwind, que serve para limitar o número de linhas de texto exibidas.",
    channel: "@chatgpt",
    timePublic: "2:25",
    views: "2.4",
    likes: "186",
    comment: "3.2",
  },
  {
    id: "3",
    url: "#",
    src: "/img/modelo-04.jpg",
    title:
      "Existe também o utilitário line-clamp no Tailwind, que serve para limitar o número de linhas de texto exibidas.",
    channel: "@chatgpt",
    timePublic: "2:25",
    views: "2.4",
    likes: "186",
    comment: "3.2",
  },
  {
    id: "4",
    url: "#",
    src: "/img/modelo-05.jpg",
    title:
      "Existe também o utilitário line-clamp no Tailwind, que serve para limitar o número de linhas de texto exibidas.",
    channel: "@chatgpt",
    timePublic: "2:25",
    views: "2.4",
    likes: "186",
    comment: "3.2",
  },
];

export default function Laboratorio() {
  return (
    <div className="w-dvw h-dvh">
      <div>
        <div className="pt-20">
          <CardShort dataShorts={shorts} />
          <CardVideo dataVideos={videos} />
        </div>
      </div>
    </div>
  );
}
