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

export default function Laboratorio() {
  return (
    <div className="bg-white w-dvw h-dvh">
      <div>
        <div className="pt-20">
          {/* <CardShort /> */}
          <CardVideo dataVideos={videos} />
        </div>
      </div>
    </div>
  );
}
