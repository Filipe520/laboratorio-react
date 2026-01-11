import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiPlay1 } from "react-icons/ci";

type dataVideos = {
  id: string;
  src: string;
  title: string;
  duration: string;
  views: string;
  timesTamp: string;
  channel: string;
};

interface PropCardVideo {
  dataVideos: dataVideos[];
}

export default function CardVideo({ dataVideos }: PropCardVideo) {
  const [hoveredId, setHoveredId] = useState("");
  return (
    <div>
      {dataVideos.map((data, index) => (
        <section key={index} className="flex items-center justify-center">
          <Link
            href={"#"}
            aria-label="Go to video"
            onMouseEnter={() => setHoveredId(data.id)}
            onMouseLeave={() => setHoveredId("")}
          >
            <div className="rounded-tl-2xl rounded-tr-2xl" id="cardVideo">
              <div className="max-w-130 min-w-50 w-[98%] mx-auto aspect-[7/4] file: rounded-2xl group overflow-hidden relative">
                {/* Imagem do video */}
                <Image
                  src={data.src}
                  alt="img 1"
                  className="group-hover:scale-105 transition-transform duration-300 border-none object-cover h-full w-full rounded-2xl"
                  width={1000}
                  height={1000}
                />
                {/* Icone de PLAY */}
                <div
                  className={`bg-black/50 backdrop-blur w-15 h-15 absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center opacity-0 ${
                    hoveredId === data.id ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-300`}
                >
                  <CiPlay1 className="text-2xl text-white" />
                </div>
                {/* Duração do Vídeo */}
                <div className="absolute right-2 bottom-2 p-2 bg-black/50 backdrop-blur text-white rounded-sm">
                  <span className="text-sm">{data.duration}</span>
                </div>
              </div>
              {/* Informações do video -> Canal */}
              <div className="flex gap-4 py-3">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1603016129004-c7539f86b53f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBkb2N1bWVudGFyeXxlbnwxfHx8fDE3NjgwMjI5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="img 1"
                    className="h-10 w-10 rounded-full"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="text-white flex flex-col">
                  <h2 className="max-w-110 line-clamp-2">{data.title}</h2>
                  <div className="-space-y-1">
                    <p className="text-gray-400">{data.views}</p>
                    <p className="text-gray-500 text-sm">{data.timesTamp}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>
      ))}
    </div>
  );
}

//     const cardVideo = document.getElementById('cardVideo');
//     const iconePlayVideo = document.getElementById('iconePlayVideo');

//     cardVideo.addEventListener('mouseenter', userEnterVideo);
//     cardVideo.addEventListener('mouseleave', userLeaveVideo);

//     function userEnterVideo() {
//       iconePlayVideo.style.opacity = '1';
//     }
//     function userLeaveVideo() {
//       iconePlayVideo.style.opacity = '0';
//     }
