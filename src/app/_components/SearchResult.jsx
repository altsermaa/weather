import { MapPin } from "lucide-react";

export const SearchResult = ({ result }) => {
  const firstFour = result.length >= 4 ? result.splice(0, 4) : result;

  return firstFour.map((el, index) => {

    return (

      <div className="flex bg-white gap-5 font-bold py-4 pl-20">
        <MapPin className="text-gray-400 font-bold" />
        <div className="flex">
          <p>{el.cityName},</p>
          <p>{el.countryName}</p>
        </div>
      </div>
    );
  });
};
