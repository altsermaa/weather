import { MapPin, House, Heart, User } from "lucide-react";
import Image from "next/image";

export const Box = ({
  boxColor,
  textDate,
  textLocation,
  gradus,
  textComment,
}) => {
  return (
    <div
      className="z-20 width-103 h-207 rounded-[48px] backdrop-blur-md overflow-hidden shadow-lg"
      style={{ backgroundColor: boxColor }}
    >
      <div className="space-y-12 px-10 py-14 backdrop-blur-lg">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h4 className="text-gray-400">{textDate}</h4>
            <h2 className="h-12 text-5xl font-extrabold text-gray-900">
              {textLocation}
            </h2>
          </div>
          <MapPin />
        </div>
        <div className="flex items-center justify-center">
          <Image src="/sun.png" width={262.108} height={262.108} />
        </div>
      </div>
      <div className="px-12">
        <div className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white">
          {gradus}
        </div>
        <h6
          className="font-extrabold mb-12 h-6"
          style={{ color: "rgb(119, 124, 206)" }}
        >
          {textComment}
        </h6>
        <div className="flex items-center justify-between">
          <House />
          <MapPin />
          <Heart />
          <User />
        </div>
      </div>
    </div>
  );
};
