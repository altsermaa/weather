import { MapPin, House, Heart, User } from "lucide-react";
import Image from "next/image";
import { Loader } from "./Loader";

export const Box = ({
  boxColor,
  textDate,
  textLocation,
  textLocationColor,
  centerImage,
  iconColor,
  gradus,
  textComment,
  setLoading,
}) => {
  if (setLoading) {
    return <Loader />;
  } else {
    return (
      <div
        className={`z-20 width-103 h-207 rounded-[48px] backdrop-blur-lg overflow-hidden shadow-lg ${boxColor}`}
      >
        <div className="space-y-12 px-10 py-14 backdrop-blur-lg">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <h4 className="text-gray-400">{textDate}</h4>
              <h2
                className="h-12 text-5xl font-extrabold"
                style={{ color: textLocationColor }}
              >
                {textLocation}
              </h2>
            </div>
            <MapPin />
          </div>
          <div className="flex items-center justify-center">
            <Image src={centerImage} width={262.108} height={262.108} />
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
          <div
            className="flex items-center justify-between"
            style={{ color: iconColor }}
          >
            <House />
            <MapPin />
            <Heart />
            <User />
          </div>
        </div>
      </div>
    );
  }
};
