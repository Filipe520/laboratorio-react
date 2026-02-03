"use client";

import CardShort from "./components/CardShort";
import CardVideo from "./components/CardVideo";

import { useState } from "react";

import * as VivaIcons from "./components/VivaIcons";

const icones = [
  "Cam",
  "Fire",
  "Time",
  "List",
  "Like",
  "Heart",
  "FireLight",
  "VideoLight",
  "Photo",
  "FileWaveform",
  "ShoppingCart",
  "ArrowForwardIos",
  "GoSignOut",
  "Play",
  "Eye",
  "Search",
  "Trash",
  "ArrowUturnLeft",
  "ArrowBack",
  "ArrowForward",
  "ArrowDown",
  "ArrowUp",
  "Home",
  "MenuKebab",
  "RegComment",
  "ArrowDownLight",
  "ArrowLeftLight",
  "ArrowRight",
  "ArrowRightLight",
  "ArrowUpBold",
  "Circle_Info",
  "CloseOutline",
  "EyeClosePassword",
  "EyeOpenPassword",
  "LockPassword",
  "OutLineDotsVerticalBold",
  "ThumbsUp",
  "AlignLeft",
  "BatterySaverFill",
  "BatterySaverLine",
  "BellOn",
  "BsEmojiTearFill",
  "CameraLight",
  "ClicleAlert",
  "DeleteOutline",
  "Dislike",
  "Edit",
  "EmojiHeartEyes",
  "EmojiTear",
  "EmojiWink",
  "ExternalLinkAltSolid",
  "HardDriveDownload",
  "IconKey",
  "Menu",
  "OutlineArrowDropDown",
  "OutlineArrowDropUp",
  "OutlineFullscreen",
  "OutlineFullscreenExit",
  "OutlineMail",
  "ProfileUser",
  "RegCirclePause",
  "RegCirclePlay",
  "RegEdit",
  "ReloadCircleOutline",
  "RewindBackward10",
  "RewindForward10",
  "Share",
  "SolidDislike",
  "ThumbsUpBold",
  "VideoCamBold",
  "VolumeMute",
  "VolumeUp",
];

const videos = [
  {
    id: "123",
    link: "#",
    src: "https://images.unsplash.com/photo-1767738912566-9071adbe014b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "My $10,000 Gaming Setup Tour 2026 | RGB Everything!",
    duration: 298,
    views: 856,
    timesTamp: new Date(),
    channel: "TeckLixo",
  },
  {
    id: "2",
    link: "#",
    src: "https://images.unsplash.com/photo-1767738912566-9071adbe014b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "My $10,000 Gaming Setup Tour 2026 | RGB Everything!",
    duration: 565,
    views: 856,
    timesTamp: new Date(),
    channel: "TeckLixo",
  },
  {
    id: "3",
    link: "#",
    src: "https://images.unsplash.com/photo-1767738912566-9071adbe014b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "My $10,000 Gaming Setup Tour 2026 | RGB Everything!",
    duration: 1563,
    views: 856,
    timesTamp: new Date(),
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
    views: 2.4,
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
    views: 2.4,
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
    views: 2.4,
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
    views: 2.4,
    likes: "186",
    comment: "3.2",
  },
];

export default function Laboratorio() {
  const [isOpen, setIsOpen] = useState(false);
  const styleIcone = "text-rose-400 size-10";

  const listaDeIcones = icones.map((icone) => {
    const IconeComp = (VivaIcons as Record<string, React.ElementType>)[icone];
    return { nameIcon: icone, icon: <IconeComp className={styleIcone} /> };
  });
  return (
    <div className="w-dvw h-dvh">
      <div className="w-full h-200 flex flex-col items-center justify-center mt-10 gap-5">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-800 p-5 rounded-2xl active:opacity-65 mx-auto"
        >
          Abrir modal Icones
        </button>
        {isOpen && (
          <div className="w-[90dvw] h-[95dvh] overflow-auto bg-gray-500/20 mx-auto rounded-lg ">
            <ol
              className="grid grid-cols-5 gap-10 flex-wrap p-20 items-center justify-center"
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

      <div>
        <div className="pt-20">
          {shorts.map((dataShorts) => (
            <CardShort
              key={dataShorts.id}
              image={dataShorts.src}
              link={dataShorts.url}
              title={dataShorts.title}
              views={dataShorts.views}
              id={dataShorts.id}
              duration={dataShorts.timePublic}
              date={new Date()}
              profileName={dataShorts.channel}
              profileImage={dataShorts.src}
              onlyShortOnPage
            />
          ))}
          {videos.map((dataVideos) => (
            <CardVideo
              duration={dataVideos.duration}
              id={dataVideos.id}
              title={dataVideos.title}
              link={dataVideos.link}
              image={dataVideos.src}
              profileImage={dataVideos.src}
              views={dataVideos.views}
              profileName={dataVideos.channel}
              date={dataVideos.timesTamp}
              key={dataVideos.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
