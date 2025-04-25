import { MapPin } from "lucide-react";

export const SearchResult = ({ result, onClick }) => {
  const firstFour = result.length >= 4 ? result.splice(0, 4) : result;

  return firstFour.map((el, index) => {
    return (
      <div
        className="flex bg-white gap-5 font-bold py-4 pl-20 cursor-pointer"
        onClick={() => onClick(el.cityName)}
        key={index}
      >
        <MapPin className="text-gray-400 font-bold" />
        <p>
          {el.cityName}, {el.countryName}
        </p>
      </div>
    );
  });
};
