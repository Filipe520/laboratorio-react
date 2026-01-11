import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import { FiEye } from "react-icons/fi";

export default function CardShort() {
  const [isEnterShort, setIsEnterShort] = useState(false);
  const shorts = [
    {
      id: "123",
      url: "#",
      img: "/img/modelo-01.jpg",
      titleUser:
        "Existe também o utilitário line-clamp no Tailwind, que serve para limitar o número de linhas de texto exibidas.",
      channelUser: "@chatgpt",
      timePublic: "2:25",
      view: "2.4",
      likes: "186",
      comment: "3.2",
    },
    {
      id: "12",
      url: "#",
      img: "/img/modelo-02.jpg",
      titleUser:
        "Existe também o utilitário line-clamp no Tailwind, que serve para limitar o número de linhas de texto exibidas.",
      channelUser: "@chatgpt",
      timePublic: "2:25",
      view: "2.4",
      likes: "186",
      comment: "3.2",
    },
    {
      id: "12",
      url: "#",
      img: "/img/modelo-04.jpg",
      titleUser:
        "Existe também o utilitário line-clamp no Tailwind, que serve para limitar o número de linhas de texto exibidas.",
      channelUser: "@chatgpt",
      timePublic: "2:25",
      view: "2.4",
      likes: "186",
      comment: "3.2",
    },
    {
      id: "12",
      url: "#",
      img: "/img/modelo-05.jpg",
      titleUser:
        "Existe também o utilitário line-clamp no Tailwind, que serve para limitar o número de linhas de texto exibidas.",
      channelUser: "@chatgpt",
      timePublic: "2:25",
      view: "2.4",
      // likes: "186",
      // comment: "3.2",
    },
  ];
  return (
    <div className="h-dvh w-dvw">
      <section className="w-full md:w-full lg:w-[920px] lg:grid-cols-3  wrap-break-word md:mx-auto h-full grid justify-items-center gap-2 md:grid-cols-2 mt-10 grid-cols-1 ">
        {shorts.map((shorts, index) => (
          <Link rel="stylesheet" href="#" key={index} className="w-full">
            <section
              id="short"
              className="group  mx-auto max-w-[450px] md:w-full w-[89%] aspect-[5/9] rounded-xl relative flex flex-col justify-between overflow-hidden cursor-pointer shadow-lg shadow-blue-950"
              onMouseEnter={() => setIsEnterShort(true)}
              onMouseLeave={() => setIsEnterShort(false)}
            >
              {/*  Short: "IMG ou Video"  */}
              {/* <video
          src="../src//video/v1.mp4"
          autoplay
          loop
          muted
          className="aspect-video object-cover h-full rounded-xl absolute -z-1"
        ></video> */}
              <Image
                src={shorts.img}
                alt="img"
                className="object-cover h-full rounded-xl absolute -z-1 transition-transform duration-500 group-hover:scale-110 "
                width={1000}
                height={1000}
                unoptimized
              />
              {/* Icone de Play */}
              <div
                id="playShort"
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 ${
                  isEnterShort && shorts.id === "123"
                    ? "opacity-100"
                    : "opacity-0"
                } transition-opacity duration-300 bg-white/10 backdrop-blur-sm rounded-full w-22 h-22 flex items-center justify-center`}
              >
                <CiPlay1 className="text-[45px] text-white/80" />
              </div>
              {/* Container do TEMPO do short */}
              <div className="w-full flex items-center justify-end h-10 pr-2">
                <div className="p-2 rounded-md text-white bg-gradient-to-tr from-green-500/20 via-blue-800/20 to-rose-600 flex justify-center backdrop-blur bg-white/10">
                  <span className="font-semibold text-sm line-clamp-1">
                    {shorts.timePublic}
                    <span className="text-xs">m</span>
                  </span>
                </div>
              </div>
              {/* Container das informações do video */}
              <div className="p-4 flex flex-col gap-3 text-white backdrop-blur-sm bg-gradient-to-tr to-blue-900/20 via-blue-950/90 from-green-500">
                <h2 className="max-w-90 line-clamp-2 tracking-tight">
                  {shorts.titleUser}
                </h2>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={shorts.img}
                      alt="img"
                      className="w-9 h-9 object-cover rounded-full"
                      width={1000}
                      height={1000}
                      unoptimized
                    />
                    <p className="text-sm text-white">{shorts.channelUser}</p>
                  </div>
                  <ul className="flex justify-end gap-5 text-sm text-gray-200">
                    <li className="flex items-center justify-center gap-2">
                      <FiEye />
                      <span>{shorts.view} Milhões</span>
                    </li>
                    {/* <li className="flex items-center justify-center gap-2">
                    <SlLike />
                    <span>{shorts.likes}K</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <FaRegComment />
                    <span>{shorts.comment}K</span>
                  </li> */}
                  </ul>
                </div>
              </div>
            </section>
          </Link>
        ))}
      </section>
    </div>
  );
}
