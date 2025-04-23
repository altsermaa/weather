import { Box } from "./Box";
import Image from "next/image";
import { Search } from "lucide-react";

export const OuterBox = ({ color, boxColor, position }) => {
  const textDate = "April 22, 2025";
  const textLocation = "Ulaanbaatar";
  const gradus = "26";
  const textComment = "Patchy rain nearby";
  const circle = ["/orangeCircle.png", "/purpleCircle.png"];

  const positionDay = { left: "0", top: "-48px" };
  const positionNight = { right: "0", bottom: "-48px" };

  return (
    <div className="flex h-screen">
      <div
        className="relative flex flex-1 items-center justify-center border-none"
        style={{ backgroundColor: "#f2f4f6" }}
      >
        <div className="relative flex w-[567px] justify-center z-10">
          <div className="absolute right-[70px] w-full -top-16 z-30 overflow-hidden rounded-full">
            <Search />
            <input
              placeholder="Search"
              className="w-full py-4 pl-20 pr-6 outline-none text-[32px] font-bold"
              type="text"
            />
          </div>
          <Box
            boxColor="#f2f4f6"
            textDate={textDate}
            textLocation={textLocation}
            gradus={gradus}
            textComment={textComment}
          />
          <div className="absolute" style={position}>
            <Image  
              src="/orangeCircle.png"
              width={128}
              height={128}
              className="translate-x-10 translate-y-25"
            />
          </div>
        </div>
      </div>
      <div
        className="relative flex flex-1 items-center justify-center border-none"
        style={{ backgroundColor: "#0f151e" }}
      >
        <div className="relative flex w-[567px] justify-center z-10">
          <Box
            boxColor="#0f151e"
            textDate={textDate}
            textLocation={textLocation}
            gradus={gradus}
            textComment={textComment}
          />
          <div className="absolute" style={position}>
            <Image
              src="/purpleCircle.png"
              width={128}
              height={128}
              className="translate-x-10 translate-y-25"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
