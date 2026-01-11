import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiPlay1 } from "react-icons/ci";

interface CardVideoProps {
  id: string;
  link: string;
  image: string;
  title: string;
  date: Date;
  views: number;
  duration: number;
  profileName: string;
  profileImage: string;
}

export default function CardVideo({
  id,
  link,
  image,
  title,
  date,
  views,
  duration,
  profileName,
  profileImage,
}: CardVideoProps) {
  const [hoveredId, setHoveredId] = useState("");

  return (
    <div>
      <section className="flex items-center justify-center">
        <Link
          href={link}
          aria-label="Go to video"
          onMouseEnter={() => setHoveredId(id)}
          onMouseLeave={() => setHoveredId("")}
        >
          <div className="rounded-tl-2xl rounded-tr-2xl" id="cardVideo">
            <div className="max-w-130 min-w-50 w-[98%] mx-auto aspect-[7/4] file: rounded-2xl group overflow-hidden relative shadow-lg hover:shadow-blue-950">
              {/* Imagem do video */}
              <Image
                src={image}
                alt="img 1"
                className="group-hover:scale-105 transition-transform duration-300 border-none object-cover h-full w-full rounded-2xl "
                width={1000}
                height={1000}
              />
              {/* Icone de PLAY */}
              <div
                className={`bg-black/50 backdrop-blur w-15 h-15 absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center opacity-0 ${
                  hoveredId === id ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
              >
                <CiPlay1 className="text-2xl text-white" />
              </div>
              {/* Duração do Vídeo */}
              <div className="absolute right-2 bottom-2 p-2 bg-black/50 backdrop-blur text-white rounded-sm">
                <span className="text-sm">{duration}</span>
              </div>
            </div>
            {/* Informações do video -> Canal */}
            <div className="flex gap-4 py-3">
              <div>
                <Image
                  src={profileImage}
                  alt="img 1"
                  className="h-10 w-10 rounded-full"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="text-white flex flex-col">
                <h2 className="max-w-110 line-clamp-2">{title}</h2>
                <div className="-space-y-1">
                  <p className="text-gray-400">{profileName}</p>
                  <p className="text-gray-500 text-sm">{views}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
