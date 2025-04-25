"use client";

import { Box } from "./Box";
import Image from "next/image";
import { Search } from "lucide-react";
import { SearchResult } from "./SearchResult";
import { useEffect, useState } from "react";

export const OuterBox = ({ fixedData }) => {
  const [search, setSearch] = useState("");
  const [textLocation, setTextLocation] = useState("Ulan bator");
  const [weather, setWeather] = useState({
    textDate: "",
    gradusDay: "",
    gradusNight: "",
    textComment: "",
  });
  const [loading, setLoading] = useState(false);

  const searchedCity = (e) => {
    setSearch(e.target.value);
  };

  const result = fixedData.flatMap((el) => {
    const filteredCities = el.filter((city) => {
      if (city.cityName.toLowerCase().includes(search)) {
        return true;
      }
    });
    return filteredCities;
  });

  const selectedCity = (param) => {
    setTextLocation(param);
    setSearch("");
  };

  useEffect(() => {
    setLoading(true);

    const fetchWeather = async () => {
      const weatherJSON = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=899d9c2c0f5845838dc70138240912&q=${textLocation}`
      );
      const weather = await weatherJSON.json();

      console.log(weather);

      const data = {
        textDate: weather?.forecast?.forecastday[0]?.date,
        gradusDay: weather?.forecast?.forecastday[0]?.day.maxtemp_c,
        gradusNight: weather?.forecast?.forecastday[0]?.day.mintemp_c,
        textComment: weather?.current?.condition?.text,
      };
      console.log(data);

      setWeather(data);
      setLoading(false);
    };

    fetchWeather();
  }, [textLocation]);

  return (
    <div className="flex h-screen">
      <div
        className="relative flex flex-1 items-center justify-center border-none"
        style={{ backgroundColor: "#f2f4f6" }}
      >
        <div className="relative flex w-[567px] justify-center z-10">
          <div className="absolute right-[70px] w-full -top-16 z-30">
            <div className="relative flex items-center w-full py-4 pl-20 pr-6 gap-4 bg-white overflow-hidden rounded-full">
              <Search className="text-gray-400 font-bold" />
              <input
                placeholder="Search"
                type="text"
                value={search}
                onChange={searchedCity}
                className="outline-none text-[32px] font-bold  focus: outline-none"
              />
            </div>
            {result.length !== 0 && search && (
              <div className="w-full rounded-full mt-5">
                <SearchResult result={result} onClick={selectedCity} />
              </div>
            )}
          </div>
          <Box
            boxColor="bg-[#f2f4f6]"
            textDate={weather.textDate}
            textLocation={textLocation}
            textLocationColor="black"
            centerImage="/sun.png"
            iconColor="#4b5563"
            gradus={weather.gradusDay}
            textComment={weather.textComment}
            setLoading={setLoading}
          />
          <div className="absolute -top-48 left-0 translate-x-10 translate-y-40">
            <Image src="/orangeCircle.png" width={128} height={128} />
          </div>
        </div>
      </div>
      <div
        className="relative flex flex-1 items-center justify-center border-none"
        style={{ backgroundColor: "#0f151e" }}
      >
        <div className="relative flex w-[567px] justify-center z-10">
          <Box
            boxColor="bg-[#0f151e]"
            textDate={weather.textDate}
            textLocation={textLocation}
            textLocationColor="white"
            centerImage="/moon.png"
            iconColor="#d2d4d8"
            gradus={weather.gradusNight}
            textComment={weather.textComment}
          />
          <div className="absolute -bottom-18 right-0 -translate-x-10 -translate-y-10">
            <Image src="/purpleCircle.png" width={128} height={128} />
          </div>
        </div>
      </div>
    </div>
  );
};
