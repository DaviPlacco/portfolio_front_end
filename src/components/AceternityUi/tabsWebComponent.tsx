"use client";
 
import ImageMarcussi from "../../../public/CarouselImages/MARCUSSIBACKGROUND.png";
import ImageFernanda from "../../../public/CarouselImages/FERNANDAFEIJOEIROBACKGROUND.png";
import ImageGCR from "../../../public/CarouselImages/GCRDIGITALBACKGROUND.png";
import ImageCampezzi from "../../../public/CarouselImages/CAMPEZZIBACKGROUND.png";
import { Tabs } from "../ui/tabs";

export function TabsDemo() {
    const tabs = [
      {
        title: "Marcussi",
        value: "Marcussi",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white">
            <a href=""rel="noopener noreffer" target="_blank">
            <img className="transition-all duration-300 hover:translate-y-[-20px]" src={ImageMarcussi} alt="" />
            </a>
          </div>
        ),
      },
      {
        title: "Fernanda Feijoeiro",
        value: "Fernanda Feijoeiro",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white">
            <a href=""rel="noopener noreffer" target="_blank">
            <img className="transition-all duration-300 hover:translate-y-[-20px]" src={ImageFernanda} alt="" />
            </a>
          </div>
        ),
      },
      {
        title: "GCR Digital",
        value: "GCR Digital",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white">
            <a href="" rel="noopener noreffer" target="_blank">
            <img className="transition-all duration-300 hover:translate-y-[-20px]" src={ImageGCR} alt="" />
            </a>
          </div>
        ),
      },
      {
        title: "Campezzi",
        value: "Campezzi",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white">
            <a href=""rel="noopener noreffer" target="_blank">
            <img className="transition-all duration-300 hover:translate-y-[-20px]" src={ImageCampezzi} alt="" />
            </a>
          </div>
        ),
      },
      {
        title: "Random",
        value: "random",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white">
            <a href=""rel="noopener noreffer" target="_blank">
            <img className="transition-all duration-300 hover:translate-y-[-20px]" src={ImageMarcussi} alt="" />
            </a>
          </div>
        ),
      },
    ];

    return (
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
        <Tabs tabs={tabs} />
      </div>
    );
  }
